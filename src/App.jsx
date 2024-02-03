import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/itemListContainer'
import ItemDetailContainer from './components/itemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Ayuda from "./components/ayuda.jsx"
import Contacto from "./components/contacto.jsx"


function App() {
  

  return (
    <>
    
      <BrowserRouter>
        <div className="fondo">
            <NavBar/>
              <Routes>
                    <Route path="/" element={<ItemListContainer />}/>
                    <Route path="/item/:id" element={<ItemDetailContainer />}/>
                    <Route path="/productos" element={<ItemListContainer />}/>
                    <Route path="/ayuda" element={<Ayuda/>}/>
                    <Route path="/contacto" element={<Contacto/>}/>
              </Routes>
          </div>
      </BrowserRouter>
    
      
    </>
  )
}

export default App
