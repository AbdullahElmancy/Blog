"use client"
import { createContext, useEffect, useMemo, useState } from "react";
interface IThemeContext{
    theme:string;
    setTheme?:React.Dispatch<
    React.SetStateAction<IThemeContext['theme']>
    >;
    toggle:Function;

}




export const ThemeContext = createContext <IThemeContext | null>(null);

export const ThemeContextProvider = ({children}: React.PropsWithChildren<{}>)=>{
    
    useEffect(()=>{
        const getThemeFromLocal = localStorage.getItem("theme")        
        if (getThemeFromLocal !== undefined || getThemeFromLocal !== null ) {
            setTheme(getThemeFromLocal || "light")
            }
    },[])
    const [theme,setTheme] = useState<IThemeContext['theme']>("light")
    const toggle = ()=>{
        setTheme(theme === "light" ? "dark" : "light")
    }
    useEffect(()=>{
        localStorage.setItem("theme",theme)
    },[theme])
    const value = useMemo(()=>({theme,toggle}),[theme])
    return (<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>)
}
