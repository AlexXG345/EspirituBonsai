import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart, setIsOpen } = useCart();
  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav style={{ display:"flex", justifyContent:"space-between", padding:"1rem 2rem", background:"#1a1a0e", color:"#c8b560" }}>
      <Link to="/" style={{ color: "#c8b560", textDecoration: "none", fontSize: "1.4rem", fontWeight: "bold", display: "flex", alignItems: "center", gap: "8px" }}>
  <img src="/logoHome.png" alt="Logo" style={{ height: "32px" }} />
  Espíritu Bonsai
</Link>
      <div style={{ display:"flex", gap:"2rem", alignItems:"center" }}>
        <Link to="/" style={{ color:"#c8b560", textDecoration:"none" }}>Inicio</Link>
        <Link to="/catalogo" style={{ color:"#c8b560", textDecoration:"none" }}>Catálogo</Link>
        <button onClick={() => setIsOpen(true)} style={{ background:"#c8b560", border:"none", borderRadius:"20px", padding:"0.4rem 1rem", cursor:"pointer", fontWeight:"bold" }}>
          🛒 {count}
        </button>
      </div>
    </nav>
  );
}