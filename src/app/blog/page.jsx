import style from './blog.module.css'
import CardList from './../components/cardlist/CardList';
import Menu from './../components/menu/Menu';

const BlogPage = () => {
    return ( <>
    <div className={style.container}>
        <h1 className={style.title}>Style Blog</h1>
        <div className={style.content}>
            <CardList/>
            <Menu/>
        </div>
    </div>
    </> );
}
 
export default BlogPage;