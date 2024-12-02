import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Livros from "./src/LivrosDoados/livros";
import Quero from "./src/QueroDoar/doar";
import Home from "./src/Home/home";

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livros" element={<Livros />} />
        <Route path="/doar" element={<Quero />} />
      </Routes>
    </Router>
  );
}
export default Rotas;