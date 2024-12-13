import style from './load.module.css'
function LoadingSkeleton() {
  return (
    <div className={style.load}><h1 className={style.title}>Wait Untill Loading...</h1></div>
  )
}

export default LoadingSkeleton