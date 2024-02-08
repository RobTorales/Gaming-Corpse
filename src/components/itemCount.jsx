import React from 'react'
import "./itemCount.css"
import './item.css'

const ItemCount = ({cantidad, handleRestar, handleSumar, handleAgregar, mensaje}) => {



  return (
    <div className='count'>
        <div className="btn-group " role="group" aria-label="Basic outlined example">
            <button onClick={handleRestar} type="button" className="button">-</button>
            <button  className="button-cantidad text-dark">{cantidad}</button>
            <button onClick={handleSumar} type="button" className="button">+</button>
        </div>
        <div className='container-boton'>
            <button className="button" onClick={handleAgregar}>Agregar al carrito</button>
        </div>       
    </div>
    
  )
}

export default ItemCount