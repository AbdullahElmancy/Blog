import React, { ReactNode } from 'react'
import style from './catagoryList.module.css'
import Link from 'next/link'
import  Image  from 'next/image';
import { Icategory } from './../../interfaces/category';
const getDate = async()=>{
  const res = await fetch(`${process.env.BASE_URL}/api/categories`)
  if(!res.ok){
    throw new Error("faild to get date")
  }
  return res.json()
}
const CatagoryList = async() => {
  const data:Icategory[] = await getDate()

  return (
    <div className={style.container}>
        <h1 className={style.title}>Populer Categories</h1>
        <div className={style.categories}>
        {data.map((item)=>{
          return <div key={item.id} className={`${style.category} ${style[item.slug]}`}>
                    <Link key={item.id} className={style.link} href={`/blog?cat=${item.slug}`} >
                    <Image  key={item.id}  src={`../../../../public/${item.slug}.webP`} alt={`${item.slug} category`} width={32} height={32} className={style.image}/>{item.title}</Link>
          </div>
        })}
        </div>
        
    </div>
  )
}

export default CatagoryList