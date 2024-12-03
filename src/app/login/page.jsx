"use client"
import { signIn, useSession } from 'next-auth/react';
import style from './login.module.css'
import { useEffect } from 'react';
const LoginPage = () => {
    const {data,status} = useSession()
    
    
    return ( <>
    <div className={style.container}>
        <div className={style.wrapper}>
            <div className={`${style.socialButton} ${style.social1}`} onClick={()=>signIn("google",{ redirectTo: "/home" })}>Sing in with Google</div>
            <div className={style.socialButton}>Sing in with GitHub</div>
            <div className={`${style.socialButton} ${style.social2}`}>Sing in with Facebook</div>           
        </div>
    </div>
    </> );
}
 
export default LoginPage;