import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting={"Bienvenidos"} />}
          />
          {/* URL segments */}
          <Route path="/detalle/:idUser" element={<ItemDetailContainer />} />
          <Route
            path="/category/:idCategory"
            element={<ItemListContainer greeting={"Bienvenidos"} />}
          />

        </Routes>
      </BrowserRouter>
  );
}

export default App;
