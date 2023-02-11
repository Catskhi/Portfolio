import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { darkModeAtom } from "./Atoms/ThemeManager";
import { About } from "./components/about/About";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/skills/Skills";


function App() {

  const [darkMode, setDarkMode] = useAtom(darkModeAtom)

  const [textColor, setTextColor] = useState('')
  const [backgroundClass, setBackgroundColor] = useState<string>('')

  useEffect(() => {
    setBackgroundColor(darkMode ? 'bg-zinc-800' : 'bg-white' )
    setTextColor(darkMode ? 'text-slate-100' : 'text-zinc-800')
  }, [darkMode])

  return (
    <div className={`
      ${textColor} ${backgroundClass}
      transition-all duration-300 ease-out
    `}>
      <Header />
      <About />
      {/* <Skills /> */}
      <Projects />
    </div>
  )
}

export default App
