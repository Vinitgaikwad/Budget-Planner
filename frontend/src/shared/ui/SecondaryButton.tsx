export type SecondaryButtonProp = {
    label: React.ReactNode,
    disable: boolean
}

export function SecondaryButton({ label, disable }: SecondaryButtonProp) {
    return (
        <button
            className="text-md text-brand-600 font-thin border border-brand-400 p-2 rounded-md shadow-md"
            disabled={disable}
        >
            {label}
        </button>
    )
}