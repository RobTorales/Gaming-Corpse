import React from 'react'
import { useState, useEffect } from 'react';
import ItemDetail from './itemdetail';
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore"
import { db } from '../firebase/firebaseConfig';
import Loading from './loading';

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;
   
    useEffect(()=> {
        
      const docRef = doc(db, "productos", id);
      getDoc(docRef)
        .then((resp) => {
          setItem(
            { ...resp.data(), id: resp.id}
          );
        })
    }, [id])

  return (
    
      <div>
        {
            item && <ItemDetail item={item}/>
        }
        
    </div>
    
    
  )
}

export default ItemDetailContainer