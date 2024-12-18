import Footer from "../Footer/footer";
import Header from "../Header/header";
import "./doar.scss";
import Frame from "../img/Frame.png";

function Doar() {
  return (
    <body>
      <Header />
      <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
      <section class="formulario">
        <form>
          <div>
            <img src={Frame} />
            <h3>Informações do livro</h3>
          </div>
          <input type="text" placeholder="Titulo" />
          <input type="text" placeholder="Categoria" />
          <input type="text" placeholder="Autor" />
          <input type="text" placeholder="Link da imagem" />
          <button class="doar">Doar</button>
        </form>
      </section>
      <Footer />
    </body>
  );
}

export default Doar;
