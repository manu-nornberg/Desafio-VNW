import Footer from "../Footer/footer";
import Header from "../Header/header";
import "./home.scss";
import banner from "../img/banner.png";
import community from "../img/community.png";
import transform from "../img/transform.png";
import reading from "../img/reading.png";
import balance from "../img/balance.png";

function Home() {
  return (
    <body>
      <Header />
      <section class="banner">
        <img
          src={banner}
          alt="pessoa segurando uma pilha de livros"
        />
        <h1> VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO </h1>
      </section>
      <h1>Porque devo doar?</h1>
      <section class="cards">
        <section class="card">
          <img
            src={community}
            alt="varias pessoas reunidas"
          />
          <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
        </section>
        <section class="card">
          <img
            src={reading}
            alt="uma pessoa com um livro"
          />
          <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
        </section>
        <section class="card">
          <img
            src={transform}
            alt="uma mão unindo varias pessoas"
          />
          <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
        </section>
        <section class="card">
          <img
            src={balance}
            alt="uma balança"
          />
          <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
        </section>
      </section>
      <Footer />
    </body>
  );
}

export default Home;
