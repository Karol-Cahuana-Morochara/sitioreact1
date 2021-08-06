import React from 'react'
const CardTarjeta = () => {
    return (
        <div className="card">
            <img src="https://i.ibb.co/Kx4tXMk/logoppppp.png" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title"> I.E Pedro Paulet Mostajo</h5>
					<p className="card-text">Creada a través de la R.D. Nº 0487 del 13 de junio de 1985; como la escuela estatal Nº 40284 del Centro Poblado San Juan El Alto, En aquel tiempo jurisdicción del Distrito de Lluta, Provincia de Caylloma, departamento de Arequipa. Posteriormente, mediante R.D. 1834 del 13 de diciembre de 1999, cambia su denominación por Colegio Nacional Nº 40284 “Pedro Paulet Mostajo”.</p>
					<a href="#" className="btn btn-primary">Go somewhere</a>
                    <br></br>
                    <br></br>

                    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-header">
                        <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/w5Xee2NcgEA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <br></br>
                        <p>Aniversario I. E. Pedro Paulet Mostajo</p>
                    </div>
                    </div>
				</div>
        </div>
    )
}

export default CardTarjeta