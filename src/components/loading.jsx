import React from 'react'
import './loading.css'
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="contenedor-spinner">
        <Spinner className="text-white"/>
    </div>
)
  
}

export default Loading