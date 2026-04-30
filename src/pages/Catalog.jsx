import { Link } from "react-router-dom";
import { bonsais } from "../data/bonsais";

export default function Catalog() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Catálogo</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "2rem" }}>
        {bonsais.map(b => (
          <Link to={`/catalogo/${b.id}`} key={b.id} style={{ textDecoration: "none", color: "inherit", border: "1px solid #ddd", borderRadius: "12px", padding: "1rem", display: "block" }}>
            <h3>{b.name}</h3>
            <p style={{ color: "#666" }}>{b.style} · {b.age}</p>
            <strong>${b.price.toLocaleString()}</strong>
          </Link>
        ))}
      </div>
    </div>
  );
}