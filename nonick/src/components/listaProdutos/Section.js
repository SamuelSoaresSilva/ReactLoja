import { useProdutoData } from "../../hooks/useProdutoData.ts";
import { Produtos } from "./Produtos";

export default function Section(props) {
    const { data } = useProdutoData();

    return (
        <div className="m-5 d-flex flex-column">
            <h1 className="display-6 fw-bold">{props.title}</h1>
            <div className="d-flex flex-row">
                {data?.map(item => (
                    <Produtos
                        image={item.image}
                        nome={item.nome}
                        descricao={item.descricao}
                        preco={item.preco}
                    />
                ))}
            </div>
        </div>
    );
}