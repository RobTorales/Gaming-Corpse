import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer p-3 ">
        <div className='footer-div'>
            <div className='container-pagos'>
            <h4 className='text-white'>Metodos de pago</h4>
                <img src="./img/visa.png" alt="" className="tarjetas"/>
                <img src="./img/mastercard.png" alt="" className="tarjetas"/>
                <img src="./img/cencosud@2x.png" alt="" className="tarjetas"/>
                <img src="./img/cabal@2x.png" alt="" className="tarjetas"/>
                <img src="./img/tarjeta-naranja@2x.png" alt="" className="tarjetas"/>
                <img src="./img/tarjeta-shopping@2x.png" alt="" className="tarjetas"/>
                <img src="./img/mercadopago@2x.png" alt="" className="tarjetas"/>
            </div>
            <div className="contenedor-redes text-white">
                <h4>Seguinos en las redes</h4>
                <div className="redes">
                    <button className='btn btn-info'><i className="bi bi-instagram"></i></button>
                    <button className='btn btn-info'><i className="bi bi-facebook"></i></button>
                    <button className='btn btn-info'><i className="bi bi-tiktok"></i></button>
                </div>  
            </div>
            <div className='contacto'>
                <h4 className='text-white'>Contactos</h4>
                <ul>
                    <li className='text-white'>gamingcorpse@gmail.com</li>
                    <li className='text-white'>WhatsApp 223-545-2718</li>
                    <li className='text-white'>Mar del Plata Arenales 2741</li>
                </ul>
            </div>
            
        </div>
        <div className='derechos'>
            <p className='text-white'>Copyright © 2024 - Gaming Corpse. Buenos Aires, Argentina.</p>
        </div>
        
    </div>
  )
}

export default Footer