import { PrimaryButton, SecondaryButton, TertiaryButton } from "@/shared/ui";

export function AddAccounts() {
    return (
        <div className="h-full py-5 px-8 rounded-md bg-white shadow-md border-l-4 border-blue-400">
            <h1 className="text-gray-800 font-semibold text-sm mb-6">Create Account</h1>

            <div className="flex flex-col mb-4">
                <label htmlFor="" className="text-xs font-semibold text-gray-400">Amount to add</label>
                <input type="text" className="w-full border border-[2px] border-gray-200 rounded-sm focus:border-brand-300 focus:outline-none px-2 py-1 shadow-xs" />
            </div>

            <div className="grid grid-cols-3 mb-4 gap-4 items-start">
                <div className="flex flex-col">
                    <label htmlFor="time" className="text-xs font-semibold text-gray-400">Time</label>
                    <select name="time" id="time" className="w-32 px-2 py-1 rounded-md bg-white border border-[1px] text-gray-600 shadow-md">
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                        <option value="daily">Daily</option>
                        <option value="oneTime">One Time</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="account" className="text-xs font-semibold text-gray-400">Add Account Type</label>
                    <select name="account" id="account" className="w-32 px-2 py-1 rounded-md bg-white border border-[1px] text-gray-600 shadow-md">
                        <option value="cash">Cash</option>
                        <option value="debit">Debit</option>
                        <option value="savings">Saving</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="flex justify-end items-center mt-1">
                    <TertiaryButton label="Delete Account" disable={false}></TertiaryButton>
                </div>
            </div>

            <div className="flex justify-between mb-6">
                <PrimaryButton label="Add Account" disable={false}></PrimaryButton>
                <SecondaryButton label="Edit Account" disable={false}></SecondaryButton>
            </div>
        </div>
    );
}