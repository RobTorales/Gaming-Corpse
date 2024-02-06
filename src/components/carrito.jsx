import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext'

const Carrito = () => {

    const [ carrito ] = useContext(CartContext)
  return (
    <div>
        <h1>Carrito</h1>
    </div>
  )
}

export default Carrito