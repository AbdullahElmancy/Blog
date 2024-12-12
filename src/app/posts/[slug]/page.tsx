import style from './singlepage.module.css'
import Menu from '../../components/menu/Menu';
import Image from 'next/image';
import Comments from '../../components/comments/Comments';
import { ISinglePost } from '@/app/interfaces/postsAr';

const getDate = async(slug:string)=>{
    const res = await fetch(`${process.env.BASE_URL}/${slug}`,{
        method:"GET",
        body:JSON.stringify({slug})
    })
    if(!res.ok){
      throw new Error("faild to get date")
    }
    return res.json()
}
const PostPage = async({params}:{params:Promise<any>}) => {
    const {slug} = await params
    const data:ISinglePost =await getDate(slug)
    console.log(data.img);
    
      
    return ( <>
    <div className={style.container}>
        <div className={style.infoContainer}>
            <div className={style.textContainer}>
                <h1 className={style.textTitle}>{data.title}</h1>
                <div className={style.user}>
                    {data.user.image && (
                                            <div className={style.userImageContainer}>
                                            <Image src={`${data.user.image}`} alt={"avatar image"} width={50} height={50} className={style.userimage} loading='lazy'/>
                                        </div>
                    )}
                    <div className={style.userTextContainer}>
                        <span className={style.userName}>{data.user.name}</span>
                        <span className={style.userDate}>{data.createdAt.slice(0,10)}</span>
                    </div>
                </div>
            </div>
{ data.img &&           <div className={style.imageContainer}>
                <Image src={`${process.env.PRFIX_IMG}${data.img}`} alt={`${data.slug} image`}  fill className={style.image} loading='lazy'/>
            </div>}
        </div>
        <div className={style.content}>
            <div className={style.post}>
                <div className={style.desc}>
                    <p className={style.pdesc}>{data.desc}</p>
                </div>
                <div className={style.comments}>
                <Comments postId={slug}/>
                </div>
            </div>
            <Menu/>
        </div>
    </div>
    </> );
}
 
export default PostPage;