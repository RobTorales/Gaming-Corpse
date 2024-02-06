import NavBar from './components/NavBar';
import ItemListContainer from './components/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer';
import Ayuda from "./components/ayuda.jsx";
import Contacto from "./components/contacto.jsx";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import TerminosCondiciones from "./components/terminosCondiciones.jsx";
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import "bootswatch/dist/pulse/bootstrap.min.css"
import { useState } from 'react';
import { CartContext } from './context/cartContext.jsx';
import Carrito from './components/carrito.jsx';

function App() {

  const [carrito, setCarrito] = useState([]);
  
  const agregarAlCarrito = (item, cantidad) => {

    const itemAgregado = {...item, cantidad};

    const nuevoCarrito = [...carrito]; 

    const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id)

    if(estaEnElCarrito) {
        estaEnElCarrito.cantidad += cantidad;
    } else {
        nuevoCarrito.push(itemAgregado);  
    }
    setCarrito(nuevoCarrito); 
  }

  const cantidadEnCarrito = ()=> {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0); 
  }

  return (
    <>
        <div className="fondo bg-primary">
          <CartContext.Provider value={{carrito, agregarAlCarrito, cantidadEnCarrito}}>
            <BrowserRouter>
              <NavBar />
                  <Routes>
                        <Route  path="/" element={<Home />}/>
                        <Route  path="/productos" element={<ItemListContainer />}/>
                        <Route  path="/item/:id" element={<ItemDetailContainer />}/>
                        <Route  path="/productos/:categoria" element={<ItemListContainer/>}/>
                        <Route  path="/ayuda" element={<Ayuda/>}/>
                        <Route  path="/contacto" element={<Contacto/>}/>
                        <Route  path="/terminos-condiciones" element={<TerminosCondiciones/>}/>
                        <Route path="/carrito" element={<Carrito/>}/>
                  </Routes>
              <Footer />
            </BrowserRouter>   
          </CartContext.Provider >
        </div> 
    </>
  )
}

export default App;
