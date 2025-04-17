import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import './App.css'
import ListaCategorias from './components/categoria/listacategorias/ListaCategorias'
import DeletarCategoria from './components/categoria/deletarcategorias/DeletarCategoria'
import CadastrarCategoria from './components/categoria/cadastrarcategoria/CadastrarCategoria'
import Footer from './components/footer/Footer'


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