import Item from "./item"
import './itemList.css'
import { Link } from "react-router-dom";
import Loading from "./loading";

const ItemList = ({productos, titulo}) => {
  return (
    <>
    {productos.length === 0 ? (
        <Loading/>
    ):(
        <div className="container">
      
      <h2 className="main title text-white ">{titulo}</h2>
      <div className="container">
      <div className="row rounded">
      <ul className="nav justify-content-center gap-5">
                      <li className="nav-item">
                          <Link to="/productos" className="button">Todos</Link>
                      </li>
                      <li className="nav-item">
                          <Link  to="/productos/Procesadores"  className="button">Procesadores</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/productos/Placas de video"  className="button">Placas de video</Link>
                      </li>
                      <li className="nav-item">
                          <Link  to="/productos/Memorias Ram"  className="button">Memorias Ram</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/productos/Fuentes" className="button">Fuentes</Link>
                      </li>
                      <li className="nav-item">
                          <Link to="/productos/Mothers"  className="button">Mothers</Link>
                      </li>
                      <li className="nav-item">
                          <Link  to="/productos/Discos"  className="button">Discos</Link>
                      </li>
              </ul>
          {productos.map((prod) => <Item producto={prod} key ={prod.id}/>)}
      </div>
      </div>
  </div>
    )}
        
    </>
    
  )
}

export default ItemList