import React, { ReactNode } from 'react'
import style from './catagoryList.module.css'
import Link from 'next/link'
import  Image  from 'next/image';
import { Icategory } from './../../interfaces/category';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
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
          return <>
        <Link key={item._id} href={`/blog?cat=${item.slug}`} className={`${style.category} ${style[item.slug]}`}>
        <Image  key={item._id}  src={item.img} alt={`${item.slug} category`} width={32} height={32} className={style.image}/>{item.title}</Link>
          </>
        })}
        </div>
        
    </div>
  )
}

export default CatagoryList