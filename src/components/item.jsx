import './item.css'
import { Link } from 'react-router-dom'


const Item = ({producto}) => {
  return (

    <div className=" col-md-3  pt-5 pb-2  p-3 mb-4 rounded">
            <div className="col">
                <div className="card text-center bg-white" >
                    <div  className="card-body justify-content-center">
                    <img className="img-fluid" src={producto.imagen}/>
                      <p>{producto.titulo}</p>
                      <div>${producto.precio}</div>
                      <div className="div-boton">
                          <Link to={`/item/${producto.id}`} className="btn btn-primary text-white">Ver Detalles</Link>
                      </div>
                    </div>
                </div>
            </div>
    </div>

  )
}

export default Item