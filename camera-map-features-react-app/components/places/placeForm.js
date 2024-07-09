import { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./locationPicker";
import Button from "../ui/button";


function PlaceForm() {  

    const [enteredTitle,setEnteredTitle] = useState('');
    const [pickedLocation, setPickedLocation] = useState();
    const [selectedImage, setSelectedImage ]= useState();

    function changedTitleHandler(eneteredTitle) {
        setEnteredTitle(eneteredTitle);
    }

    function savedPlaceHandler() {
        console.log(enteredTitle);
        console.log(selectedImage);
        console.log(pickedLocation);
    }

    function takeImageHandler(imageUri) {
        setSelectedImage(imageUri);
    }

    const pickLocationHandler = useCallback((location) => {
        setPickedLocation(location);
    },[]);

    return (
       <ScrollView style={styles.form}>
            <View>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.input} value={enteredTitle} onChangeText={changedTitleHandler}/>
            </View>
            <ImagePicker onTakeImage={takeImageHandler} />
            <LocationPicker onPickLocation={pickLocationHandler}  />
            <Button onPress={savedPlaceHandler}>Add Place</Button>
       </ScrollView>
    )
}


export default PlaceForm;

const styles =  StyleSheet.create({
    form: {
        flex: 1,
        padding: 24
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 4,
        color: Colors.primary500
    },
    input: {
        marginVertical: 8,
        marginHorizontal: 4,
        paddingVertical: 8,
        fontSize: 16,
        borderBottomColor: Colors.primary700,
        borderBottomWidth: 2,
        backgroundColor: Colors.primary100,
    }
});