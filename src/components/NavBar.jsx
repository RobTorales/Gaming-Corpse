import React, {useState} from 'react'
import './NavBar.css'
import { Link } from "react-router-dom";
import CartWidget from './cartWidget';

const NavBar = () => {


  return (
<div className='contenedor-nav '>
<nav className="navbar navbar-expand-lg bg-white">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/"><img className="img-logo"src="/img/logo-gaming.png" alt="Gaming Corpse" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
    </div>
    <form className="d-flex p-2 gap-2" role="search">
        <a className="button" to="/login"><i className="bi bi-person-fill"></i></a>
        <CartWidget />
    </form>
    
  </div>
</nav>
</div>
        

    
  )
}

export default NavBar