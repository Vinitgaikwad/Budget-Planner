import { SubHeading } from "@/shared/ui";

export function ExpenseSummary() {
    return (
        <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-red-500">

            <div className="mb-4">
                <SubHeading heading={"Expense Summary"}></SubHeading>
            </div>

            <div className="flex justify-between items-end">
                <div>
                    <p className="text-xs text-gray-500 mb-1">Budget</p>
                    <p className="text-lg font-semibold text-blue-700">
                        $12,000
                    </p>
                </div>

                <div className="text-right">
                    <p className="text-xs text-gray-500 mb-1">Monthly Expense</p>
                    <p className="text-lg font-semibold text-red-700">
                        $34,000
                    </p>
                </div>
            </div>
        </div>
    );
}
