import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";


function StartGameScreen() {

    return ( 
            <View style={styles.inputContainer}>
                <TextInput />
                <PrimaryButton>Reset</PrimaryButton>
                <PrimaryButton>Confirm</PrimaryButton>
            </View>
    )
}


export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        marginTop: 100,
        padding: 16,
        // alignItems: "center",
        backgroundColor: "#72063c",
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,   // Android
        shadowColor: 'black', // iOS
        shadowOffset: {width: 0, height: 2}, // iOS,
        shadowOpacity: 0.5, // iOS,
    }
})