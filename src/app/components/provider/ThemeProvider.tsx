"use client"
import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from "@/app/contexts/themeContext"

const ThemeProvider = ({children}:React.PropsWithChildren<{}>) => {
   let context = useContext(ThemeContext)
   let [mounted,setMounted] = useState(false)
      
   useEffect(()=>{
    setMounted(true)
   })
   if (mounted) {
    return (
      <div  className={context?.theme}>{children}</div>
    )
   }

}

export default ThemeProvider