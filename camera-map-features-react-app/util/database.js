import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('places');


export async function init() {
    const promise = new Promise( async (resolve, reject) => {  

       await db.withTransactionAsync( async (database) => {  
        console.log("database");
        database.execAsync(`
            CREATE TABLE IF NOT EXISTS places ( 
                id INTEGER PRIMARY KEY NOT NULL,
                title TEXT NOT NULL,
                imageUrl TEXT NOT NULL,
                address TEXT NOT NULL,
                lat REAL NOT NULL,
                lng REAL NOT NULL
            )
          `);
       }).then(() => {
        resolve();
       }).catch((error) => {
        reject(error);
       });
    });
    return promise;
}
