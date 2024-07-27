import { ScrollView, StyleSheet, View, Image , Text } from "react-native";
import OutlineButton from "../components/ui/outlinButton";
import { Colors } from "../constants/colors";
import { useEffect, useState  } from "react";
import { fetchPlaceDetails } from "../util/database";

function PlaceDetails({route,navigation}) {   

    const [fetchedPlace, setFetchedPlace] = useState();
    const selectedId = route.params.placeId;

    function ShowOnMapHandler() {       
        console.log("showOnMap ",fetchedPlace);
        navigation.navigate("Map",{
            initialLat: fetchedPlace.lat,
            initialLng: fetchedPlace.lng
        });
    }

    useEffect(() => {
        async function loadPlaceData() {
            const place = await fetchPlaceDetails(selectedId);
            console.log("PlaceDetails",place);
            setFetchedPlace(place);
            navigation.setOptions({title: place.title});
        }
        loadPlaceData();
    },[selectedId])

    if(!fetchedPlace) {
        return <View style={styles.fallback}>
            <Text>Loading Place Data ...</Text>
        </View>
    }

    return (
        <ScrollView>
            <Image source={{uri: fetchedPlace.imageUri}} style={styles.image} />
            <View style={styles.locationContainer}>
                <View style={styles.addressContainer}>
                    <Text style={styles.address}>{fetchedPlace.address}</Text>
                </View>
                <OutlineButton icon="map" onPress={ShowOnMapHandler}>View on map</OutlineButton>
            </View>
        </ScrollView>
    )
}

export default PlaceDetails;

const styles = new StyleSheet.create({
    fallback: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: '35%',
        minHeight: 300,
        width: '100%'
    },
    locationContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    addressContainer: { 
        padding: 20
    },
    address: {
        color: Colors.primary500,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16
    }
})