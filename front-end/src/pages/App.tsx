import Banner from "../component/Banner";
import CardVendas from "../component/CardVendas";
import style from "../pages/App.module.scss"
function App() {
  return (
    <div >
      <div>
        <Banner />
      </div>
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
