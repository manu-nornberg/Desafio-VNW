import Footer from "../Footer/footer";
import Header from "../Header/header";
import "./livros.scss";
import axios from "axios";
import { useState, useEffect } from "react"; 

function Livros() {
  const [livros, setLivros] = useState([]);

  const fetchLivros = async () => {
    try {
      const response = await axios.get("https://api-python-bwhw.onrender.com/livros");
      setLivros(response.data);  
    } catch (error) {
      console.error("Erro ao buscar os livros:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://api-python-bwhw.onrender.com/livros/${id}`);
      alert("Livro excluído com sucesso!");
      fetchLivros(); 
    } catch (error) {
      console.error("Erro ao excluir o livro:", error);
      alert("Erro ao excluir o livro. Tente novamente.");
    }
  };

  useEffect(() => {
    fetchLivros();
  }, []);

  return (
<body>
  <Header />
  {livros.length > 0 ? (
    <section className="card-livro">
      {livros.map((livro, index) => (
        <div key={index} className="livro-card">
          <img src={livro.imagem_url} alt={`Capa do livro ${livro.titulo}`} />
          <section className="descricao">
            <ul>
              <li style={{fontWeight:"bold"}}>{livro.titulo.length > 20 ? livro.titulo.slice(0, 20) + '...' : livro.titulo}</li>
              <li>Autor: {livro.autor}</li>
              <li>Categoria: {livro.categoria}</li>
            </ul>
          </section>
            <button onClick={() => handleDelete(livro.id)}>Excluir</button>
        </div>
      ))}
    </section>
  ) : (
    <p>Carregando livros...</p>
  )}
  <Footer />
</body>


  );
}

export default Livros;

