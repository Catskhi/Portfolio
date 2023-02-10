interface SliderTitle {
    title : string
}

export function SliderTitle({title} : SliderTitle) {
    return (
        <h2 className={`
            text-center pb-4 text-xl font-bold
        `}>
            {title}
        </h2>
    )
}