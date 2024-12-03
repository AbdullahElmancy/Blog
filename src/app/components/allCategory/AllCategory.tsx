import Link from "next/link"
import style from "./allCategory.module.css"

const AllCategory = (prop: {category:string}) => {
  return (
    <Link href={`/blog?cat=${prop.category}`} className={`${style.category} ${prop.category}`}>{prop.category}</Link>
    )
}

export default AllCategory