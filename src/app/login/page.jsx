"use client"
import { signIn, useSession } from 'next-auth/react';
import style from './login.module.css'
import { useRouter } from 'next/navigation';
const LoginPage = () => {
    const {status} = useSession()
    
    const router = useRouter()
    if (status === "loading") {
        return <div className={style.loading}>
            <h1 className={style.titleLoding}>this page loading</h1>
            <p className={style.ploadin}> please wait for loading</p>
        </div>
    }
    
    if (status === "authenticated") {
        router.push("/")
    }
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