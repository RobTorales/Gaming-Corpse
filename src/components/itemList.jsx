import Item from "./item"
import './itemList.css'
import { Link } from "react-router-dom";

const ItemList = ({productos}) => {
  return (
    <div >
      
        <h2 className="text-white ">Productos</h2>
        <div className="container">
        <div className="row rounded">
        <ul class="nav justify-content-center gap-5">
                        <li class="nav-item">
                            <Link to="/productos"type="button" className="btn btn-outline-light">Todos</Link>
                        </li>
                        <li class="nav-item">
                            <Link  to="/productos/Procesadores" type="button" className="btn btn-outline-light">Procesadores</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/productos/Placas de video" type="button" className="btn btn-outline-light">Placas de video</Link>
                        </li>
                        <li class="nav-item">
                            <Link  to="/productos/Memorias Ram" type="button" className="btn btn-outline-light">Memorias Ram</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/productos/Fuentes"type="button" className="btn btn-outline-light">Fuentes</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/productos/Mothers" type="button" className="btn btn-outline-light">Mothers</Link>
                        </li>
                        <li class="nav-item">
                            <Link  to="/productos/Discos" type="button" className="btn btn-outline-light">Discos</Link>
                        </li>
                </ul>
            {productos.map((prod) => <Item producto={prod} key ={prod.id}/>)}
        </div>
        </div>
    </div>
  )
}

export default ItemList