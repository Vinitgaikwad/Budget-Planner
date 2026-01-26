import { AccountSummary } from "../components/AccountSummary";
import { AddAccounts } from "../components/AddAccounts";
import { ExpenseSummary } from "../components/ExpenseSummary";

export function AccountsPage() {
    return (
        <div className="grid md:grid-cols-2 px-36 py-10 bg-gray-100 md:gap-6">
            <div className="grid gap-6">
                <AccountSummary></AccountSummary>
                <ExpenseSummary></ExpenseSummary>
            </div>
            <div className="h-full">
                <AddAccounts></AddAccounts>
            </div>
        </div>
    );
}