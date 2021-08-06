import React from 'react'
const Carrusel = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
					<img src="https://i.ibb.co/nMr0Fgg/offer3.png" className="d-block w-100" alt="..." />
					<div className="carousel-caption d-none d-md-block">
						<h5>Imagen 1</h5>
						<p>Banda de la I. E.</p>
					</div>
					</div>
					<div className="carousel-item">
					<img src="https://i.ibb.co/MRZ6msh/descarga-8.jpg" className="d-block w-100" alt="..." />
					<div className="carousel-caption d-none d-md-block">
						<h5>Imagen 2</h5>
						<p>Ganadores de conscurso</p>
					</div>
					</div>
					<div className="carousel-item">
					<img src="https://i.ibb.co/ykxzngk/descarga-9.jpgg" className="d-block w-100" alt="..." />
					<div className="carousel-caption d-none d-md-block">
						<h5>Imagen 3</h5>
						<p>Escuela de padres</p>
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
    )
}

export default Carrusel