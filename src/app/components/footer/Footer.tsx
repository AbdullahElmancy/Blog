import React from 'react'
import style from "@/app/components/footer/footer.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  
  return (
    <div className={style.container}>
      <div className={style.info}>
       <div className={style.logoinfo}>
       <Image className={style.image} src={'/Elmancy.webp'} alt={"Elmancy logo"} width={50} height={50}/>
       <h1 className={style.logotitle}>Elmancy</h1>
       </div>
       <p className={style.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente earum veniam asperiores impedit praesentium, sint aliquam aspernatur adipisci at cum nobis? Nostrum nihil nulla nesciunt, illum minima natus placeat libero.</p>
       <div className={style.icons}>
        <Image src={'/facebook.webp'} alt={'facebook Elmancy'} width={18} height={18}/>
        <Image src={'/instagram.webp'} alt={'instagram Elmancy'} width={18} height={18}/>
        <Image src={'/linkedIn.webp'} alt={'linkedIn Elmancy'} width={18} height={18}/>
       </div>
      </div>
      <div className={style.links}>
        <div className={style.list}>
          <span className={style.listTitle}>Links</span>
          <Link  href={'/'}>Homepage</Link>
          <Link  href={'/'}>About</Link>
          <Link  href={'/'}>Contact</Link>
          <Link  href={'/'}>Blog</Link>
        </div>
        <div className={style.list}>
          <span className={style.listTitle}>Tags</span>
          <Link  href={'/'}>Style</Link>
          <Link  href={'/'}>Fashion</Link>
          <Link  href={'/'}>Travel</Link>
          <Link  href={'/'}>Codeing</Link>
        </div>
        <div className={style.list}>
          <span className={style.listTitle}>Social</span>
          <Link  href={'/'}>Facebook</Link>
          <Link  href={'/'}>Instgram</Link>
          <Link  href={'/'}>Linked In</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer