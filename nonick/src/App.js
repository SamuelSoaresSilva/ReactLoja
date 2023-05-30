import Header from "./components/Header";
import Options from "./components/Options";
import Section from "./components/Section";
import "./index.css"

export default function App() {
  return (
    <div className="App">
      <div className="bg-marrom">
        <Header />
        <Options />
        <Section />
      </div>
    </div>
  );
}
