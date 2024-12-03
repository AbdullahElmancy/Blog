import React from 'react'
import style from './carlist.module.css'
import Pageination from '../pagination/Pageination'
import Card from '../card/Card'
import post from '@/app/services/arrImage'
import mergeSort, { objecta } from '@/app/utilities/mergesort'

const CardList = () => {
  let populerPost :objecta[] = mergeSort(post).reverse().slice(0,4)  

  return (
    <div className={style.container}>
      <h1 className={style.title}>Resnt Post</h1>
      <div className={style.posts}>
        {
          populerPost.map(post=><Card key={post.id} img={post.img} category={post.category}/>)
        }
      </div>
      <Pageination/>
    </div>
  )
}

export default CardList
