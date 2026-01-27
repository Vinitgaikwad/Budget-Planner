import { PrimaryButton, SecondaryButton, SelectOptions, TertiaryButton } from "@/shared/ui";
import { ACCOUNT_Roles, TIME_TYPES } from "@/types";

export function AddAccounts() {
    return (
        <div className="h-full py-5 px-8 rounded-md bg-white shadow-md border-l-4 border-blue-400">
            <h1 className="text-gray-800 font-semibold text-sm mb-6">Create Account</h1>

            <div className="flex flex-col mb-4">
                <label htmlFor="" className="text-xs font-semibold text-gray-400">Amount to add</label>
                <input type="text" className="w-full border border-[2px] border-gray-200 rounded-sm focus:border-brand-300 focus:outline-none px-2 py-1 shadow-xs" />
            </div>

            <div className="grid grid-cols-3 mb-6 gap-4 items-start">
                <SelectOptions label="Time" optionArr={TIME_TYPES}></SelectOptions>
                <SelectOptions label="Account Type" optionArr={ACCOUNT_Roles}></SelectOptions>
                <div className="flex justify-end items-center mt-1">
                    <TertiaryButton label="Delete Account" disable={false}></TertiaryButton>
                </div>
            </div>

            <div className="flex justify-between mb-2">
                <PrimaryButton label="Add Account" disable={false}></PrimaryButton>
                <SecondaryButton label="Edit Account" disable={false}></SecondaryButton>
            </div>
        </div>
    );
}