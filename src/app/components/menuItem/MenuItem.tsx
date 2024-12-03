import Link from "next/link"
import style from "./menuItem.module.css"
import Image from "next/image"

const MenuItem = (prop:{img:string;category:string}) => {
  return (
    <div className={style.container}>

      <div className={style.items}>
        <Link href={`/`} className={style.item}>
        {prop.img !== "" ?         <div className={style.imageContainer}>
        <Image sizes="" src={`/${prop.img}`} fill className={style.image} alt={`${prop.category}`}/>
      </div>:""}
      <div className={style.textContainer}>
        <span className={`${style.category} ${prop.category}`}>{`${prop.category}`}</span>
        <h3 className={style.itemTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
        <div className={style.details}>
          <span className={style.userName}>
            Abdallah Elmancy
          </span>
          <span className={style.date}> - 25.11.2024</span>
        </div>
      </div>
        </Link>
      </div>
    </div>
  )
}

export default MenuItem