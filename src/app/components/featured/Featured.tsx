import Image from 'next/image'
import style from './featured.module.css'
import ButtonFeatured from './button/buttonFeatured';
import { Suspense } from 'react';
const getDate = async(slug:string)=>{

  const res = await fetch(`${process.env.BASE_URL}/api/posts/${slug}`)
  if(!res.ok){
    throw new Error("faild to get date")
  }
  return res.json()
}
const Featured = async() => {
  const slug = "cmf2oy7jt000bvfiw8inbyz7f"
  const datePost = await getDate(slug)
  
  return (
    <div className={style.container}>
        <h1 className={style.title}>
            <p><b>Hay There This Elmancy blog</b> discovre my stories and creatve idea</p>
        </h1>
      <div className={style.post}>
      <div className={style.containerImage}>
        <Suspense fallback={<div className={style.load}><h1>Wait Untill Loading...</h1></div>}>
              <Image sizes='' className={style.image} loading='lazy' src={`${process.env.PRFIX_IMG}${datePost.img}`}alt='photofrom winter' fill />
        </Suspense>
        </div>
        <div className={style.containertext}>
            <h2 className={style.postTitle}>{datePost.title}</h2>
            <p className={style.postDesc}>{datePost.desc.slice(0,100)}...</p>
            <ButtonFeatured/>
        </div>
      </div>

    </div>
  )
}

export default Featured