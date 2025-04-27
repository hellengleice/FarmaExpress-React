import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import FormularioCategorias from "./components/categoria/formularioCategorias/FormularioCategorias"
import DeletarCategoria from "./components/categoria/deletarCategoria/DeletarCategoria"
import ListaCategorias from "./components/categoria/listaCategorias/ListaCategorias"

function App() {

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[0vh]">
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastrarcategoria" element={<FormularioCategorias />} />
            <Route path="/editarcategoria/:id" element={<FormularioCategorias />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <ListaCategorias />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App