import Categorias from "./Components/Categoria/Categoria";
import Navbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/Items/ItemListContainer/ItemListContainer";
import Footer from "./Components/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./pages/Contacto/Contacto";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Categorias />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/Categoria/:nombreCategoria"
            element={<ItemListContainer />}
          />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Item/:id" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
