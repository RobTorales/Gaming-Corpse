import React from 'react'
import { useState, useEffect } from 'react';
import { pedirItemPorId } from '../helpers/pedirDatos';
import ItemDetail from './itemdetail';


const ItemDetailContainer = ({itemId}) => {

    const [item, setItem] = useState(null);

    useEffect(()=> {
        pedirItemPorId(itemId)
            .then((res)=> {
                setItem(res);
            })
    }, [itemId])

  return (
    <div>
        {item && <ItemDetail item={item}/>}
        
    </div>
  )
}

export default ItemDetailContainer