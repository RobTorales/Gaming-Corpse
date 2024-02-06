import React from 'react'
import "./itemCount.css"

const ItemCount = ({cantidad, handleRestar, handleSumar, handleAgregar}) => {

  return (
    <div>
        <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button onClick={handleRestar} type="button" className="btn btn-primary">-</button>
            <button type="button" className="btn btn-secondary">{cantidad}</button>
            <button onClick={handleSumar} type="button" className="btn btn-primary">+</button>
        </div>
        <div className='container-boton'>
            <button className="btn btn-primary" onClick={handleAgregar}>Agregar al carrito</button>
        </div>       
    </div>
    
  )
}

export default ItemCount