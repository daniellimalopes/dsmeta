import BotaoNotificacao from "../BotaoNotificacao";
import style from "../CardVendas/CardVendas.module.scss"


export default function CardVenda() {
  return (
    <div className={style.dsmetaCard}>
      <h2 className={style.dsmetaSalesTitle}>Vendas</h2>
      <div>
        <div className={style.dsmetaFormControlContainer}>
          <input className={style.dsmetaFormControl} type="date" id="date" placeholder="08/092022" required/>
        </div>
        <div className={style.dsmetaFormControlContainer}>
          <input className={style.dsmetaFormControl} type="date" id="date" placeholder="08/092022" required/>
        </div>
      </div>

      <div>
        <table className={style.dsmetaSalesTable}>
          <thead>
            <tr>
              <th className={style.show992}>ID</th>
              <th className={style.show576}>Data</th>
              <th>Vendedor</th>
              <th className={style.show992}>Visitas</th>
              <th className={style.show992}>Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={style.show992}>#341</td>
              <td className={style.show576}>08/07/2022</td>
              <td>Anakin</td>
              <td className={style.show992}>15</td>
              <td className={style.show992}>11</td>
              <td>R$ 55300.00</td>
              <td>
                <BotaoNotificacao/>
              </td>
            </tr>
            <tr>
            <td className={style.show992}>#341</td>
              <td className={style.show576}>08/07/2022</td>
              <td>Anakin</td>
              <td className={style.show992}>15</td>
              <td className={style.show992}>11</td>
              <td>R$ 55300.00</td>
              <td>
                <BotaoNotificacao/>
              </td>
            </tr>
            <tr>
            <td className={style.show992}>#341</td>
              <td className={style.show576}>08/07/2022</td>
              <td>Anakin</td>
              <td className={style.show992}>15</td>
              <td className={style.show992}>11</td>
              <td>R$ 55300.00</td>
              <td>
                <BotaoNotificacao/>
              </td>
            </tr>
            <tr>
            <td className={style.show992}>#341</td>
              <td className={style.show576}>08/07/2022</td>
              <td>Anakin</td>
              <td className={style.show992}>15</td>
              <td className={style.show992}>11</td>
              <td>R$ 55300.00</td>
              <td>
                <BotaoNotificacao/>
              </td>
            </tr>
            <tr>
            <td className={style.show992}>#341</td>
              <td className={style.show576}>08/07/2022</td>
              <td>Anakin</td>
              <td className={style.show992}>15</td>
              <td className={style.show992}>11</td>
              <td>R$ 55300.00</td>
              <td>
                <BotaoNotificacao/>
              </td>
            </tr>
            <tr>
            <td className={style.show992}>#341</td>
              <td className={style.show576}>08/07/2022</td>
              <td>Anakin</td>
              <td className={style.show992}>15</td>
              <td className={style.show992}>11</td>
              <td>R$ 55300.00</td>
              <td>
                <BotaoNotificacao/>
              </td>
            </tr>
            <tr>
            <td className={style.show992}>#341</td>
              <td className={style.show576}>08/07/2022</td>
              <td>Anakin</td>
              <td className={style.show992}>15</td>
              <td className={style.show992}>11</td>
              <td>R$ 55300.00</td>
              <td>
                <BotaoNotificacao/>
              </td>
            </tr>
            <tr>
            <td className={style.show992}>#341</td>
              <td className={style.show576}>08/07/2022</td>
              <td>Anakin</td>
              <td className={style.show992}>15</td>
              <td className={style.show992}>11</td>
              <td>R$ 55300.00</td>
              <td>
                <BotaoNotificacao/>
              </td>
            </tr>
          </tbody>

        </table>
      </div>

    </div>
  );
}
