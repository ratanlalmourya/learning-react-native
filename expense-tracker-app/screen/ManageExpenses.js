import { useContext, useLayoutEffect } from "react";
import { StyleSheet, TextInput, View } from "react-native";

import IconButton from "../components/ui/IconButton";
import { GlobalStyles } from "../constants/styles";
import { ExpenesesContext } from "../store/expenses-context";
import ExpenseForm from "../components/manage_expense/ExpenseForm";
import {storeExpense, updateExpense, deleteExpense } from "../util/http";

function ManageExpenses({route,navigation}) {
    const expenseId = route.params?.expensesId;
    const isEditing = !!expenseId;
    const expenseCtx = useContext(ExpenesesContext);

    const selectedExpense = expenseCtx.expenses.find((expense) => {
        return expense.id === expenseId
    });

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Editing Expense " : "Add Expense"
        })
    },[navigation,isEditing]);

    async function deleteExpenseHandler() {     
        await deleteExpense(expenseId);
        expenseCtx.deleteExpense(expenseId)
        navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }

    async function confirmHandler(expenseData) {
        if(isEditing){
            expenseCtx.updateExpense(
                expenseId,
                expenseData
            );
            await updateExpense(expenseId,expenseData);
        }else{  
            const id = storeExpense(expenseData);
            expenseCtx.addExpense({...expenseData,id: id});
        }
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
        <ExpenseForm 
            submitButtonLabel={isEditing ? 'Update' : 'Add'}
            onCancel={cancelHandler}
            onSubmit={confirmHandler}
            defaultValue={selectedExpense}
        />
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
    }
})