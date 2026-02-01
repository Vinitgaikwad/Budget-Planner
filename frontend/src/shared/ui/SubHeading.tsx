export type SubHeadingProps = {
    heading: string
}

export function SubHeading({ heading }: SubHeadingProps) {
    return (
        <h2 className="text-sm font-semibold text-gray-700">
            {heading}
        </h2>
    )
}