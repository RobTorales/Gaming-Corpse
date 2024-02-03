import { useEffect } from "react"
import {pedirDatos} from "../helpers/pedirDatos.js"
import { useState } from "react";
import ItemList from './itemList.jsx'

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    pedirDatos()
      .then((res) => {
        setProductos(res);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }, []);

  return (
    <>
        <ItemList productos={productos} />
    </>
        

  )
}

export default ItemListContainer