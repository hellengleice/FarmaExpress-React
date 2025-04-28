import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Categoria from '../../../models/Categoria'
import { ToastAlerta } from '../../../utils/ToastAlerta'
import { RotatingLines } from 'react-loader-spinner'
import { buscar, deletar } from '../../../services/Service'

const DeletarCategoria = () => {

    const navigate = useNavigate()

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            console.log(error.toString().includes('403'))
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [categoria])

    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`)

            ToastAlerta('Categoria apagada com sucesso', "sucesso")

        } catch (error: any) {
            if (error.toString().includes('403')) {
                console.log((error.toString().includes('403')))
            } else {
                ToastAlerta('Erro ao deletar o categoria.', "erro")
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/categorias")
    }



    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a categoria a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header
                    className='py-2 px-6 bg-blue-600 text-white font-bold text-2xl'>
                    Categoria
                </header>
                <div>

                    <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.nome}</p>
                    <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.descricao}</p>
                </div>
                <div className="flex">
                    <button
                        className='text-slate-100 bg-blue-400 hover:bg-blue-600 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button
                        className='w-full text-slate-100 bg-blue-500 hover:bg-blue-700 flex items-center justify-center'
                        onClick={deletarCategoria}>
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria