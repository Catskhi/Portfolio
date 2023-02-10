import { ProjectTitle } from "./ProjectTitle";
import { ProjectButton } from "./ProjectButton";
import { useAtom } from "jotai";
import { darkModeAtom } from "../../Atoms/ThemeManager";
import { useEffect, useState } from "react";

interface ProjectProps {
    backgroundImage : string,
    title: string,
    firstLink : string,
    secondLink : string,
    className ?: string,
    darker ?: boolean
}

export function Project({backgroundImage, title, firstLink, secondLink, className,
    darker
    } : ProjectProps) {

        const [darkMode, setDarkMode] = useAtom(darkModeAtom)
    const [backgroundColor, setBackgroundColor] = useState<string>('')

    useEffect(() => {
        setBackgroundColor(darkMode ? 'bg-zinc-700' : 'bg-neutral-100')
    }, [darkMode])

    return (
        <div className={`m-auto mb-5 p-2 rounded-2xl w-[100%]
        lg:w-[100%] 
    `}>
                <ProjectTitle title={title} />
                    <div
                    className={`h-[200px] w-[100%] bg-cover
                        cursor-pointer
                        sm:m-auto
                        sm:w-[70%]
                        md:m-auto
                        md:h-[300px] 
                        md:w-[75%]
                        lg:w-[75%]
                        lg:h-[250px]
                        drop-shadow-lg
                        rounded-[20px]

                    ` + className}
                    style={{
                        backgroundImage : `url(${backgroundImage})`
                    }}>

                    </div>
                    <div className='m-auto flex items-center justify-center pb-4 
                        w-[80%] 
                        sm:w-[70%]
                        lg:w-[80%]
                    '>
                        <ProjectButton link={firstLink}
                         buttonText={'Site'} className={`
                            mr-4 
                        `} />
                        <ProjectButton link={secondLink}
                         buttonText={'GitHub'} className={`
                            
                        `} />

                    </div>
            </div>
    )
}