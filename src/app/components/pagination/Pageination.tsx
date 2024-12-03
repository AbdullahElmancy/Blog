import React from 'react'
import style from './pageination.module.css'
const Pageination = () => {

  return (
    <div className={style.container}>
      <button className={style.button}>Pervious</button>
      <button className={style.button}>NEXT</button>
    </div>
  )
}

export default Pageination