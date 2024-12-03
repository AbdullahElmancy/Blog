import React from 'react'
import style from './catagoryList.module.css'
import Link from 'next/link'
import  Image  from 'next/image';
const CatagoryList = () => {
  return (
    <div className={style.container}>
        <h1 className={style.title}>Populer Categories</h1>
        <div className={style.categories}>
          
            <Link href="/blog?cat=style" className={`${style.category} ${style.style}`}>
            <Image src="/style.webp" alt="style category" width={32} height={32} className={style.image}/>
            style
            </Link>
            <Link href="/blog?cat=fashion" className={`${style.category} ${style.fashion}`}>
            <Image src="/fashion.webp" alt="style category" width={32} height={32} className={style.image}/>
            fashion
            </Link>
            <Link href="/blog?cat=food" className={`${style.category} ${style.food}`}>
            <Image src="/food.webp" alt="style category" width={32} height={32} className={style.image}/>
            food
            </Link>
            <Link href="/blog?cat=travel" className={`${style.category} ${style.travel}`}>
            <Image src="/travling.webp" alt="style category" width={32} height={32} className={style.image}/>
            travel
            </Link>
            <Link href="/blog?cat=cultural" className={`${style.category} ${style.cultural}`}>
            <Image src="/cultural.webp" alt="style category" width={32} height={32} className={style.image}/>
            cultural
            </Link>
            <Link href="/blog?cat=coding" className={`${style.category} ${style.codeing}`}>
            <Image src="/coding.webp" alt="style category" width={32} height={32} className={style.image}/>
            codeing
            </Link>
  
        </div>
        
    </div>
  )
}

export default CatagoryList