interface SocialButtonProps {
    link : string,
    className : string,
    text : string,
    buttonClass : string,
    download ?: string
}

export function SocialButton({
    link, className, text, buttonClass, download
    } : SocialButtonProps) {
    return (
        <a 
        href={link}
        target={'_blank'}
        download={download}
        className={` rounded-lg p-1 bg-animat
            font-bold
            cursor-pointer
            px-2
            !text-slate-100
            mx-1
            transition-all duration-300 ease-out
        ` + className}>
            <i className={buttonClass} /> 
            {' ' + text}
        </a>
    )
}