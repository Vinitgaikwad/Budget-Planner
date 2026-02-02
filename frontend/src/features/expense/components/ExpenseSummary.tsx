import { SubHeading } from "@/shared/ui";
import { ExpenseTable } from "./ExpenseTable";

export function ExpenseSummary() {
    return (
        <div className="bg-white rounded-lg shadow-lg p-5 border-l-4 border-brand-500 h-full">
            <div className="mb-4">
                <SubHeading heading={"Expense Summary"}></SubHeading>
            </div>

            <div className="flex justify-between items-end mb-4">
                <div >
                    <p className="text-xs text-gray-500 mb-1">Total Spent</p>
                    <p className="text-lg font-semibold text-red-700">
                        $34,000
                    </p>
                </div>
                <div className="text-right">
                    <p className="text-xs text-gray-500 mb-1">Budget</p>
                    <p className="text-lg font-semibold text-blue-700">
                        $40,000
                    </p>
                </div>
            </div>
            <div className="flex justify-between mb-2 px-2">
                <p className="text-xs text-gray-400 ">Last 10 Transactions</p>
                <p className="text-xs text-gray-400">filter</p>
            </div>

            <ExpenseTable></ExpenseTable>
        </div>
    );
}
