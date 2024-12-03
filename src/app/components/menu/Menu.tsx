import style from './menu.module.css'
import MenuItem from '../menuItem/MenuItem';
import post from '@/app/services/arrImage'
import mergeSort, { objecta } from '@/app/utilities/mergesort'
import CatagoryList from '../catagoryList/CatagoryList';
import AllCategory from '../allCategory/AllCategory';
import Pageination from '../pagination/Pageination';
function Menu() {  
  let populerPost :objecta[] = mergeSort(post).reverse().slice(0,5) 
  const posts:objecta[] = post.slice(-4,post.length)



  return (
    <div className={style.container}>
        <h2 className={style.subTitle}>{`What's hot`}</h2>
        <h1 className={style.title}>Most Populer</h1>
        {
          populerPost.map(post=><MenuItem key={post.id} img={""} category={post.category}/>)
        }
        <h2 className={style.subTitle}>{`Discover By Topics`}</h2>
        <h1 className={style.title}>Categories</h1>
        <div className={style.categoryContiner}>
          
        {post.map(post=> <AllCategory key={post.id} category={post.category}/>)}
        </div>
        <h2 className={style.subTitle}>{`Chosen By Editor`}</h2>
        <h1 className={style.title}>Editor Pick</h1>
        {
          posts.map(post=><MenuItem key={post.id} img={post.img} category={post.category}/>)
        }
    </div>
  )
}

export default Menu