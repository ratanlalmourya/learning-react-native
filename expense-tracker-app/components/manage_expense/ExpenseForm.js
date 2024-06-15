import { StyleSheet, TextInput, View, Text } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../ui/Button";



function ExpenseForm({submitButtonLabel, onCancel,onSubmit,defaultValue}) {
    const [inputValues, setInputValues] = useState({
        amount: defaultValue ? defaultValue.amount.toString() : '',
        date: defaultValue ? defaultValue.date.toISOString().slice(0,10) : '',
        description: defaultValue ? defaultValue.description : ''
    });
    function inputChangedHandler(inputIdentifier, enteredAmount) {
        setInputValues((curInputValues) => {
            return {
                ...curInputValues,
                [inputIdentifier]: enteredAmount
            }
        });
    }

    function submitHandler(){
        const expenseData = {
            amount: +inputValues.amount,
            date: new Date(inputValues.date),
            description: inputValues.description
        }
        onSubmit(expenseData);
    }

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input
                    style={styles.rowInput}
                    label="Amount"
                    textInputConfig={{
                        keyboardType: "decimal-pad",
                        onChangeText: inputChangedHandler.bind(this, 'amount'),
                        value: inputValues.amount
                    }}
                />
                <Input
                    style={styles.rowInput}
                    label="Date"
                    textInputConfig={{
                        placeholder: "YYYY-MM-DD",
                        maxLength: 10,
                        onChangeText: inputChangedHandler.bind(this, 'date'),
                        value: inputValues.date
                    }}
                />
            </View>
            <Input
                label="Description"
                textInputConfig={{
                    multiline: true,
                    autoCorrect: true,
                    autoCapitalize: true,
                    onChangeText: inputChangedHandler.bind(this, 'description'),
                    value: inputValues.description
                }}
            />
            <View style={styles.buttons}>
                <Button style={styles.button} mode="flat" onPress={onCancel}>Cancel</Button>
                <Button style={styles.button} onPress={submitHandler}>{submitButtonLabel}</Button>
            </View>
        </View>
    );
}

export default ExpenseForm;

const styles = StyleSheet.create({
    inputsRow: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    rowInput: {
        flex: 1
    },
    form: {
        marginTop: 40
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: "center",

    },
    buttons: {
        flexDirection: "row",
        justifyContent:"center",
        alignContent: "center"
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    }
})