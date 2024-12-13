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
       <Link href={`https://www.facebook.com/profile.php?id=100089417905304`}>
            <Image src="/facebook.webp" alt="This my facebook" width={18} height={18}/>
            </Link>
            <Link  href={`https://www.instagram.com/elmancy0/`}>
            <Image src="/instagram.webp" alt="This my instagram" width={18} height={18}/>
            </Link>
            <Link href={`https://www.linkedin.com/in/abdalla-elmancy-221241224/`}>
            <Image src="/linkedIn.webp" alt="This my linkedIn" width={18} height={18}/>
            </Link>
       </div>
      </div>
      <div className={style.links}>
        <div className={style.list}>
          <span className={style.listTitle}>Links</span>
          <Link  href={'/'}>Homepage</Link>
          <Link  href={'/about'}>About</Link>
          <Link  href={'/contact'}>Contact</Link>
          <Link  href={'/blog'}>Blog</Link>
        </div>
        <div className={style.list}>
          <span className={style.listTitle}>Tags</span>
          <Link  href={'/blog?cat=style'}>Style</Link>
          <Link  href={'/blog?cat=dashion'}>fashion</Link>
          <Link  href={'/blog?cat=travel'}>travel</Link>
          <Link  href={'/blog?cat=codeing'}>codeing</Link>
        </div>
        <div className={style.list}>
          <span className={style.listTitle}>Social</span>
          <Link  href={`https://www.facebook.com/profile.php?id=100089417905304`}>Facebook</Link>
          <Link  href={`https://www.instagram.com/elmancy0/`}>Instgram</Link>
          <Link  href={`https://www.linkedin.com/in/abdalla-elmancy-221241224/`}>Linked In</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer