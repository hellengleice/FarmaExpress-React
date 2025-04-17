import Categoria from "./Categoria";

export default interface Produto {
    id?: number | null;
    nome: string
    preco?: number
    descricao: string
    foto?: string
    fabricante: string
    categoria?: Categoria
}