import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
<div className="contenedor-nav mb-5">
            <nav className="navbar navbar-expand-lg bg-white">
                    <a className="navbar-brand" href="/"><img src="/img/logo-gaming.png" alt="Gaming Corpse" width="220"/></a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="/realtimeproducts">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="/chat">Contacto</a>
                            </li>
                            <li>
                                <a className="nav-link text-dark" href="/products">Ayuda</a>
                            </li>
                        </ul>
                        <form className="d-flex p-2 " role="search">
                            <input className="form form-control me-2 " type="search" id="searchInput"  placeholder="Buscar productos..." aria-label="Search"/>
                            <button className="btn btn-primary" id="searchResults" type="submit"><i className="bi bi-search"></i></button>
                            <a className="btn btn-primary" href="/login"><i className="bi bi-person-fill"></i></a>
                            <a className="btn btn-primary" id="cartButton"><i className="bi bi-cart3"></i></a>
                        </form>
                    </div>
            </nav>
    </div>
  )
}

export default NavBar