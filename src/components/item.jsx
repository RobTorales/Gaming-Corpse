import './item.css'
import { Link } from 'react-router-dom';


const Item = ({producto}) => {
  return (

    <div className=" col-md-3  pt-3 pb-2  p-3 mb-2 rounded">
            <div className="col">
                <div className="card text-center bg-white">
                    <img className="img-fluid"src={producto.imagen}/>
                    <div  className="card-body justify-content-center">
                    <p>{producto.titulo}</p>
                    <div>categoría: {producto.categoria}</div>
                    <div>${producto.precio}</div>
                    <div className="div-boton">
                        <button className="btn btn-primary"><Link to={`/item`} className="text-white">Ver Detalles</Link></button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

  )
}

export default Item