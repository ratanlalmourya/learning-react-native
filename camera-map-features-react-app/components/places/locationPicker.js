import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from "expo-location";

import OutlineButton from "../ui/outlinButton";
import { Colors } from "../../constants/colors";
import { useState } from "react";
import getMapPreview from "../../util/location";
import { useNavigation } from "@react-navigation/native";

function LocationPicker() { 
    const [pickedLocation,setPickedLocation] = useState();
    const [locationPermissionInformation, requestPermisson ] = useForegroundPermissions();
    const navigation = useNavigation();
    async function verifyPermission() {
        if(locationPermissionInformation.status === PermissionStatus.UNDETERMINED ){
            const permissonResponse = await requestPermisson();
            return permissonResponse.granted;
        }

        if(locationPermissionInformation.status === PermissionStatus.DENIED ){
            Alert.alert(
                'Insufficient Permissons!',
                'You need to grant  location permissons to use this app.'
            )

            return false;
        }

        return true;
    }

    async function getLocationHandler() {

        const hasPermission = await verifyPermission();
        if(!hasPermission) {
            return;
        }
        const location = await  getCurrentPositionAsync();
        setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude
        })
        console.log("Location ", location);
    }

    function pickOnMapHandler() {
        navigation.navigate("Map");
    }

    let locationPreview = <Text>No location picked yet</Text>;
    if(pickedLocation) {    
        
        locationPreview = <Image style={styles.image} source={{ uri: getMapPreview(pickedLocation.lat,pickedLocation.lng) }} />;
    }

    return (
        <View>
            <View style={styles.mapPreview}>
                {locationPreview}
            </View>
            <View style={styles.actions}>
                <OutlineButton icon="location" onPress={getLocationHandler}>Locate User</OutlineButton>
                <OutlineButton icon="map" onPress={pickOnMapHandler}>Pick on Map</OutlineButton>
            </View>
        </View>
    )
}

export default LocationPicker;

const styles = StyleSheet.create({
    mapPreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4,
        overflow: 'hidden'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
    }

})