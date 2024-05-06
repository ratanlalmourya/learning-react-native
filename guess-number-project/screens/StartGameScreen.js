import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";


function StartGameScreen({onPickedNumber}) {

    const [inputNumber,setInputNumber] = useState('');

    function numberInputHandler(enteredNumber){
        setInputNumber(enteredNumber);
    }

    function confirmInputHandler()
    {
        const chosenNumber = parseInt(inputNumber);

        if(isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99)
        {
            Alert.alert(
                "Invalid Number",
                "Number needs to be number between 1 and 99.",
                [{text: "Okay",style: "destructive", onPress: resetInputHandler}]
            )
            return;
        }

        onPickedNumber(inputNumber);
    }

    function resetInputHandler() {
        console.log("Resetting input ");
        setInputNumber('');
    }

    return ( 
            <View style={styles.inputContainer}>
                <TextInput style={styles.numberInput} 
                           maxLength={2} 
                           keyboardType="number-pad"
                           autoCapitalize="none"
                           autoCorrect={false}
                           onChangeText={numberInputHandler}
                           value={inputNumber}
                 />
                 <View style={styles.buttonGroup}>
                    <View style={styles.buttonContainer}>
                         <PrimaryButton>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
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
        backgroundColor: Colors.primary800,
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
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
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