export type SubHeadingProps = {
    heading: string,
    color?: string
}

export function SubHeading({ heading, color = "text-gray-700" }: SubHeadingProps) {
    return (
        <h2 className={`text-sm font-semibold ${color}`}>
            {heading}
        </h2>
    )
}