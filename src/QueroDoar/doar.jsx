import { useState } from "react";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import "./doar.scss";
import Frame from "../img/Frame.png";
import axios from "axios";

function Doar() {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [autor, setAutor] = useState("");
  const [imagem, setImagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const livro = {
      titulo,
      categoria,
      autor,
      imagem_url: imagem, 
    };

    try {
      const response = await axios.post("https://api-python-bwhw.onrender.com/doar", livro);
      console.log(response.data); 
      alert("Livro doado com sucesso!");
    } catch (error) {
      console.error("Erro ao doar o livro:", error);
      alert("Erro ao doar o livro. Tente novamente.");
    }
  };

  return (
    <body>
      <Header />
      <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
      <section className="formulario">
        <form onSubmit={handleSubmit}>
          <div>
            <img src={Frame} alt="Frame" />
            <h3>Informações do livro</h3>
          </div>
          <input
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)} 
          />
          <input
            type="text"
            placeholder="Categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)} 
          />
          <input
            type="text"
            placeholder="Autor"
            value={autor}
            onChange={(e) => setAutor(e.target.value)} 
          />
          <input
            type="text"
            placeholder="Link da imagem"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)} 
          />
          <button className="doar" type="submit">Doar</button>
        </form>
      </section>
      <Footer />
    </body>
  );
}

export default Doar;

