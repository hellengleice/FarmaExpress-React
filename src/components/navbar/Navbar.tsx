import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-2">
       
        <Link to="/" className="text-2xl font-bold tracking-wide hover:text-indigo-300">
          Farma <span className="text-indigo-300 ">Express</span>
        </Link>
        <div className="flex gap-4 text-lg font-medium">
          <Link to="/categorias" className="hover:text-indigo-300 transition">
            Lista Categorias
          </Link>
          <Link to="/formularioCategoria" className="hover:text-indigo-300 transition">
          <Link to="/cadastrarcategoria">Cadastrar Categoria</Link>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;