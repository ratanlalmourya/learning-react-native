import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";


function StartGameScreen() {

    return ( 
            <View style={styles.inputContainer}>
                <TextInput style={styles.numberInput} 
                           maxLength={2} 
                           keyboardType="number-pad"
                           autoCapitalize="none"
                           autoCorrect={false}
                 />
                 <View style={styles.buttonGroup}>
                    <View style={styles.buttonContainer}>
                         <PrimaryButton>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton>Confirm</PrimaryButton>
                    </View>
                 </View>
            </View>
    )
}


export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        marginTop: 100,
        padding: 16,
        alignItems: "center",
        backgroundColor: "#4e0329",
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,   // Android
        shadowColor: 'black', // iOS
        shadowOffset: {width: 0, height: 2}, // iOS,
        shadowOpacity: 0.5, // iOS,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 2,
        color: "#ddb52f",
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center"

    },
    buttonGroup: {
        flexDirection: "row"
    },
    buttonContainer: {
        flex: 1
    }
})