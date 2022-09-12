
import axios from "axios";
import { useEffect, useState } from "react";
import BotaoNotificacao from "../BotaoNotificacao";
import style from "../../../src/component/CardVendas/CardVendas.module.scss"
import { Sales } from "../models/sales";


export default function CardVenda() {

  const [sales, setSales] = useState<Sales[]>([])
  useEffect(() => {
    axios.get("http://localhost:8080/sales?minDate=2022-01-01&maxDate=2022-03-31")
      .then(response => {
        setSales(response.data.content)
      })
  }, [])
  return (
    <div className={style.dsmetaCard}>
      <h2 className={style.dsmetaSalesTitle}>Vendas</h2>
      <div>
        <div className={style.dsmetaFormControlContainer}>
          <input className={style.dsmetaFormControl} type="date" id="date" placeholder="08/092022" required />
        </div>
        <div className={style.dsmetaFormControlContainer}>
          <input className={style.dsmetaFormControl} type="date" id="date" placeholder="08/092022" required />
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
            {
              sales.map(sale => {
                return (
                  <tr key={sale.id}>
                    <td className={style.show992}>{sale.id}</td>
                    <td className={style.show576}>{new Date(sale.data).toLocaleDateString()}</td>
                    <td>{sale.vendedor}</td>
                    <td className={style.show992}>15</td>
                    <td className={style.show992}>11</td>
                    <td>R$ 55300.00</td>
                    <td>
                      <BotaoNotificacao />
                    </td>
                  </tr>
                )
              })
            }
          </tbody>

        </table>

      </div>
      
    </div>
  );
}
