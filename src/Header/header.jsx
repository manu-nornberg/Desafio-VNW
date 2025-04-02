import { Link } from "react-router-dom";
import "./header.scss";
import search from "../img/search.png";
import logo from "../img/logo.png";

function Header() {
  return (
    <body>
      <header>
        <section>
          <img
            src={logo}
            alt="Livro aberto"
          />
          <h1>Livros vai na web</h1>
        </section>
        <nav>
          <ul>
            <Link to="/">Início</Link> 
            <Link to="/livros">Livros doados</Link> 
            <Link to="/doar">Quero doar</Link>
          </ul>
        </nav>
        <section>
          <form action="/buscar" method="get">
            <input type="text" name="query" placeholder="O que você procura?" aria-label="Pesquisar" />
            <button class="lupa" type="submit">
              <img src={search} />
            </button>
          </form>
        </section>
      </header>
    </body>
  );
}

export default Header;
