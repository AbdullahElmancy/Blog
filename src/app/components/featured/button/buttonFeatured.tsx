"use client"
import style from './button.module.css'
import { useRouter } from "next/navigation"

function ButtonFeatured() {
const router = useRouter()
  return (
    <button className={style.button} onClick={()=>router.push("/posts/cm4mms0u00003vfi01talr7ti")}>Read More</button>
)
}

export default ButtonFeatured