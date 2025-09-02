import style from '@/app/page.module.css'
import Featured from './components/featured/Featured';
import CatagoryList from './components/catagoryList/CatagoryList';
import CardList from './components/cardlist/CardList';
import Menu from './components/menu/Menu';


const HOME = async({searchParams}:{searchParams:Promise<any>}) => {
  const { page } = await searchParams
  const pageh  =  parseInt(page) || 1
  return ( <>
  <div className={style.container}>
  <Featured/>
  <CatagoryList/>
  <div className={style.content}>
    <CardList page={pageh} cat={""}/>
    <Menu />
  </div>
  </div>

  </> );
}
 
export default HOME;