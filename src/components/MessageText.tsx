import { useAtom } from "jotai"
import { useEffect, useState } from "react"
import { darkModeAtom } from "../Atoms/ThemeManager"

export function MessageText() {
    return(
        <div className={`
            mt-6 text-center
            text-3xl
            lg:text-5xl
            lg:ml-8
            lg:mt-0
            
            transition-all duration-300
        `}>
            <h1>Hi, I'm 
                <span className="
                    bg-clip-text text-transparent
                    bg-gradient-to-r from-cyan-400
                    to-emerald-500
                "
                >{' <Enzo-Pablo/>'}</span>
            </h1>
            <h2 className={`text-2xl
                lg:text-4xl
                transition-all duration-300
            `}
            >Front-end Developer</h2>
        </div>
    )
}