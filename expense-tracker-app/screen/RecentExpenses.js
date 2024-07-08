import { Text } from "react-native";
import ExpensesOutput from "../components/expenses_output/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpenesesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../components/ui/loading-overlay";
import ErrorOverlay from "../components/ui/error_overlay";

function RecentExpenses() {
    const expensesCtx = useContext(ExpenesesContext);
    const [isFetching,setIsFetching] = useState(true);
    const [error,setError] = useState();

    useEffect(() => {
        async function getExpenses() {  
           setIsFetching(true);
           try {
                const expenses =  await fetchExpenses();
                expensesCtx.setExpenses(expenses);
           } catch (error) {
                setError("Could not fetch expenses");
           }
           setIsFetching(false);
        }
        getExpenses();
    },[])

    function errorHandler(){
        setError(null);
    }
    if(error && !isFetching) {
        return <ErrorOverlay message={error} onConfirm={errorHandler} />;
    }
    if(isFetching) {
        return <LoadingOverlay />
    }
    const recentExpenses = expensesCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today,7);
        return expense.date > date7DaysAgo;
    });
    return <ExpensesOutput expenses={recentExpenses} expensePeriod="Last 7 Days" fallbackText="No Expenses registered for the last 7 days" />
}

export default RecentExpenses;