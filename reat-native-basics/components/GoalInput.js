import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image} from "react-native";


export default function GaolInput({ onGoalAddHandler, visible, onCancel }) {

    const [enteredGoalText, setEnteredGoalText] = useState('');

    function onGoalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoal() {
        onGoalAddHandler(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput
                    style={styles.textInput}
                    placeholder='Your course goal'
                    onChangeText={onGoalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoal} color="#5e0acc"/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={onCancel} color="#f31282"/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        width: '100%',
        padding: 16,
        backgroundColor: '#e4d0ff',
        color: "#120438",
        borderRadius: 6
    },
    buttonContainer: 
    {
        flexDirection: 'row',
        marginTop: 8
    },
    button: {
        width: "30%",
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
})