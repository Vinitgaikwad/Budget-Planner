import { AddBudgets } from "../components/AddBudgets";
import { BudgetStatus } from "../components/BudgetStatus";
import { BudgetSummary } from "../components/BudgetSummary";

export function BudgetPage() {
    return (
        <div className="px-36 py-10 grid grid-cols-2 gap-6 bg-cyan-50">
            <div>
                <BudgetSummary></BudgetSummary>
            </div>
            <div>
                <AddBudgets></AddBudgets>
            </div>
            <div className="col-span-2">
                <BudgetStatus></BudgetStatus>
            </div>
        </div>
    )
}