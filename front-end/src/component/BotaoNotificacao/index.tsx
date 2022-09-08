import icon from "./../../../src/assets/img/Vector.png"
import style from "../BotaoNotificacao/BotaoNotficacao.module.scss"
export default function BotaoNotificacao(){
    return(
        <div className={style.dsmetaRedBbtn}>
            <img className={style.dsmetaBntImg} src={icon} alt="" />
        </div>
    );
}