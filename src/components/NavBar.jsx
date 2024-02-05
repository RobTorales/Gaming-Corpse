import React from 'react'
import './NavBar.css'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
<div className="contenedor-nav mb-5">
            <nav className="navbar navbar-expand-lg bg-white">
                    <Link className="navbar-brand" to="/"><img src="/img/logo-gaming.png" alt="Gaming Corpse" width="220"/></Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="/productos">Productos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark" to="/contacto">Contacto</Link>
                            </li>
                            <li>
                                <Link className="nav-link text-dark" to="/ayuda">Ayuda</Link>
                            </li>
                        </ul>
                        <form className="d-flex p-2 gap-2" role="search">
                            <input className="form form-control me-2 " type="search" id="searchInput"  placeholder="Buscar productos..." aria-label="Search"/>
                            <button className="btn btn-primary" id="searchResults" type="submit"><i className="bi bi-search"></i></button>
                            <a className="btn btn-primary" to="/login"><i className="bi bi-person-fill"></i></a>
                            <a className="btn btn-primary" id="cartButton"><i className="bi bi-cart3"></i></a>
                        </form>
                    </div>
            </nav>
    </div>
  )
}

export default NavBar