import { AddExpenses } from "../components/AddExpenses";
import { ExpenseStatus } from "../components/ExpenseStatus";
import { ExpenseSummary } from "../components/ExpenseSummary";

export function ExpensePage() {
    return (
        <div className="px-36 py-8 bg-cyan-50 grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
                <div className="">
                    <AddExpenses></AddExpenses>
                </div>
                <div className="">
                    <ExpenseStatus></ExpenseStatus>
                </div>
            </div>
            <div className="">
                <ExpenseSummary></ExpenseSummary>
            </div>
        </div>
    )
}