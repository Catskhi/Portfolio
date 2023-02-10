import { useAtom } from "jotai"
import { useEffect, useState } from "react"
import { darkModeAtom } from "../Atoms/ThemeManager"

export function MessageText() {
    return(
        <div className={`
            mt-6 text-center
            text-2xl
            md:text-4xl
            md:ml-8
            md:mt-0
            
            transition-all duration-300
        `}>
            <h1>Hi, I'm 
                <span className="
                    bg-clip-text text-transparent
                    bg-gradient-to-r from-cyan-400
                    to-emerald-500
                "
                >{' <Enzo Pablo/>'}</span>
            </h1>
            <h2 className={`text-xl
                md:text-3xl
                transition-all duration-300
            `}
            >Front-end Developer</h2>
        </div>
    )
}