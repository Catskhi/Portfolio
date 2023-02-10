import { useAtom } from "jotai"
import { useEffect, useState } from "react"
import { darkModeAtom } from "../../Atoms/ThemeManager"

export function ThemeButton() {

    const [darkMode, setDarkMode] = useAtom(darkModeAtom)

    const [buttonClassName, setButtonClassName] = useState<string>('')

    useEffect(() => {
        setButtonClassName(darkMode ? 'text-slate-100 hover:text-slate-300' : 'text-zinc-800 hover:text-zinc-600')
    }, [darkMode])

    return (
        <div className={`text-lg
            absolute right-8 top-5
            md:right-16
            md:top-8
            hover:cursor-pointer
        ` + buttonClassName}>
            <i onClick={() => setDarkMode(!darkMode)} className={darkMode ? `bi bi-moon-fill` : `bi bi-brightness-high-fill`}></i>
        </div>
    )
}