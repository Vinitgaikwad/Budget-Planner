
export type AuthInputFieldProps = {
    label: string,
    id: string,
    type: string
}

export function AuthInputField({ label, id, type = "text" }: AuthInputFieldProps) {
    return (
        <div className="mb-6 flex flex-col">
            <label htmlFor={id} className="text-gray-400 text-sm">{label}</label>
            <input className="w-full border border-gray-400 rounded-sm focus:border-brand-300 focus:outline-none px-2 py-1" id={id} type={type} />
        </div>
    );
}