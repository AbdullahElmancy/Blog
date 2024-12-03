import Image from 'next/image'
import style from './featured.module.css'
const Featured = () => {
  
  return (
    <div className={style.container}>
        <h1 className={style.title}>
            <p><b>Hay There This Elmancy blog</b> discovre my stories and creatve idea</p>
        </h1>
      <div className={style.post}>
      <div className={style.containerImage}>
            <Image sizes='' className={style.image} loading='lazy' src="/post1.webp" alt='photofrom winter' fill />
        </div>
        <div className={style.containertext}>
            <h2 className={style.postTitle}>Lorem ipsum dolor sit amet.</h2>
            <p className={style.postDesc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, eligendi officiis. Dolor harum eaque nisi totam error, aliquid suscipit nam optio sunt, fuga laborum natus officiis, omnis voluptas consequatur! Cupiditate.</p>
            <button className={style.button}>Read More</button>
        </div>
      </div>

    </div>
  )
}

export default Featured