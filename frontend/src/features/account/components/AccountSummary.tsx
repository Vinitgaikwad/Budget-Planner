import { SubHeading } from "@/shared/ui";

export function AccountSummary() {
    return (
        <div className="bg-white rounded-lg shadow-lg p-5 border-l-4 border-brand-500">

            <div className="mb-4">
                <SubHeading heading={"Account Summary"}></SubHeading>
            </div>

            <div className="flex justify-between items-end">
                <div>
                    <p className="text-xs text-gray-500 mb-1">Balance</p>
                    <p className="text-lg font-semibold text-gray-700">
                        $12,000
                    </p>
                </div>

                <div className="text-right">
                    <p className="text-xs text-gray-500 mb-1">Monthly Start</p>
                    <p className="text-lg font-semibold text-gray-700">
                        $34,000
                    </p>
                </div>
            </div>
        </div>
    );
}
