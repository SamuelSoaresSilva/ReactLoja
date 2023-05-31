export interface ProdutoData {
    id: number,
    nome: String,
    descricao: String,
    preco: number,
    qtdDisponivel: number,
    categoria: String,
}

export interface ProdutoRespose {
    data: ProdutoData[]
}