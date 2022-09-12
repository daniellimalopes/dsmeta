
import axios from "axios";
import { useEffect, useState } from "react";
import BotaoNotificacao from "../BotaoNotificacao";
import style from "../../../src/component/CardVendas/CardVendas.module.scss";
import { Sales } from "../models/sales";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function CardVenda() {

  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();

  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);

  const [sales, setSales] = useState<Sales[]>([])
  useEffect(() => {

    const minDateFormat = minDate.toISOString().slice(0, 10)
    const maxDateFormat = maxDate.toISOString().slice(0, 10)

    axios.get(`http://localhost:8080/sales?minDate=${minDateFormat}&maxDate=${maxDateFormat}`)
      .then(response => {
        setSales(response.data.content)
      })
  }, [minDate, maxDate])
  return (
    <div className={style.dsmetaCard}>
      <h2 className={style.dsmetaSalesTitle}>Vendas</h2>
      <div>
        <div className={style.dsmetaFormControlContainer}>
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
            className={style.dsmetaFormControl}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className={style.dsmetaFormControlContainer}>
          <DatePicker
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
            className={style.dsmetaFormControl}
            dateFormat="dd/MM/yyyy"
          />
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
                      <BotaoNotificacao saleId={sale.id} />
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
