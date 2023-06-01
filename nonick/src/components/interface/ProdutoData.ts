export interface ProdutoData {
    id?: number;
    nome: string;
    descricao: string;
    preco: number;
    qtdDisponivel: number;
    categoria: string;
}

export interface ProdutoResponse {
    data: ProdutoData[];
}
