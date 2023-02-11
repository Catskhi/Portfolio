import { useInView } from "framer-motion"
import { useAtom } from "jotai"
import { useEffect, useState } from "react"
import { darkModeAtom } from "../../Atoms/ThemeManager"
import { SectionTitle } from "../Sections/SectionTitle"

export function About() {

    const [darkMode, setDarkMode] = useAtom(darkModeAtom)

    const [backgroundColor, setBackgroundColor] = useState<string>('')
    
    useEffect(() => {
        setBackgroundColor(darkMode ? 'bg-zinc-900' : 'bg-zinc-100')
    }, [darkMode])

    window.addEventListener('scroll', () => {
        const thisElement = document.querySelector('#about')
        const thisElementPosition : number | undefined = thisElement?.getBoundingClientRect().top
        const windowHeight : number = window.innerHeight

        if ((thisElementPosition as number) < windowHeight) {
            thisElement?.classList.add('showAnimation')
        }

    })

    return (
        <div 
        className={`
            h-auto w-full
            ${backgroundColor}
        `}>
            <div id='about' className=" opacity-0 ">
                <SectionTitle title="About" />
                <p className={`
                    text-center text-md
                    m-auto
                    max-w-xs
                    lg:max-w-3xl
                    lg:text-xl
                    pb-10
                `}>
                    My name is Enzo Pablo, actually, I have 18 years. I love technology and programming. I entered the world of programming and computers when I have been 15 years old, in my first year of high school with an integrated IT course. Since that, I haven't been able to let it go, I just fell in love with it.<br /><br />
                    Since the start of the course to now, I learned a bunch of different technologies, some in the course, some from my own. In the course, I've worked with: <strong>C, C++, Java, PHP, JavaScript, HTML, CSS and MySQL</strong>. From my own, I've worked with: <strong>C# in Unity, Python, SQLite, React, Node.Js, Docker, TypeScript,</strong> a bit of <strong>Vue.Js</strong> and even <strong>GDScript</strong> to make some games, but now, I'm focusing on <strong>React, TypeScript</strong> and <strong>Node.Js</strong>.<br /><br/>
                    I know, I worked with a lot of technologies, you can think that I'm not very good on each one, and you're right! But, you can notice something that I have said earlier on this text, I love doing that, have been through two years of studying, I haven't stopped yet, and I will not stop, never.
                </p>
            </div>
        </div>
    )
}