import Aside from "./sitioweb/Aside";
import CardTarjeta from "./sitioweb/CardTarjeta";
import Carrusel from "./sitioweb/Carrusel";
import Header from "./sitioweb/Header";
import MapaUbic from "./sitioweb/MapaUbic";
import MenuNav from "./sitioweb/MenuNav";
import PiePag from "./sitioweb/PiePag";
import VideoPelis from "./sitioweb/VideoPelis";

function App() {
  return (
    <div className="container">

      	<header className="row bg-secondary">
		  <Header />
		</header>

		<nav className="row bg-warning">
			<MenuNav />
		</nav>

		<section className="row"> 
			<article className="col-md-6 bg-warning"> 
				Articulo 1<br></br>
				<Carrusel />
			</article>
			
			<article className="col-md-3 bg-secondary">
				<CardTarjeta />			
			</article>

			<aside className="col-md-3 bg-primary">
				<Aside />
			</aside>
		</section>

		<section className="row g-dark text-light">

			<article className="col-md-5 justify-content-center bg-secondary">
				<MapaUbic />
			</article>

			<article className="col-md-7 d-flex justify-content-center bg-secondary">
				<VideoPelis />
			</article>

		</section>

		<footer className="row bg-dark d-flex justify-content-center align-items-center text-light">
			<PiePag />
		</footer>
    </div>
  );
}

export default App;
