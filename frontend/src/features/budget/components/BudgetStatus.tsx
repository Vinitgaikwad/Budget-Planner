import { Account } from "./Budget";

export function AccountStatus() {
    return (
        <div className="rounded-md bg-blue-50 p-4 border-l-4 border-black shadow-lg">
            <h1 className="mb-4 text-sm font-semibold">Account Status</h1>
            <div className="grid grid-cols-4 gap-4 ">
                <Account accountType="Cash" shadow="shadow-purple-300" current_amount={1300} expense_amount={3000} mounthly_amount={4500}></Account>
                <Account accountType="Debit" shadow="shadow-pink-300" current_amount={1300} expense_amount={3000} mounthly_amount={4500}></Account>
                <Account accountType="Savings" shadow="shadow-blue-300" current_amount={1300} expense_amount={3000} mounthly_amount={4500}></Account>
                <Account accountType="Other" shadow="shadow-red-300" current_amount={1300} expense_amount={3000} mounthly_amount={4500}></Account>
            </div>
        </div>
    );
}