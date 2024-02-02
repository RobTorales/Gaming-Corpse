import { useEffect } from "react"
import {pedirDatos} from "../helpers/pedirDatos.js"
import { useState } from "react";
import ItemList from './itemList.jsx'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    console.log(productos)

    useEffect(()=> {
        pedirDatos()
        .then((res) => {
            setProductos(res);        
        })
    }, [])

  return (
    <>
        <ItemList productos={productos} />
    </>
        

  )
}

export default ItemListContainer