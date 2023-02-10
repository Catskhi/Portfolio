import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { darkModeAtom } from "../Atoms/ThemeManager";
import { MessageText } from "./MessageText";
import { ProfilePicture } from "./ProfilePicture";
import { ReactRotating } from "./ReactRotating";
import { SocialButtons } from "./SocialButtons/SocialButtons";
import { ThemeButton } from "./Theme/ThemeButton";

export function Header() {

    const [darkMode, setDarkMode] = useAtom(darkModeAtom)

    const [backgroundClass, setBackgroundColor] = useState<string>('')
    
    useEffect(() => {
        setBackgroundColor(darkMode ? 'bg-zinc-100' : 'bg-white' )
    }, [darkMode])

    return (
        <header>
            <div className={`w-full lg:h-screen h-screen
            flex flex-col 
            lg:flex 
            lg:flex-row items-center justify-center
            `}>
                <ThemeButton />
                <ProfilePicture />
                <div className="grid grid-cols-1">
                    <MessageText />
                    <SocialButtons />
                </div>
                <ReactRotating />
            </div>
        </header>
    )
}