import { useContext } from "react";
import ExpensesOutput from "../components/expenses_output/ExpensesOutput";
import { ExpenesesContext } from "../store/expenses-context";

function AllExpenses() {
    const expensesCtx = useContext(ExpenesesContext);
    return <ExpensesOutput expenses={expensesCtx.expenses} expensePeriod="Total" fallbackText="No registered expenses found" />
}

export default AllExpenses;