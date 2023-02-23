
import Categorias from "./Components/Categorias/Categorias";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";



function App() {
  return (
    <div>
      <Navbar />
      <Categorias/>
      <ItemListContainer saludo="Tutores"/>
      <Products titulo="Producto 1" descripcion="Esto es un producto" precio={1000}/>
      <Products titulo="Producto 2" descripcion="Esto es un producto" precio={500}/>
      <Products titulo="Producto 3" descripcion="Esto es un producto" precio={3000}/>
    </div>
  );
}

export default App;
