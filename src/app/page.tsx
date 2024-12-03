import style from '@/app/page.module.css'
import Featured from './components/featured/Featured';
import CatagoryList from './components/catagoryList/CatagoryList';
import CardList from './components/cardlist/CardList';
import Menu from './components/menu/Menu';


const HOME = () :JSX.Element => {
  
  return ( <>
  <div className={style.container}>
  <Featured/>
  <CatagoryList/>
  <div className={style.content}>
    <CardList/>
    <Menu />
  </div>
  </div>

  </> );
}
 
export default HOME;