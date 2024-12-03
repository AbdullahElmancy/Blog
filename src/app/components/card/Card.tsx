import Link from "next/link";
import style from "./card.module.css"
import Image from 'next/image'

const Card = (prop: { img: string;
    category:string;
 }) => {
    return ( 
        <div className={style.container}>
                <div className={style.imgeContainer}>
                <Image sizes="" className={style.image} src={`/${prop.img}`} alt={`this ${prop.category}`} fill/>
                </div>
                <div className={style.textContainer}>
                    <div className={style.detail}>
                        <span className={style.date}>24.11.2024 - </span>
                        <span className={style.category}>{prop.category}</span>
                    </div>
                    <Link href={`/`}>
                    <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
                    </Link>
                    <p className={style.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, consequuntur. Sapiente incidunt impedit officiis fuga labore neque explicabo doloremque et, quibusdam quod laboriosam nihil unde cum placeat inventore omnis esse?</p>
                    <Link className={style.link} href={`/`}>Read ME</Link>
                </div>
        </div>
     );
}
 
export default Card;