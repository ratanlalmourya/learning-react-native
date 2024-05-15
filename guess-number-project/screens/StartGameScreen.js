import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstrunctionText";


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
        <View style={styles.rootContainer}> 
            <Title>Guess My Number</Title>
            <Card>
               <InstructionText>Enter a number</InstructionText>
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
            </Card>
        </View>
    )
}


export default StartGameScreen;

const styles = StyleSheet.create({
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
    },
    rootContainer: {
        flex: 1,
        alignItems: "center",
        marginTop: 100
    }
})