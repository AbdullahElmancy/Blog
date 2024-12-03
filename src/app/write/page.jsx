"use client"
import React from 'react'
import Image from 'next/image';
import style from './write.module.css'
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const WritePage = () => {
    const [open,setOpen] = useState(false)
    const {status} = useSession()
    
    const router = useRouter()
    if (status === "loading") {
        return <div className={style.loading}>
            <h1 className={style.titleLoding}>this page loadin</h1>
            <p className={style.ploadin}> please wait for loading</p>
        </div>
    }
    
    if (status === "authenticated") {
        router.push("/home")
    }
  return (
    <div className={style.container}>
        <input type={`text`} id={`title`} name={`title`} className={style.title} placeholder='Title'/>
        <div className={style.editor}>
            <button className={style.button} onClick={()=>setOpen(!open)}>
                <Image src={`/plus.webp`} alt={`add some thing`} width={16} height={16} loading='lazy'/>
            </button>
            {open && (
            <div className={style.add}>
            <button className={style.addButton}>
                <Image src={`/image.webp`} alt={`add some thing`} width={16} height={16} loading='lazy'/>
            </button>
            <button className={style.addButton}>
                <Image src={`/external.webp`} alt={`add some thing`} width={16} height={16} loading='lazy'/>
            </button>
            <button className={style.addButton}>
                <Image src={`/video.webp`} alt={`add some thing`} width={16} height={16} loading='lazy'/>
            </button>
            </div>
        )}
        <textarea className={style.textarea} name="post" id="post" placeholder='tell your story...'></textarea>
        </div>
        <button className={style.publish}>Publish</button>
    </div> 
  )
}

export default WritePage;



