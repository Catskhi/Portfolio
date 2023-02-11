import { ProjectTitle } from "./ProjectTitle";
import { ProjectButton } from "./ProjectButton";
import { useAtom } from "jotai";
import { darkModeAtom } from "../../Atoms/ThemeManager";
import { ReactComponentElement, ReactNode, useEffect, useState } from "react";
import { DiReact } from "react-icons/di";
import { SiTypescript } from "react-icons/si";

interface ProjectProps {
    backgroundImage : string,
    title: string,
    firstLink : string,
    secondLink : string,
    className ?: string,
    darker ?: boolean,
    techIcons : ReactNode[]
}

export function Project({backgroundImage, title, firstLink, secondLink, className,
    darker, techIcons
    } : ProjectProps) {

        const [darkMode, setDarkMode] = useAtom(darkModeAtom)
    const [backgroundColor, setBackgroundColor] = useState<string>('')

    useEffect(() => {
        setBackgroundColor(darkMode ? 'bg-zinc-700' : 'bg-neutral-100')
    }, [darkMode])

    const iconsClass : string = 'h-6 w-6 mx-1'

    return (
        <div className={`m-auto mb-5 p-2 rounded-2xl w-[100%]
        lg:w-[100%] 
    `}>
                <ProjectTitle title={title} />
                    <div
                    className={`h-[200px] w-[100%] bg-cover
                        
                        sm:m-auto
                        sm:w-[70%]
                        md:m-auto
                        md:h-[300px] 
                        md:w-[75%]
                        lg:h-[250px]
                        drop-shadow-lg
                        rounded-[20px]

                    ` + className}
                    style={{
                        backgroundImage : `url(${backgroundImage})`
                    }}>

                    </div>

                    <div className={`
                        flex items-center text-lg 
                        drop-shadow-lg
                        pt-4 m-auto
                        md:w-[75%]
                    `}>
                        <h3>Techs: </h3>
                        {techIcons}
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