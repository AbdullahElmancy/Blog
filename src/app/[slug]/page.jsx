import style from './singlepage.module.css'
import Menu from './../components/menu/Menu';
import Image from 'next/image';
import Comments from './../components/comments/Comments';

const PostPage = () => {
    return ( <>
    <div className={style.container}>
        <div className={style.infoContainer}>
            <div className={style.textContainer}>
                <h1 className={style.textTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <div className={style.user}>
                    <div className={style.userImageContainer}>
                        <Image src={"/Elmancy.webp"} alt={"elmancy image"} width={50} height={50} className={style.userimage} loading='lazy'/>
                    </div>
                    <div className={style.userTextContainer}>
                        <span className={style.userName}>Abdallah Elmancy</span>
                        <span className={style.userDate}>1.12.2024</span>
                    </div>
                </div>
            </div>
            <div className={style.imageContainer}>
                <Image src={"/travling.webp"} alt={`travling image`}  fill className={style.image} loading='lazy'/>
            </div>
        </div>
        <div className={style.content}>
            <div className={style.post}>
                <div className={style.desc}>
                    <p className={style.pdesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum sit quam ratione numquam laudantium! Blanditiis dolorum aperiam odit? Aperiam cum optio praesentium corporis nobis incidunt qui vero laudantium. Voluptas, ut?</p>
                    <h2 className={style.hdesc}>Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>
                    <p className={style.pdesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum sit quam ratione numquam laudantium! Blanditiis dolorum aperiam odit? Aperiam cum optio praesentium corporis nobis incidunt qui vero laudantium. Voluptas, ut?</p>
                    <p className={style.pdesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum sit quam ratione numquam laudantium! Blanditiis dolorum aperiam odit? Aperiam cum optio praesentium corporis nobis incidunt qui vero laudantium. Voluptas, ut?</p>
                </div>
                <div className={style.comments}>
                <Comments/>
                </div>
            </div>
            <Menu/>
        </div>
    </div>
    </> );
}
 
export default PostPage;