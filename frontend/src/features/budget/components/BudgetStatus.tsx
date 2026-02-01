import { Budget } from "./Budget";

export function BudgetStatus() {
    return (
        <div className="rounded-md bg-blue-50 p-4 border-l-4 border-black shadow-lg">
            <h1 className="mb-4 text-sm font-semibold">Budget Status</h1>
            <div className="grid grid-cols-4 gap-4 ">
                <Budget accountType="Cash" shadow="shadow-purple-300" current_amount={1300} expense_amount={3000} mounthly_amount={4500}></Budget>
                <Budget accountType="Debit" shadow="shadow-pink-300" current_amount={1300} expense_amount={3000} mounthly_amount={4500}></Budget>
                <Budget accountType="Savings" shadow="shadow-blue-300" current_amount={1300} expense_amount={3000} mounthly_amount={4500}></Budget>
                <Budget accountType="Other" shadow="shadow-red-300" current_amount={1300} expense_amount={3000} mounthly_amount={4500}></Budget>
                <Budget accountType="Savings" shadow="shadow-blue-300" current_amount={1300} expense_amount={3000} mounthly_amount={4500}></Budget>
                <Budget accountType="Other" shadow="shadow-red-300" current_amount={1300} expense_amount={3000} mounthly_amount={4500}></Budget>
            </div>
        </div>
    );
}