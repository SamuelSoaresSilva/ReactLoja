import Header from "../components/Header";
import Options from "../components/Options";
import Footer from "../components/Footer/Footer";
import Section from "../components/listaProdutos/Section"


export default function Home() {
    return (
        <div className="bg-marrom">
            <Header />
            <Options />
            <Section title="T-Shirt" />
            <Footer />
        </div>
    );
}