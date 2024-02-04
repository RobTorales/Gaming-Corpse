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

function App() {
  

  return (
    <>
        <div className="fondo bg-primary">
          <BrowserRouter>
          <NavBar />
              <Routes>
                    <Route  path="/" element={<Home />}/>
                    <Route  path="/productos" element={<ItemListContainer />}/>
                    <Route  path="/item" element={<ItemDetailContainer itemId={2}/>}/>
                    <Route  path="/ayuda" element={<Ayuda/>}/>
                    <Route  path="/contacto" element={<Contacto/>}/>
                    <Route  path="/terminos-condiciones" element={<TerminosCondiciones/>}/>
              </Routes>
          <Footer />
          </BrowserRouter>    
        </div> 
    </>
  )
}

export default App
