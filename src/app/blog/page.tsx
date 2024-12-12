import style from './blog.module.css'
import CardList from '../components/cardlist/CardList';
import Menu from '../components/menu/Menu';

const BlogPage = async({searchParams}:{searchParams:Promise<any>}) => {
    const { page , cat} = await searchParams
    const pageh  =  parseInt(page) || 1
    return ( <>
    <div className={style.container}>
        <h1 className={style.title}>{cat} Blog</h1>
        <div className={style.content}>
            <CardList page={pageh} cat={cat}/>
            <Menu/>
        </div>
    </div>
    </> );
}
 
export default BlogPage;