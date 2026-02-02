import { Expense } from "./Expense";

export function ExpenseStatus() {
    return (
        <div className="rounded-md bg-blue-100 p-4 border-l-4 border-black shadow-lg">
            <div className="flex justify-between items-center mb-2">
                <h1 className="mb-4 text-sm font-semibold">Expense Status</h1>
                <button className="text-gray-500 font-semibold text-sm underline px-2 mb-auto">
                    View All&#9660;
                </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <Expense accountType="Cash" shadow="shadow-purple-300" current_amount={1300} expense_amount={3000} mounthly_amount={4500}></Expense>
                <Expense accountType="Debit" shadow="shadow-pink-300" current_amount={1300} expense_amount={3000} mounthly_amount={4500}></Expense>
                <Expense accountType="Savings" shadow="shadow-blue-300" current_amount={1300} expense_amount={3000} mounthly_amount={4500}></Expense>
                <Expense accountType="Other" shadow="shadow-red-300" current_amount={1300} expense_amount={3000} mounthly_amount={4500}></Expense>
            </div>
        </div>
    );
}