interface ProjectButtonProps {
    buttonText : string,
    className ?: string,
    link : string
}

export function ProjectButton({buttonText, className, link} : ProjectButtonProps) {
    return (
        <a className={` 
        text-center cursor-pointer
        
        w-[45%]
        rounded-lg
        py-2 text-bold mt-4
        text-zinc-900
        drop-shadow-lg
        bg-cyan-300
        hover:bg-cyan-400
        font-bold
        transition-all duration-300
        ` + className} href={link} target={'_blank'} >{buttonText}</a>
    )
}