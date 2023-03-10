import React from "react";
import { useParams } from "react-router-dom";
import { Products } from "../../ProductsMock";

import "../Styles/ItemDetailContainer.css";
import "../Styles/ItemCount.css";

import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const productSelected = Products.find((element) => element.id === Number(id));
  console.log(productSelected);


  const onAdd = (cantidad) => {
    console.log(`se agrego al carrito ${cantidad} productos`);
  };


  return (
    <><div className="contenedor">
      <div>
        <Card className="Card-info" sx={{ width: 350, height: 450 }}>
          <CardMedia sx={{ height: 450 }} image={productSelected.img} />
        </Card>
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
      </div>
      {/* ----------------------------------------------------------- */}
      <div className="texto-info">
        <h1>{`Nombre: ${productSelected.nombre}`}</h1>
        <h3>{`Categoria: ${productSelected.categoria}`}</h3>    
        <h4>Idioma: </h4>
        <img
          id="imagen"
          class="post_flagen"
          src="https://www.gamestorrents.fm/wp-content/themes/GamesTorrent/css/images/flags/eng.png"
          title="Idioma English"
          alt="Idioma English"
        ></img>
      </div>
      {/* ----------------------------------------------------------- */}
     
      {/* ----------------------------------------------------------- */}
    </div>
    <div>
        <h5 className="descripcion">{`Descripcion: ${productSelected.descripcion}`}</h5>
      </div></>
  );
};

export default ItemDetailContainer;
