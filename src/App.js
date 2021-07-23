import logo from './logo.svg';
import './App.css';
import C01componentes from './componentes/C01componentes';
import C02contador from './componentes/C02contador';
<p>
  hola... bienvenidos
</p>

function App() {
  return (
    <div className="container">
      <C01componentes/>
      <hr/>

      <C02contador/>

      	<header className="row bg-secondary">
		  <img src="https://i.ibb.co/dty888B/header.jpg" class="img-fluid" alt="..." />
		</header>

		<nav className="row bg-warning">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">Navbar</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item">
					<a className="nav-link active" aria-current="page" href="#">Home</a>
					</li>
					<li className="nav-item">
					<a className="nav-link" href="#">Link</a>
					</li>
					<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Dropdown
					</a>
					<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
						<li><a className="dropdown-item" href="#">Action</a></li>
						<li><a className="dropdown-item" href="#">Another action</a></li>
						<li><hr className="dropdown-divider" /></li>
						<li><a className="dropdown-item" href="#">Something else here</a></li>
					</ul>
					</li>
					<li className="nav-item">
					<a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
					</li>
				</ul>
				<form className="d-flex">
					<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
					<button className="btn btn-outline-success" type="submit">Search</button>
				</form>
				</div>
			</div>
			</nav>
		</nav>

		<section className="row"> 
			<article className="col-md-6 bg-warning"> 
				Articulo 1<br></br>
				<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
					<img src="https://i.ibb.co/NpTh8Fw/galeria1.jpg" className="d-block w-100" alt="..." />
					<div className="carousel-caption d-none d-md-block">
						<h5>First slide label</h5>
						<p>Some representative placeholder content for the first slide.</p>
					</div>
					</div>
					<div className="carousel-item">
					<img src="https://i.ibb.co/vhtHzwc/galeria2.jpg" className="d-block w-100" alt="..." />
					<div className="carousel-caption d-none d-md-block">
						<h5>Second slide label</h5>
						<p>Some representative placeholder content for the second slide.</p>
					</div>
					</div>
					<div className="carousel-item">
					<img src="https://i.ibb.co/2ZFTtCz/galeria3.jpg" className="d-block w-100" alt="..." />
					<div className="carousel-caption d-none d-md-block">
						<h5>Third slide label</h5>
						<p>Some representative placeholder content for the third slide.</p>
					</div>
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
				</div>
			</article>
			
			<article className="col-md-3 bg-secondary">
				<div className="card">
				<img src="https://i.ibb.co/P98gn5d/colibri.jpg" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" className="btn btn-primary">Go somewhere</a>
				</div>
				</div>
								
			</article>

			<aside className="col-md-3 bg-primary">
				<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Open modal for @mdo</button><br></br>
				<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Open modal for @fat</button><br></br>
				<button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Open modal for @getbootstrap</button>

				<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLabel">New message</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">
						<form>
						<div className="mb-3" >
							<label for="recipient-name" className="col-form-label">Recipient:</label>
							<input type="text" className="form-control" id="recipient-name" />
						</div>
						<div className="mb-3">
							<label for="message-text" className="col-form-label">Message:</label>
							<textarea className="form-control" id="message-text"></textarea>
						</div>
						</form>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
						<button type="button" className="btn btn-primary">Send message</button>
					</div>
					</div>
				</div>
				</div>
			</aside>
		</section>

		<section className="row g-dark text-light">

			<article className="col-md-5 justify-content-center bg-secondary">
				<div>
					<div className="d-flex align-items-stretch pt-2">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.7331251795354!2d-71.55089728554384!3d-16.38755174218781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a6a0172d35d%3A0xebeb3b98aa2420d9!2sInstituto%20Superior%20Honorio%20Delgado%20Espinoza!5e0!3m2!1ses-419!2spe!4v1627005689015!5m2!1ses-419!2spe" width="400" height="300" allowfullscreen="" loading="lazy"></iframe>
					</div>
					<h5>Los Arces 202. Distrito de Cayma - Arequipa.</h5> <h6>numero de contacto: 05423</h6>
				</div>
			</article>

			<article className="col-md-7 d-flex justify-content-center bg-secondary">
				<iframe width="749" height="409" src="https://www.youtube.com/embed/rRlk01_0E3Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</article>

		</section>

		<footer className="row bg-dark text-light">
			footer
		</footer>
    </div>
  );
}

export default App;
