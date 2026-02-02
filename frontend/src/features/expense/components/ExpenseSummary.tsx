import { SubHeading } from "@/shared/ui";

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
            <div className="rounded-lg shadow-lg shadow-brand-400 p-4 bg-brand-100">
                <div className="mb-8">
                    <div className="flex justify-between">
                        <p className="text-sm text-brand-600">Budget Remaining</p>
                        <p className="text-lg font-semibold text-brand-700">$4,400</p>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3.5 shadow-md">
                        <div className="bg-brand-500 h-full rounded-full" style={{ width: "45%" }}>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2">
                    <div>
                        <p className="font-semibold text-purple-500">12 days</p>
                        <p className="text-xs text-brand-600 font-normal">
                            remaining in this month
                        </p>
                    </div>

                    <div className="flex flex-col justify-self-end text-right">
                        <p className="font-semibold text-blue-500">$340/day</p>
                        <p className="text-xs text-brand-600 font-normal">
                            to meet your goal
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}
