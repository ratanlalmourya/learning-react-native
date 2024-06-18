import { Text } from "react-native";
import ExpensesOutput from "../components/expenses_output/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpenesesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../components/ui/loading-overlay";

function RecentExpenses() {
    const expensesCtx = useContext(ExpenesesContext);
    const [isFetching,setIsFetching] = useState(true);
    useEffect(() => {
        async function getExpenses() {  
           setIsFetching(true);
           const expenses =  await fetchExpenses();
           expensesCtx.setExpenses(expenses);
           setIsFetching(false);
        }
        getExpenses();
    },[])


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