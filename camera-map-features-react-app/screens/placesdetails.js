import { ScrollView, StyleSheet, View, Image , Text } from "react-native";
import OutlineButton from "../components/ui/outlinButton";
import { Colors } from "../constants/colors";
import { useEffect  } from "react";

function PlaceDetails({route}) {   

    function ShowOnMapHandler() {
    }

    const selectedId = route.params.placeId;

    useEffect(() => {

    },[selectedId])

    return (
        <ScrollView>
            <Image style={styles.image} />
            <View style={styles.locationContainer}>
                <View style={styles.addressContainer}>
                    <Text style={styles.address}>Address</Text>
                </View>
                <OutlineButton icon="map" onPress={ShowOnMapHandler}>View on map</OutlineButton>
            </View>
        </ScrollView>
    )
}

export default PlaceDetails;

const styles = new StyleSheet.create({
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