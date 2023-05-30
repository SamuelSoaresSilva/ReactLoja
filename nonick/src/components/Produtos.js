export default function Produtos(props) {
    return (
        <div className="card rounded-0">
            <img src={props.image} className="bg-imagem" alt={props.alt}></img>
            <div className="card-body ps-4 pb-3 bg-white-blue">
                <h5 className="card-title fw-bolder fs-6">{props.descricao}</h5>
                <p className="card-text fw-bold">{props.preco}</p>
            </div>
        </div>
    );
}