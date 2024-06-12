import { useLayoutEffect } from "react";
import { Text } from "react-native";

function ManageExpenses({route,navigation}) {
    const expenseId = route.params?.expensesId;
    const isEditing = !!expenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Editing Expense " : "Add Expense"
        })
    },[navigation,isEditing])

    return <Text>ManageExpenses Screen </Text>
}

export default ManageExpenses;