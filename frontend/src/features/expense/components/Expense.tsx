import { numberComma } from "@/shared/utils";

export type BudgetProps = {
    shadow: string
    accountType: string,
    current_amount: number,
    mounthly_amount: number,
    expense_amount: number,
}

export function Expense(AccountProps: BudgetProps) {
    return (
        <div className={`bg-white p-4 rounded-lg border border-gray-200 shadow-md ${AccountProps.shadow}`}>
            <h2 className="text-sm font-semibold text-gray-700 mb-4">{AccountProps.accountType}</h2>

            <div className="mb-4">
                <p className="text-xs text-gray-500">Remaining Budget</p>
                <p className="text-2xl font-semibold text-red-600">$ {numberComma(AccountProps.current_amount)}</p>
            </div>

            <div className="mb-4">
                <div className="flex justify-between">
                    <p className="text-xs text-gray-500">Budget Remaining</p>
                    <p className="text-sm font-semibold text-brand-700">$4,400</p>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3.5 shadow-md">
                    <div className="bg-brand-400 h-full rounded-full shadow-md shadow-brand-300" style={{ width: "45%" }}>
                    </div>
                </div>
            </div>
        </div>

    );
}