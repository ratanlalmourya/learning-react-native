import { Alert, Button, Image, View, Text, StyleSheet } from "react-native";
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import { useState } from "react";
import { Colors } from "../../constants/colors";

function ImagePicker() {        

    const [pickedImage,setPickedImage] = useState(null);
    const [cameraPermissionInformation,requestPermisson] = useCameraPermissions();

    async function verifyPermissions() {
        if(cameraPermissionInformation.status === PermissionStatus.UNDETERMINED ){
            const permissonResponse = await requestPermisson();
            return permissonResponse.granted;
        }

        if(cameraPermissionInformation.status === PermissionStatus.DENIED ){
            Alert.alert(
                'Insufficient Permissons!',
                'You need to grant  camera permissons to use this app.'
            )

            return false;
        }

        return true;
    }

    async function takeImageHandler() { 
        const hasPermission = await verifyPermissions();    
        
        if(!hasPermission) {
            return;
        }   
       const image =  await launchCameraAsync({
        allowsEditing: true,
        aspect: [19,9],
        quality: 0.5,
       }); 
       setPickedImage(image.assets[0].uri);
    }   

    let ImagePreview = <Text>No Image Taken Yet.</Text>;
    console.log(pickedImage)
    if(pickedImage) {
        ImagePreview = <Image source={{ uri : pickedImage }} style={styles.image} />
    }

    return (
        <View>
            <View style={styles.imagePreview}>  
                {ImagePreview}
            </View>
            <Button title="Take Image" onPress={takeImageHandler} />
        </View>
    )
}
export default ImagePicker;

const styles = StyleSheet.create({
    imagePreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4
    },
    image: {
        width: '100%',
        height: '100%'
    }
})