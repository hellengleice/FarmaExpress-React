import { Link } from 'react-router-dom';
import Categoria from '../../../models/Categoria';

interface CardCategoriaProps {
    categoria: Categoria
}

const CardCategorias = ({ categoria }: CardCategoriaProps) => {
    return (
        <div>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between w-80'>
                <header className='py-2 px-6 bg-blue-400 text-white font-bold text-2xl'>
                    Categoria
                </header>

                <div>

                    <p className='p-4 text-3xl bg-slate-200 h-full'>{categoria.nome}</p>
                    <p className='p-4 text-3xl bg-slate-200 h-full'>{categoria.descricao}</p>
                </div>

                <div className="flex">
                    <Link to={`/editarcategoria/${categoria.id}`}
                        className='w-full text-slate-100 bg-blue-400 hover:bg-blue-600 
    flex items-center justify-center py-2'>
                        <button>Editar</button>
                    </Link>

                    <Link to={`/deletarcategoria/${categoria.id}`}
                        className='text-slate-100 bg-blue-700 hover:bg-blue-500 w-full 
		flex items-center justify-center'>
                        <button>Deletar</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default CardCategorias