import { useState } from "react";
import { StyleSheet, View, TextInput, Button,  } from "react-native"


export default function GaolInput({onGoalAddHandler}) {

    const [enteredGoalText,setEnteredGoalText] = useState('');
    
    function onGoalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoal() {
        onGoalAddHandler(enteredGoalText);
        setEnteredGoalText('');
    }

    return  (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInput} 
                placeholder='Your course goal' 
                onChangeText={onGoalInputHandler} 
                value={enteredGoalText}
            />
            <Button 
                title='Add Goal' 
                onPress={addGoal} 
            />     
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        marginBottom: 24
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
      },
})