import Banner from "../component/Banner";
import CardVendas from "../component/CardVendas";
import style from "../pages/App.module.scss"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div >
      <div>
        <Banner />
      </div>
      <ToastContainer/>
      <main>
        <section className={style.sales}>
          <div className={style.dsmetaContainer} >
            <CardVendas/>
          </div>
        </section>
      </main>
    </div>

  );
}

export default App;
