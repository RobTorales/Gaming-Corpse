import { useEffect } from "react"
import {pedirDatos} from "../helpers/pedirDatos.js"
import { useState } from "react";
import ItemList from './itemList.jsx'
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const categoria = useParams().categoria;
  console.log(categoria)

  useEffect(() => {
    pedirDatos()
      .then((res) => {
        if(categoria){
          setProductos( res.filter((prod) => prod.categoria === categoria));
        }else{
          setProductos(res)
        }
        
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }, [categoria]);



  return (
    <>
        <ItemList productos={productos} />
    </>
        

  )
}

export default ItemListContainer