import style from "./navbar.module.css"
import React from 'react'
import Image from "next/image"
import ThemeToggle from "../themetoggle/ThemeToggle"
import AuthLink from './../auth/AuthLink';
import Link from "next/link";
const Navbar = () => {
  
  return (
    <div className={style.container}>
          <div className={style.social}>
            <Image src="/facebook.webp" alt="This my facebook" width={24} height={24}/>
            <Image src="/instagram.webp" alt="This my instagram" width={24} height={24}/>
            <Image src="/linkedIn.webp" alt="This my linkedIn" width={24} height={24}/>
          </div>
          <div className={style.logo}>Elmancy</div>
          <div className={style.linkes}>
            <ThemeToggle/>
            <Link className={style.link} href="/">Home</Link>
            <Link className={style.link} href="/about">About</Link>
            <Link className={style.link} href="/contact">Contact</Link>
            <AuthLink/>
          </div>
    </div>
  )
}

export default Navbar