import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const { cart, removeFromCart, total, isOpen, setIsOpen } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Fondo oscuro — click fuera también cierra */}
      <div
        onClick={() => setIsOpen(false)}
        style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 999 }}
      />

      {/* Panel del carrito */}
      <div style={{ position: "fixed", top: 0, right: 0, width: "340px", height: "100vh", background: "#fff", boxShadow: "-4px 0 30px rgba(0,0,0,0.15)", zIndex: 1000, display: "flex", flexDirection: "column" }}>

        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.5rem", borderBottom: "1px solid #eee" }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "22px", fontWeight: 400, margin: 0, color: "#1a2e1a" }}>🛒 Tu Carrito</h2>
          <button
            onClick={() => setIsOpen(false)}
            style={{ background: "#f0ede5", border: "none", borderRadius: "50%", width: "36px", height: "36px", fontSize: "18px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1 }}
          >
            ✕
          </button>
        </div>

        {/* Contenido */}
        <div style={{ flex: 1, overflowY: "auto", padding: "1rem 1.5rem" }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: "center", padding: "3rem 0", color: "#999" }}>
              <div style={{ fontSize: "40px", marginBottom: "1rem" }}>🌿</div>
              <p>Tu carrito está vacío</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #f0ede5", padding: "1rem 0" }}>
                <div>
                  <p style={{ fontWeight: 500, marginBottom: "4px" }}>{item.name}</p>
                  <p style={{ fontSize: "13px", color: "#888" }}>${item.price.toLocaleString()} × {item.qty}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{ background: "none", border: "none", color: "#c0392b", cursor: "pointer", fontSize: "13px" }}
                >
                  Eliminar
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer con total */}
        {cart.length > 0 && (
          <div style={{ padding: "1.5rem", borderTop: "1px solid #eee" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.25rem" }}>
              <span style={{ fontWeight: 500 }}>Total</span>
              <span style={{ fontFamily: "Georgia, serif", fontSize: "20px", color: "#1a2e1a" }}>${total.toLocaleString()}</span>
            </div>
            <button style={{ width: "100%", padding: "14px", background: "#1a2e1a", color: "#c8b560", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase" }}>
              Finalizar compra
            </button>
          </div>
        )}
      </div>
    </>
  );
}