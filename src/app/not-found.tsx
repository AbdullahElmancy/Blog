import Link from "next/link"
import style from "./page.module.css"
function NotFound() {
  return (
    <div className={style.notFound}>
   
            <h1 className={style.notFoundTitle}>
                This page not exist
            </h1>
            <Link className={style.LinkNot} href="/">Back Home</Link>
   
    </div>
  )
}

export default NotFound