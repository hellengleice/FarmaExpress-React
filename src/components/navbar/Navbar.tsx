import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-400 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Título */}
        <Link to="/" className="text-2xl font-bold tracking-wide hover:text-indigo-300">
          Projeto <span className="text-indigo-300">Farmacia</span>
        </Link>

        {/* Links de navegação */}
        <div className="flex gap-6 text-lg font-medium">
          <Link to="/categorias" className="hover:text-indigo-300 transition">
            Categorias
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