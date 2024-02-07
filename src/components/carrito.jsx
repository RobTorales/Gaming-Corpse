import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import { Link } from 'react-router-dom'
import CartItem from './cartitem'

const Carrito = () => {

  const { carrito, limpiarCarrito, precioTotal } = useContext(CartContext)

  if(CartContext.length == 0){
    return(
      <div className='container'>
        <h2>No hay items en el carrito</h2>
        <Link to ="/">Productos</Link>
      </div>
    )
  }


  return (

    <div className="contenedor-carrito">
                <div className="carrito ">
                    <div className="d-flex justify-content-center bg-primary">
                        <h3 className="text-white">Carrito</h3>
                    </div>
                
                {
                    carrito.map(producto => <CartItem key={producto.id} producto={producto}/>)
                }
                <div className="contenedor-resumen bg-white">
                    <h3 className="titulo text-primary">Resumen</h3>
                    <div className="acciones">
                        <div className="total text-primary">Total: ${precioTotal ()}</div>
                          <Link type="button" className="btn btn-primary w-100" onClick={() => limpiarCarrito()}>Limpiar Carrito</Link>
                          
                          <Link to="/checkout" className="btn btn-primary w-100" >Comprar</Link>
                          
                    </div>
                
               
                </div>
            
            </div>
          </div>
  )
}

export default Carrito