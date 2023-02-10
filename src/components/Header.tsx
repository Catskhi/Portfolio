import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { darkModeAtom } from "../Atoms/ThemeManager";
import { MessageText } from "./MessageText";
import { ProfilePicture } from "./ProfilePicture";
import { ThemeButton } from "./Theme/ThemeButton";

export function Header() {

    const [darkMode, setDarkMode] = useAtom(darkModeAtom)

    const [backgroundClass, setBackgroundColor] = useState<string>('')
    
    useEffect(() => {
        setBackgroundColor(darkMode ? 'bg-zinc-800' : 'bg-white' )
    }, [darkMode])

    return (
        <div>
            <div className={`w-full h-96 
            flex flex-col 
            md:flex 
            md:flex-row items-center 
            `}>
                <ThemeButton />
                <ProfilePicture />
                <MessageText />
            </div>
        </div>
    )
}