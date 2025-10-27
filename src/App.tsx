
import Header from "./components/Header.tsx";
import Certificados from "./components/Certificados.tsx";
import Projetos from "./components/Projetos.tsx";
import Home from "./components/Home.tsx";

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <Certificados />
      <Projetos />
    </div>
  );
}