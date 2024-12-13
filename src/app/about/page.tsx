import Image from 'next/image';
import style from './about.module.css'

const About = () => {
    return ( <div className={style.container}>
        <div className={style.aboutText}>
            <h1>About ME</h1>
            <h2>Hello! I am <span className={style.nam}>Abdallah Elmancy</span></h2>
            <p className={style.aboutMe}>
                I am 24 years old and in july 2023 I graduted as software developer in computers and informations collage.
                I consider my self as fresh react developer.
            </p>
        </div>
        <div className={style.imageContainer}>
            <Image src={`/myImage.png`} alt={"this my image"} fill className={style.image}/>
        </div>
    </div> );
}
 
export default About;