import style from './menu.module.css'
import MenuItem from '../menuItem/MenuItem';
import AllCategory from '../allCategory/AllCategory';
import {Icategory} from"@/app/interfaces/category"
import {Iposts} from"@/app/interfaces/postsAr"

const getDatePost = async()=>{
  const res = await fetch(`${process.env.BASE_URL}/api/posts`)
  if(!res.ok){
    throw new Error("faild to get date")
  }
  return res.json()
}
const getDateCategory = async()=>{
  const res = await fetch(`${process.env.BASE_URL}/api/categories`)
  if(!res.ok){
    throw new Error("faild to get date")
  }
  return res.json()
}
async function Menu() {  

  const dataCategory:Icategory[] = await getDateCategory()
  const {posts}:Iposts = await getDatePost()
  
  
  return (
    <div className={style.container}>
        <h2 className={style.subTitle}>{`What's hot`}</h2>
        <h1 className={style.title}>Most Populer</h1>
        {
          posts.map(post=><MenuItem key={post.id} creatAt={post.createdAt} userName={post.user.name}  title={post.title} ids={post.id} img={""} category={post.slug}/>)
        }
        <h2 className={style.subTitle}>{`Discover By Topics`}</h2>
        <h1 className={style.title}>Categories</h1>
        <div className={style.categoryContiner}>
          
        {dataCategory.map(post=> <AllCategory key={post.id} category={post.slug}/>)}
        </div>
        <h2 className={style.subTitle}>{`Chosen By Editor`}</h2>
        <h1 className={style.title}>Editor Pick</h1>
        {
          posts.map(post=><MenuItem key={post.id} creatAt={post.createdAt} userName={post.user.name} title={post.title} ids={post.id} img={post.img} category={post.slug}/>)
        }
    </div>
  )
}

export default Menu