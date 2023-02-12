import { useAtom } from "jotai"
import { useEffect, useState } from "react"
import { languageAtom } from "../../Atoms/LangManager"
import { darkModeAtom } from "../../Atoms/ThemeManager"

export default function LanguageButton() {

    const [darkMode, setDarkMode] = useAtom(darkModeAtom)
    const [buttonClassName, setButtonClassName] = useState<string>('')
    const [language, setLanguage] = useAtom(languageAtom)

    useEffect(() => {
        setButtonClassName(darkMode ? '' : '')
    }, [darkMode])

    function changeLanguage() {
        if (language === 'pt-BR') {
            setLanguage('en-US')
        } else {
            setLanguage('pt-BR')
        }
    }
    

    return (
        <button className={`
            cursor-pointer
            px-2
            rounded-lg
            text-lg
            top-5 right-20
            lg:right-28
            lg:top-8
            absolute z-[2]
            flex
        ` + buttonClassName}
        onClick={() => changeLanguage()}
        >
        {language}
        </button>
    )
}