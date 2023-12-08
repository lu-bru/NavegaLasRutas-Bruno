import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer title="Tienda de frutas" />}
          />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer title="Tienda de frutas" />}
          />
          <Route path="/product/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<h1>Carrito</h1>}></Route>
          <Route path="*" element={<h1>Error 404</h1>} />
          {/* <Route path="*" element={<PageNotFound>}/ > */}
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
