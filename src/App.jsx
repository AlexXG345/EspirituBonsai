import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import CartDrawer from "./components/CartDrawer";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import BonsaiDetail from "./pages/BonsaiDetail";
import BonsaiMatch from "./pages/BonsaiMatch";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <CartDrawer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/catalogo/:id" element={<BonsaiDetail />} />
          <Route path="/match" element={<BonsaiMatch />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;