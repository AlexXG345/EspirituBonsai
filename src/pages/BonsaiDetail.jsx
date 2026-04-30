import { useParams } from "react-router-dom";
import { bonsais } from "../data/bonsais";
import { useCart } from "../context/CartContext";

export default function BonsaiDetail() {
  const { id } = useParams();
  const bonsai = bonsais.find(b => b.id === Number(id));
  const { addToCart } = useCart();

  if (!bonsai) return <p>Bonsái no encontrado</p>;

  return (
    <div style={{ padding:"2rem", maxWidth:"700px", margin:"0 auto" }}>
      <img
      src={bonsai.image}
      alt={bonsai.name}
      style={{ width: "100%", maxHeight: "400px", objectFit: "cover", borderRadius: "12px", marginBottom: "1.5rem" }}
      />
      <h1>{bonsai.name}</h1>
      <p><strong>Edad:</strong> {bonsai.age}</p>
      <p>{bonsai.description}</p>
      <p><strong>Cuidados:</strong> {bonsai.care}</p>
      <h2>${bonsai.price.toLocaleString()}</h2>
      <button onClick={() => addToCart(bonsai)} style={{ padding:"1rem 2rem", background:"#1a1a0e", color:"#c8b560", border:"none", borderRadius:"8px", cursor:"pointer", fontSize:"1rem" }}>
        Agregar al carrito 🛒
      </button>
    </div>
  );
}