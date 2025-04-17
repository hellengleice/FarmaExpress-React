import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { cadastrar } from "../../../services/Service";

function CadastrarCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function cadastrarCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      await cadastrar("/categorias", categoria, setCategoria, {});
      alert("Categoria cadastrada com sucesso!");
      navigate("/categorias");
    } catch (error) {
      console.error("Erro ao cadastrar categoria:", error);
      alert("Erro ao cadastrar categoria.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">Cadastrar Categoria</h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={cadastrarCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome da Categoria</label>
          <input
            type="text"
            name="nome"
            value={categoria.nome}
            onChange={atualizarEstado}
            className="border-2 border-slate-700 rounded p-2"
            placeholder="Digite o nome da categoria"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição</label>
          <input
            type="text"
            name="descricao"
            value={categoria.descricao}
            onChange={atualizarEstado}
            className="border-2 border-slate-700 rounded p-2"
            placeholder="Digite uma descrição"
            required
          />
        </div>

        <button
          className="rounded text-white bg-blue-400 hover:bg-blue-300 w-1/2 py-2 mx-auto flex justify-center"
          type="submit"
        >
          {isLoading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            />
          ) : (
            <span>Cadastrar</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default CadastrarCategoria;