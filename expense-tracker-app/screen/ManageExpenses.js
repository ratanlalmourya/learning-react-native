import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";

import IconButton from "../components/ui/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/ui/Button";
import { ExpenesesContext } from "../store/expenses-context";

function ManageExpenses({route,navigation}) {
    const expenseId = route.params?.expensesId;
    const isEditing = !!expenseId;
    const expenseCtx = useContext(ExpenesesContext);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Editing Expense " : "Add Expense"
        })
    },[navigation,isEditing]);

    function deleteExpenseHandler() {
        expenseCtx.deleteExpense(expenseId)
        navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler() {
        if(isEditing){
            expenseCtx.updateExpense(
                expenseId,
                {
                description: "Text!!!!!!!",
                amount: 29.99,
                date: new Date('2024-06-09')
            });
        }else{
            expenseCtx.addExpense({
                description: "Text",
                amount: 19.99,
                date: new Date('2024-06-09')
            });
        }
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
        <View style={styles.buttons}>
            <Button style={styles.button} mode="flat" onPress={cancelHandler}>Cancel</Button>
            <Button style={styles.button} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
        </View>
        {   isEditing && 
            <View style={styles.deleteContainer}>
                <IconButton 
                    icon="trash"
                    color={GlobalStyles.colors.error500}
                    size={36}
                    onPress={deleteExpenseHandler}
                /> 
            </View>
        }
        </View>
    )
}

export default ManageExpenses;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: "center"
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