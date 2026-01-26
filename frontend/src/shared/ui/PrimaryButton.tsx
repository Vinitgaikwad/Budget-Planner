export type PrimaryButtonProp = {
    label: string,
    disable: boolean
}

export function PrimaryButton({ label, disable }: PrimaryButtonProp) {
    return (
        <button className="bg-brand-500 text-white p-2 rounded-md shadow-md" disabled={disable}>
            {label}
        </button>
    );
}