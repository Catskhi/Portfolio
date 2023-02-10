interface SectionTitleProps {
    title : string
}

export function SectionTitle({title} : SectionTitleProps) {
    return (
        <h1 className={`text-center text-2xl p-2
        pt-6
        pb-6
        md:text-3xl`}>
            {title}
        </h1>
    )
}