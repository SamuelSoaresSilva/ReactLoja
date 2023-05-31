export interface ProdutoData {
    nome: String,
    descricao: String,
    preco: number,
    qtdDisponivel: number,
    categoria: String,
}

export interface ProdutoRespose {
    data: ProdutoData[]
}