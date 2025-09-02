import Link from "next/link";
import style from "./card.module.css"
import Image from 'next/image'

const Card = (prop: { postDetails:{id:string;img:string;slug:string;createdAt:string;title:string;desc:string}}) => {
    
    return ( 
        <div className={style.container}>
            {prop.postDetails.img && (
                                <div className={style.imgeContainer}>
                                <Image sizes="" className={style.image} src={`${process.env.PRFIX_IMG}${prop.postDetails.img}`} alt={`this ${prop.postDetails.slug}`} fill/>
                                </div>
            )
            }
                <div className={style.textContainer}>
                    <div className={style.detail}>
                        <span className={style.date}>{prop?.postDetails?.createdAt?.slice(0,10) ?? " - "} - </span>
                        <span className={style.category}>{prop.postDetails.slug}</span>
                    </div>
                    <Link href={`/posts/${prop.postDetails.id}`}>
                    <h1>{prop.postDetails.title}</h1>
                    </Link>
                    <p className={style.desc}>{prop?.postDetails?.desc?.slice(0,100)}</p>
                    <Link className={style.link} href={`/posts/${prop.postDetails.id}`}>Read ME</Link>
                </div>
        </div>
     );
}
 
export default Card;