"use client"
import Link from 'next/link';
import style from './comments.module.css'
import Image from 'next/image';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { Icomment } from '@/app/interfaces/comment';
import { useState } from 'react';
const getComments  = async(url:string)=>{
    const res = await fetch(url)
    const data = await res.json()
    if(!res.ok){
        const errer  = new Error(data.message)
        throw errer
    }
    return data
}


const Comments = ({postId}:{postId:string}) => {

    const status = useSession()
    const {data,mutate,isLoading}:Icomment = useSWR(`https://blog-three-cyan-54.vercel.app/api/comments?postId=${postId}`,getComments)
    const [desc,setDesc] = useState("")
    
    const sendPost = async()=>{
        
        await fetch(`${process.env.BASE_URL}/api/comments`,{
            method:"POST",
            body:JSON.stringify({desc,postId}),
        })
        mutate()
    }
    return ( <>
    <div className={style.Container}>
        <h1 className={style.title}>Comments</h1>
        {status.status === "authenticated" ?(<div className={style.write}>
            <textarea placeholder='Write a comment' className={style.textarea} onChange={ev=>setDesc(ev.target.value)}/>
            <button className={style.button} onClick={sendPost}>Send</button>
        </div>):(<Link className={style.link} href={'/login'}>login to write comment</Link>)}
        <div className={style.comments}>
            {isLoading?"loading...":(!data ? " ": data.map((item)=>{
                return (
                    <div className={style.comment} key={item.id}>
                    <div className={style.user}>
                        <div className={style.userImageContainer}>
                            <Image src={item.user.image} alt={""} width={50} height={50} className={style.userimage} loading='lazy'/>
                        </div>
                        <div className={style.userTextContainer}>
                            <span className={style.userName}>{item.user.name}</span>
                            <span className={style.userDate}>{item.createdAt.slice(0,10)}</span>
                        </div>
                    </div>
                    <p className={style.desc}>{item.desc}</p>
                    
                </div>
                )
            }
            ))}
        </div>
    </div>
    </> );
}
 
export default Comments;