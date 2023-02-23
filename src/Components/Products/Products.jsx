import React from "react";
import "../Styles/Products.css";

const Products = ({ titulo, descripcion, precio }) => {
  return (
    <>
      <div className="Productos">
          <h1>{titulo}</h1>
          <h2>{descripcion}</h2>
          <h3>{precio}</h3>
      </div>
    </>
  );
};

export default Products;
