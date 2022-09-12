import style from "../Banner/Banner.module.scss";
import imageBanner from "./../../../src/assets/img/imageBanner.png"
export default function Banner(){
    return(
       <div className={style.bannerContainner}>
           <img className={style.image} src={imageBanner} alt="" />
            <h1 className={style.title}>DSMeta</h1>
            <p className={style.paragrafo}>Desenvolvido por daniel.lima.lopes@outlook.com</p>
       </div>
           
       
        
    );
}