import React from 'react'

const ItemDetail = ({item}) => {
  return (
    <div className="contenedor-detalle">
        <div>
            <img className="detalle-imagen" src={item.imagen} alt={item.titulo}/>
        </div>
        <div className="producto-detalle">
            <h2>{item.titulo}</h2>
            <div>categoría: {toCapital(item.categoria)}</div>
            <p>
                <span>
                    ${item.precio}
                </span>
            </p>
        </div>        
    </div>
  )
}

export default ItemDetail;