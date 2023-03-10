import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Products } from "../../../ProductsMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {

  const {nombreCategoria} = useParams();
  
  const productosFiltrados = Products.filter((elemento)=> elemento.categoria === nombreCategoria)

  const [items, setItems] = useState([]);

  useEffect(() => {
    const ProductsList = new Promise((res, rej) => {
      res(nombreCategoria ? productosFiltrados : Products );
    });

    ProductsList.then((res) => {
      setItems(res);
    })

    .catch((error)=>{
      console.log(error);
    });
  }, [nombreCategoria]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
