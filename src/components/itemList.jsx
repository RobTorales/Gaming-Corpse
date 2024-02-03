import Item from "./item"
import './itemList.css'

const ItemList = ({productos}) => {
  return (
    <div >
        <h2 className="text-white">Productos</h2>
        <div className="container">
        <div className="row rounded">
            {productos.map((prod) => <Item producto={prod} key ={prod.id}/>)}
        </div>
        </div>
    </div>
  )
}

export default ItemList