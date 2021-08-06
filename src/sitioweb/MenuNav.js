import React from 'react'
const MenuNav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">MENU</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item">
					<a className="nav-link active" aria-current="page" href="#">Inicio</a>
					</li>
					<li className="nav-item">
					<a className="nav-link" href="#">Noticias</a>
					</li>
					<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Sobre nosotros
					</a>
					<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
						<li><a className="dropdown-item" href="#">Autoridades</a></li>
						<li><a className="dropdown-item" href="#">Reseña historica</a></li>
						<li><hr className="dropdown-divider" /></li>
						<li><a className="dropdown-item" href="#">Ubicación</a></li>
					</ul>
					</li>
					<li className="nav-item">
					<a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Desabilitado</a>
					</li>
                    <li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Publicaciones
					</a>
					<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
						<li><a className="dropdown-item" href="#">Pagina 1</a></li>
						<li><a className="dropdown-item" href="#">Pagina 2</a></li>
						<li><hr className="dropdown-divider" /></li>
						<li><a className="dropdown-item" href="#">Pagina 3</a></li>
					</ul>
					</li>
				</ul>
				<form className="d-flex">
					<input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
					<button className="btn btn-outline-success" type="submit">Buscar</button>
				</form>
				</div>
			</div>
			</nav>
    )
}

export default MenuNav