import React from 'react'
import './loading.css'

const Loading = () => {
  return (
    <div className="contenedor-spinner">
         <div class="loader">
          <span class="loader-text">cargando</span>
          <span class="load"></span>
        </div>
    </div>
)
  
}

export default Loading