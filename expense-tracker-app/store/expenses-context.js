import { createContext, useReducer, useState } from "react";


export const ExpenesesContext = createContext({
    expenses: [],
    addExpense: ({description,amount,date}) => {},
    setExpenses: (expenses) => {},
    deleteExpense: (id) => {},
    updateExpense: (id,{description,amount,date}) => {}
});

function expensesReducer(state,action){

    switch (action.type) {
        case "ADD":
            return [action.payload,...state]
        case "UPDATE":
            const updatedableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
            const updatedableExpense = state[updatedableExpenseIndex];
            const updatedItem = {...updatedableExpense,...action.payload.data};
            const updatedExpenses = [...state];
            updatedExpenses[updatedableExpenseIndex] = updatedItem;
            return updatedExpenses;
        case "DELETE":
            return state.filter((expense) => expense.id !== action.payload) 
        case "SET": 
            const inverted = action.payload.reverse();
            return inverted;
        default:
            return state;
    }
}

function ExpensesContextProvider({children}) {

    const [expensesState,dispatch] = useReducer(expensesReducer,[]);

    function addExpense(expenseData){
        dispatch({type: "ADD", payload: expenseData});
    }

    function setExpenses(expenses) {
        dispatch({type: "SET",payload: expenses})
    }

    function deleteExpense(id){
        dispatch({type: "DELETE",payload: id});
    }

    function updateExpense(id,expenseData) {
        dispatch({type: "UPDATE",payload: {id:id,data:expenseData}})
    }

    const value = {
        expenses: expensesState,
        setExpenses: setExpenses,
        addExpense:addExpense,
        updateExpense: updateExpense,
        deleteExpense: deleteExpense
    }

    return (
        <ExpenesesContext.Provider value={value}>
            {children}
        </ExpenesesContext.Provider>
    )
}

export default ExpensesContextProvider;




