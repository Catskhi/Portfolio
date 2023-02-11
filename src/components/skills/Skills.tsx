import { SectionTitle } from "../Sections/SectionTitle";
import { DiReact } from 'react-icons/di'
import { SiTypescript } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'

export function Skills() {

    const iconsClass : string = `h-10 w-10 m-auto my-5
        drop-shadow-lg
    `

    return (
        <div>
            <SectionTitle title="Skills" />
            <div className={`
                m-auto
                grid grid-cols-3 gap-2 
                md:w-[60%] 
            `}>
                <DiReact className={iconsClass} />
                <SiTypescript className={iconsClass} />
                <FaNodeJs className={iconsClass} />
                <DiReact className={iconsClass} />
                <SiTypescript className={iconsClass} />
                <FaNodeJs className={iconsClass} />
            </div>
        </div>
    )
}