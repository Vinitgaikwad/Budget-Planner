import { numberComma } from "@/shared/utils";

export type BudgetProps = {
    shadow: string
    accountType: string,
    current_amount: number,
    mounthly_amount: number,
    expense_amount: number,
}

export function Budget(AccountProps: BudgetProps) {
    return (
        <div className={`bg-white p-4 rounded-lg border border-gray-200 shadow-md ${AccountProps.shadow}`}>
            <h2 className="text-sm font-semibold text-gray-700 mb-4">{AccountProps.accountType}</h2>

            <div className="mb-4">
                <p className="text-xs text-gray-500">Remaining Budget</p>
                <p className="text-2xl font-semibold text-brand-600">$ {numberComma(AccountProps.current_amount)}</p>
            </div>

            <div className="flex justify-between">
                <div>
                    <p className="text-xs text-gray-500">Monthly Start</p>
                    <p className="text-lg font-medium text-purple-700">${numberComma(AccountProps.mounthly_amount)}</p>
                </div>

                <div>
                    <p className="text-xs text-gray-500">Expense Done</p>
                    <p className="text-lg font-medium text-red-600">${numberComma(AccountProps.expense_amount)}</p>
                </div>
            </div>
        </div>

    );
}