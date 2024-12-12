import React from 'react'
import style from './carlist.module.css'
import Pageination from '../pagination/Pageination'
import Card from '../card/Card'
import { Iposts } from '@/app/interfaces/postsAr'

const getDate = async(page:number,cat:string)=>{
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`)
  if(!res.ok){
    throw new Error("faild to get date")
  }
  return res.json()
}
const CardList = async({page,cat}:{page:number;cat:string}) => {
  
  const {posts,count}:Iposts = await getDate(page,cat)
  const countPost = 4;
  const hasPerv = countPost * (page-1) >0;
  const hasNext = countPost * (page-1) + countPost < count ;
  
  console.log(posts);
  

  return (
    <div className={style.container}>
      <h1 className={style.title}>Resnt Post</h1>
      <div className={style.posts}>
        {
          posts.map(post=><Card key={post.id} postDetails={post}/>)
        }
      </div>
      <Pageination page={page} hasPerv={hasPerv} hasNext={hasNext}/>
    </div>
  )
}

export default CardList
