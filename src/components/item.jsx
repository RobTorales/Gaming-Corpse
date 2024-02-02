import './item.css'
import { Link } from 'react-router-dom';
import { toCapital } from "../helpers/toCapital.js"

const Item = ({producto}) => {
  return (

    <div class=" col-md-3  pt-3 pb-2  p-3 mb-2 rounded">
            <div class="col">
                <div className="card text-center bg-white">
                    <img className="imagen-producto"src={producto.imagen}/>
                    <div  className="card-body justify-content-center">
                    <p>{producto.titulo}</p>
                    <div>categoría: {toCapital(producto.categoria)}</div>
                    <div>${producto.precio}</div>
                    <div className="div-boton">
                        <button className="btn btn-primary"><Link to={'/item/${prodcuto.id}'} className="text-white">Ver Detalles</Link></button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

  )
}

export default Item