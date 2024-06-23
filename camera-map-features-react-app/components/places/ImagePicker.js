import { Alert, Button, View } from "react-native";
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';

function ImagePicker() {        

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
       console.log(image);
    }

    return (
        <View>
            <View>

            </View>
            <Button title="Take Image" onPress={takeImageHandler} />
        </View>
    )
}
export default ImagePicker;