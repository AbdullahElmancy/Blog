import Link from "next/link"
import style from "./menuItem.module.css"
import Image from "next/image"

const MenuItem = (prop:{img:string;category:string,ids:string,title:string,creatAt:string,userName:string}) => {
  return (
    <div className={style.container}>

      <div className={style.items}>
        <Link href={`/posts/${prop.ids}`} className={style.item}>
        {prop.img !== "" ?         <div className={style.imageContainer}>
        <Image sizes="" src={`${process.env.PRFIX_IMG}${prop.img}`} fill className={style.image} alt={`${prop.category}`}/>
      </div>:""}
      <div className={style.textContainer}>
        <span className={`${style.category} ${prop.category}`}>{`${prop.category}`}</span>
        <h3 className={style.itemTitle}>{prop.title}</h3>
        <div className={style.details}>
          <span className={style.userName}>
            {prop.userName}
          </span>
          <span className={style.date}> - {prop.creatAt.slice(0,10)}</span>
        </div>
      </div>
        </Link>
      </div>
    </div>
  )
}

export default MenuItem