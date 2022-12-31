import {useTheme} from "next-themes"
import {useState, useEffect} from "react"
import { GiSunflower } from 'react-icons/gi'
import { IoMoonSharp } from 'react-icons/io5'

const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false)
    const {systemTheme , theme, setTheme} = useTheme ()

    useEffect(() =>{
        setMounted(true)
      },[])

    const renderThemeChanger= () => {
        if(!mounted) return null
        const currentTheme = theme === "system" ? systemTheme : theme 

        if(currentTheme ==="dark"){
            return (
                <button className="p-1 rounded-full shadow-black bg-gray-700/60">
                    <GiSunflower className="w-8 h-8 text-myYellow" role="button" onClick={() => setTheme('light')} />
                </button>
            )
        }

        else {
            return (
                <button className="bg-theme/10 rounded-full p-1">
                    <IoMoonSharp className="w-8 h-8 text-gray-600" role="button" onClick={() => setTheme('dark')} />
                </button>
            )
        }
    }

    return (
        <>
            {renderThemeChanger()}
        </>
    )
}

export default ThemeToggle