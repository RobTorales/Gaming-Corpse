import React from 'react'

const ItemDetail = ({item}) => {
  return (
    <div className="container">
        <div className="row pt-5 pb-5 shadow p-3 mb-5 bg-white">
        <div className="col-md-4 offset-md-2">
            <img className="img-fluid" src={item.imagen} alt={item.titulo}/>
        </div>
        <div className="col-md-5 ">
            <h2>{item.titulo}</h2>
            <div>categoría: {item.categoria}</div>
            <p>
                <span>
                    ${item.precio}
                </span>
            </p>
        </div>  
        </div>      
    </div>
  )
}

export default ItemDetail;