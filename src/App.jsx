import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/itemListContainer'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import ItemDetailContainer from './components/itemDetailContainer'


function App() {
  

  return (
    <>
    <div className="fondo">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer itemId={2}/>}/>
          <Route path="item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/productos" element={<ItemListContainer/>}/>
          <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
          
        </Routes>
      </BrowserRouter>
      
      
    </div>
      
    </>
  )
}

export default App
