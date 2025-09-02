"use client"
import style from './button.module.css'
import { useRouter } from "next/navigation"

function ButtonFeatured() {
const router = useRouter()
  return (
    <button className={style.button} onClick={()=>router.push("/posts/cmf2oy7jt000bvfiw8inbyz7f")}>Read More</button>
)
}

export default ButtonFeatured