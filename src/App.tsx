import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import './App.css'
import Footer from './components/navbar/footer/Footer'
import ListaCategorias from './components/categorias/listacategorias/ListasCategorias'
import DeletarCategoria from './components/categorias/deletarcategorias/DeletarCategoria'
import CadastrarCategoria from './components/categorias/cadastrarcategoria/CadastrarCategoria'

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            <Route path="/cadastrarcategoria" element={<CadastrarCategoria />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App