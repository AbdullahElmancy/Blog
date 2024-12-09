"use client"
import React from 'react'
import style from './pageination.module.css'
import { useRouter } from 'next/navigation'
const Pageination = ({page,hasPerv,hasNext}:{page:number;hasPerv:boolean;hasNext:boolean}) => {  
  const router = useRouter()

  return (
    <div className={style.container}>
      <button className={style.button} disabled={!hasPerv} onClick={()=>router.push(`?page=${page -1}`)}>Pervious</button>
      <button className={style.button} disabled={!hasNext} onClick={()=>router.push(`?page=${page +1}`)}>NEXT</button>
    </div>
  )
}

export default Pageination