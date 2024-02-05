import React from 'react'
import { useState, useEffect } from 'react';
import { pedirItemPorId } from '../helpers/pedirDatos';
import ItemDetail from './itemdetail';
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;
   
    useEffect(()=> {
        pedirItemPorId(Number(id))
            .then((res)=> {
                setItem(res);
            })
    }, [id])

  return (
    <div>
        {item && <ItemDetail item={item}/>}
    </div>
  )
}

export default ItemDetailContainer