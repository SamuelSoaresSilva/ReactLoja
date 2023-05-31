export function Produtos({ image, nome, descricao, preco }) {
    return (
        <div className="card rounded-0">
            <img src={image} className="bg-imagem" alt="imagem" />
            <div className="card-body ps-4 pb-3 bg-white-blue">
                <h5 className="card-title fw-bolder fs-6">{nome}</h5>
                <p className="card-text fw-bold">{descricao}</p>
                <p className="card-text fw-bold">{preco}</p>
            </div>
        </div>
    );
}