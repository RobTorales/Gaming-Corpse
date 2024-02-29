import React, { useState } from 'react';
import "./itemCount.css";
import './item.css';
import { Link } from 'react-router-dom';

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar, mensaje }) => {
  const [agregadoAlCarrito, setAgregadoAlCarrito] = useState(false);

  const handleAgregarAlCarrito = () => {
    handleAgregar();
    setAgregadoAlCarrito(true);
  };

  return (
    <div className='count'>
      <div className="btn-group" role="group" aria-label="Basic outlined example">
        <button onClick={handleRestar} type="button" className="button">-</button>
        <button className="button-cantidad text-dark">{cantidad}</button>
        <button onClick={handleSumar} type="button" className="button">+</button>
      </div>
      <div className='container-boton'>
        <button className="button w-50" onClick={handleAgregarAlCarrito}>Agregar al carrito</button>
        {agregadoAlCarrito && (
          <Link to="/carrito" className="button-comprar w-50" onClick={() => console.log("Terminar compra")}>Terminar compra</Link>
        )}
      </div>
    </div>
  );
};

export default ItemCount;