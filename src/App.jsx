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
import { CartProvider } from './context/cartContext.jsx';
import Carrito from './components/carrito.jsx';

function App() {

  return (
    <>
        <div className="fondo bg-primary">
          <CartProvider >
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
                        <Route path="*" element={<h4>Error 404: Page not found</h4>}/>
                  </Routes>
              <Footer />
            </BrowserRouter>   
          </CartProvider >
        </div> 
    </>
  )
}

export default App;
