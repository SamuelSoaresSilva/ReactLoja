import Header from "./components/Header";
import Options from "./components/Options";
import Produtos from "./components/Produtos";
import Section from "./components/Section";
import "./index.css"
import Camisa from "./assets/Camisa.png"

const ProdutosList = [
  {
    image: Camisa,
    alt: "Camisa",
    descricao: "Oversized - Black",
    preco: "$ 69",
  },

  {
    image: Camisa,
    alt: "Camisa",
    descricao: "Oversized - Black",
    preco: "$ 69",
  },

  {
    image: Camisa,
    alt: "Camisa",
    descricao: "Oversized - Black",
    preco: "$ 69",
  },

  {
    image: Camisa,
    alt: "Camisa",
    descricao: "Oversized - Black",
    preco: "$ 69",
  },
]

export default function App() {
  return (
    <div className="App">
      <div className="bg-marrom">
        <Header />
        <Options />
        <Section title="T-Shirts">
          {
            ProdutosList.map(function (item) {
              return (
                <Produtos
                  image={item.image}
                  alt={item.alt}
                  descricao={item.descricao}
                  preco={item.preco}
                />
              );
            })
          }
        </Section>
      </div>
    </div>
  );
}
