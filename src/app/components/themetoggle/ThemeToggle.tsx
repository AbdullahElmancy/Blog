"use client"
import Image from "next/image"
import style from "./theme.module.css"
import { useContext } from "react"
import { ThemeContext } from "@/app/contexts/themeContext"

const ThemeToggle = () => {
  const contextTheme = useContext(ThemeContext)
  return (
    <div className={style.container} onClick={()=> contextTheme?.toggle()} style={contextTheme?.theme === "dark" 
    ?{backgroundColor:"#eceff1"}
    :{backgroundColor:"#263238"}}>
      <Image src="/moon.webp" alt="moon" width={14} height={14}/>
      <div className={style.ball} style={contextTheme?.theme === "dark" 
    ?{left:1,backgroundColor:"#263238"}
    :{backgroundColor:"#eceff1",right:1}}></div>
      <Image src="/sun.webp" alt="moon" width={14} height={14}/>
    </div>
  )
}

export default ThemeToggle