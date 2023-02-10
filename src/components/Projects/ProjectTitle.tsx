interface ProjectTitleProps {
    title : string
}

export function ProjectTitle({title} : ProjectTitleProps) {
    return (
        <h2 className={`
            text-center pb-4 text-xl font-bold drop-shadow-lg
            lg:text-2xl
            lg:my-1
        `}>
            {title}
        </h2>
    )
}