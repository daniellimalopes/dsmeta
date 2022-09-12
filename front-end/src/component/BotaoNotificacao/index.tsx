import icon from "./../../../src/assets/img/Vector.png"
import style from "../BotaoNotificacao/BotaoNotficacao.module.scss"
import { type } from "@testing-library/user-event/dist/types/setup/directApi";
import axios from "axios";
import { toast } from "react-toastify";

type Props = {
    saleId: number;
}

function handleClick(id: number){
    axios(`http://localhost:8080/sales/${id}/notification`)
    .then(response => {
       toast.info("SMS enviado com sucesso");
})
}

export default function BotaoNotificacao({saleId} : Props){
    return(
        <div className={style.dsmetaRedBbtn} onClick={() => handleClick(saleId)}>
            <img className={style.dsmetaBntImg} src={icon} alt="" />
        </div>
    );
}