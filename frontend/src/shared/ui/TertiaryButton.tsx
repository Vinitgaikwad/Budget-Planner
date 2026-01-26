export type TertiaryButtonType = {
    label: React.ReactNode,
    disable: boolean
}

export function TertiaryButton({ label, disable }: TertiaryButtonType) {
    return (
        <button className="border border-[2px] border-gray-200 p-2 rounded-md text-gray-400 flex-none shadow-sm" disabled={disable}>
            {label}
        </button>
    )
}