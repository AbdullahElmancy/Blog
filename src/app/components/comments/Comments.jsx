import Link from 'next/link';
import style from './comments.module.css'
import Image from 'next/image';

const Comments = () => {
    const status = "auth"
    return ( <>
    <div className={style.Container}>
        <h1 className={style.title}>Comments</h1>
        {status === "auth" ?(<div className={style.write}>
            <textarea placeholder='Write a comment' className={style.textarea}/>
            <button className={style.button}>Send</button>
        </div>):(<Link className={style.link} href={'/login'}>login to write comment</Link>)}
        <div className={style.comments}>
            <div className={style.comment}>
                <div className={style.user}>
                    <div className={style.userImageContainer}>
                        <Image src={"/Elmancy.webp"} alt={"elmancy image"} width={50} height={50} className={style.userimage} loading='lazy'/>
                    </div>
                    <div className={style.userTextContainer}>
                        <span className={style.userName}>Abdallah Elmancy</span>
                        <span className={style.userDate}>1.12.2024</span>
                    </div>
                </div>
                <p className={style.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi itaque soluta perspiciatis at magni nemo exercitationem asperiores quasi tenetur accusamus non harum quia, et eum provident architecto, perferendis sint tempora.</p>
                
            </div>
        </div>
    </div>
    </> );
}
 
export default Comments;