import { capitalize } from "../utils"

export type SelectOptionsProps = {
    optionArr: readonly string[],
    label: string
}

export function SelectOptions({ optionArr, label }: SelectOptionsProps) {
    return (
        <div className="flex flex-col">
            <label htmlFor="time" className="text-xs font-semibold text-gray-400">{label}</label>
            <select name="time" id="time" className="w-32 px-2 py-1 rounded-md bg-white border border-[1px] text-gray-600 shadow-md">
                {optionArr.map((option) => {
                    return <>
                        <option value={option}>{capitalize(option)}</option>
                    </>
                })}
            </select>
        </div>
    )
}