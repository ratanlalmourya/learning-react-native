import * as SQLite from "expo-sqlite";
import { Place } from "../models/place";

const db = SQLite.openDatabaseSync("newplaces.db");

export async function init() {
  const promise = new Promise(async (resolve, reject) => {
    await db.withTransactionAsync(async () => {
      await db
        .execAsync(
          `CREATE TABLE IF NOT EXISTS newplaces ( 
                id INTEGER PRIMARY KEY NOT NULL,
                title TEXT NOT NULL,
                imageUri TEXT NOT NULL,
                address TEXT NOT NULL,
                lat REAL NOT NULL,
                lng REAL NOT NULL
            )
          `,
          []
        )
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
  return promise;
}

export function insertPlace(place) {
  const promise = new Promise(async (resolve, reject) => {
    await db.withTransactionAsync(async () => {
      await db
        .runAsync(
          `INSERT INTO newplaces (title, imageUri, address, lat, lng) VALUES (?,?,?,?,?)`,
          [
            place.title,
            place.imageUrl,
            place.address,
            place.location.lat,
            place.location.lng,
          ]
        )
        .then((result) => {
          console.log(result);
          resolve(result);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  });
  return promise;
}


export function fetchPlaces() {
  const promise = new Promise(async (resolve, reject) => {
    await db.withTransactionAsync(async () => {
      await db
        .getAllAsync(`SELECT * FROM newplaces`, [])
        .then((result) => {
          console.log("Get all places ", result);
          const places = [];
          result.forEach((place) => {
            places.push(
              new Place(place.title, place.imageUri, {address: place.address, lat: place.lat, lng: place.lng},place.id )
            );
          });
          resolve(places);
        })
        .catch((error) => {
          console.log("Error - Get all places ", error);
          reject(error);
        });
    });
  });

  return promise;
}

export function fetchPlaceDetails(id) {
  const promise = new Promise((resolve,reject) => {
    db.withTransactionAsync(async () => {
      await db.getAllAsync(
        `SELECT * FROM newplaces WHERE id = ?`,[id]
      ).then((result) => {
        console.log("fetchPlaceDetails ",result[0]);
        resolve(result[0]);
      }).catch((error) => {
        console.log("Error - fetchPlaceDetails",error);
        reject(error)
      })
    })
  })

  return promise;
}
