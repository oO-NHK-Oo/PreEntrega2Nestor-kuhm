import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Categorias.css";
const Categorias = () => {
  return (
    <ul className="listado-categorias">
      <Link to="/">Todos</Link>
      <Link to="/Categoria/Accion">Accion</Link>
      <Link to="/Categoria/Aventuras">Aventuras</Link>
      <Link to="/Categoria/Conduccion">Conduccion</Link>
      <Link to="/Categoria/Simulacion">Simulacion</Link>
      <Link to="/Categoria/Deportes">Deportes</Link>
    </ul>
  );
};

export default Categorias;
