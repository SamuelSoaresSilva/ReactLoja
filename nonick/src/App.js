import Header from "./components/Header";
import Options from "./components/Options";
import Produtos from "./components/Produtos";
import Section from "./components/Section";
import "./index.css"
import Camisa from "./assets/Camisa.png"
import Tenis from "./assets/tenis.png"
import Footer from "./components/Footer";

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

  {
    image: Camisa,
    alt: "Camisa",
    descricao: "Oversized - Black",
    preco: "$ 69",
  },
]

const Produtos2List = [
  {
    image: Tenis,
    alt: "Camisa",
    descricao: "Oversized - Black",
    preco: "$ 69",
  },

  {
    image: Tenis,
    alt: "Camisa",
    descricao: "Oversized - Black",
    preco: "$ 69",
  },

  {
    image: Tenis,
    alt: "Camisa",
    descricao: "Oversized - Black",
    preco: "$ 69",
  },

  {
    image: Tenis,
    alt: "Camisa",
    descricao: "Oversized - Black",
    preco: "$ 69",
  },

  {
    image: Tenis,
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

        <Section title="Sneakers">
          {
            Produtos2List.map(function (item) {
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
        <Footer />
      </div>
    </div>
  );
}
