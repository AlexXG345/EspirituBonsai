import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { bonsais as bonsaisLocales } from "../data/bonsais";
import { getBonsais } from "../data/api";

const difficultyLabel = { principiante: "Principiante", intermedio: "Intermedio", avanzado: "Avanzado" };
const difficultyColor = { principiante: "#4a9e6b", intermedio: "#c8a040", avanzado: "#a04040" };

export default function Catalog() {
  const navigate = useNavigate();
  const [bonsais, setBonsais] = useState(bonsaisLocales);

  useEffect(() => {
    getBonsais()
      .then(data => {
        if (data && data.length > 0) setBonsais(data);
      })
      .catch(() => {
        console.log("Usando datos locales");
      });
  }, []);

  return (
    <div style={{ background: "#070B1A", minHeight: "100vh", fontFamily: "Georgia, serif" }}>

      {/* ===== BANNER BONSAI MATCH ===== */}
      <div style={{ padding: "2rem 2rem 0" }}>
        <div
          onClick={() => navigate("/match")}
          style={{
            position: "relative",
            overflow: "hidden",
            background: "linear-gradient(135deg, #0D1128 0%, #1A0A40 50%, #0D1128 100%)",
            borderRadius: "16px",
            padding: "32px 40px",
            marginBottom: "2.5rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            flexWrap: "wrap",
            border: "1px solid rgba(160,108,255,0.25)",
            boxShadow: "0 4px 32px rgba(106,63,255,0.12)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.border = "1px solid rgba(160,108,255,0.55)";
            e.currentTarget.style.boxShadow = "0 8px 48px rgba(106,63,255,0.25)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.border = "1px solid rgba(160,108,255,0.25)";
            e.currentTarget.style.boxShadow = "0 4px 32px rgba(106,63,255,0.12)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <div style={{ position: "absolute", width: 300, height: 300, top: -100, right: 60, borderRadius: "50%", background: "radial-gradient(circle, rgba(106,63,255,0.25), transparent)", filter: "blur(50px)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 1, flex: 1, minWidth: 220 }}>
            <p style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#A06CFF", marginBottom: "8px", fontFamily: "sans-serif", fontWeight: 600 }}>✦ Nuevo · Match Cósmico</p>
            <h3 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(18px, 3vw, 26px)", fontWeight: 400, color: "#E8E0FF", marginBottom: "8px", lineHeight: 1.3 }}>
              ¿No sabes cuál elegir?<br />
              <span style={{ background: "linear-gradient(135deg, #A06CFF, #C470FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Encuentra tu árbol del alma ✦
              </span>
            </h3>
            <p style={{ fontSize: "14px", fontWeight: 300, color: "rgba(232,224,255,0.55)", fontFamily: "sans-serif", lineHeight: 1.6, maxWidth: 400 }}>
              Responde 7 preguntas y las estrellas revelarán qué bonsái está alineado con tu energía zodiacal.
            </p>
          </div>
          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "16px", flexShrink: 0 }}>
            <div style={{ display: "flex", gap: "12px" }}>
              {[["✨", "7 preguntas"], ["🌌", "Zodiacal"], ["🌳", "Top 3"]].map(([ico, lbl]) => (
                <div key={lbl} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "18px" }}>{ico}</div>
                  <p style={{ fontSize: "10px", color: "rgba(232,224,255,0.4)", fontFamily: "sans-serif", letterSpacing: 0.5, marginTop: 2 }}>{lbl}</p>
                </div>
              ))}
            </div>
            <button style={{ background: "linear-gradient(135deg, #6A3FFF, #A06CFF)", color: "white", border: "none", borderRadius: "10px", padding: "12px 28px", fontSize: "14px", fontWeight: 600, fontFamily: "sans-serif", cursor: "pointer", letterSpacing: "0.5px", whiteSpace: "nowrap", boxShadow: "0 4px 20px rgba(106,63,255,0.4)" }}>
              Hacer el quiz →
            </button>
          </div>
        </div>
      </div>

      {/* ===== CATÁLOGO ===== */}
      <div style={{ padding: "0 2rem 4rem" }}>
        <div style={{ marginBottom: "2rem", textAlign: "center" }}>
          <p style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#c8b560", marginBottom: "6px" }}>Colección</p>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 400, color: "#f0e8c8", margin: 0 }}>Catálogo</h1>
          <div style={{ width: "40px", height: "1px", background: "#c8b560", margin: "1rem auto 0" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.75rem" }}>
          {bonsais.map((b, idx) => (
            <BonsaiCard key={b.id} bonsai={b} idx={idx} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .bonsai-card {
          animation: fadeUp 0.5s ease forwards;
          opacity: 0;
        }
        .bonsai-card:hover .card-img {
          transform: scale(1.06);
        }
        .bonsai-card:hover .card-overlay {
          opacity: 1;
        }
        .bonsai-card:hover {
          box-shadow: 0 20px 48px rgba(0,0,0,0.5) !important;
          transform: translateY(-4px) !important;
        }
      `}</style>
    </div>
  );
}

function BonsaiCard({ bonsai: b, idx }) {
  return (
    <div 
      className="bonsai-card"
      style={{
        background: "rgba(255,255,255,0.04)",
        borderRadius: "16px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        border: "1px solid rgba(200,181,96,0.15)",
        transition: "all 0.35s ease",
        animationDelay: `${idx * 0.05}s`,
        minHeight: "400px"
      }}
    >
      {/* Imagen */}
      <div style={{ position: "relative", height: "220px", overflow: "hidden", background: "#e8e4d8" }}>
        <img
          src={b.imagen || b.image || `https://via.placeholder.com/300x200/4a9e6b/ffffff?text=${encodeURIComponent(b.nombre || 'Bonsai')}`}
          alt={b.nombre}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
            display: "block"
          }}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>

      {/* Info del bonsái */}
      <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
        {/* Nombre */}
        <h3 style={{
          fontFamily: "Georgia, serif",
          fontSize: "18px",
          fontWeight: 400,
          color: "#f0e8c8",
          margin: "0 0 4px 0",
          lineHeight: 1.3
        }}>
          {b.nombre || "Bonsái sin nombre"}
        </h3>

        {/* Edad y sustrato */}
        <p style={{ 
          fontSize: "12px", 
          color: "rgba(200,181,96,0.6)", 
          fontFamily: "sans-serif", 
          margin: 0,
          textTransform: "capitalize"
        }}>
          🌱 {b.edad || "?"} años · 🪴 {b.sustrato || "No disponible"}
        </p>

        {/* Descripción (si existe) */}
        {b.descripcion && (
          <p style={{
            fontSize: "13px",
            color: "rgba(255,255,255,0.7)",
            fontFamily: "sans-serif",
            lineHeight: 1.5,
            margin: "10px 0 0 0"
          }}>
            {b.descripcion}
          </p>
        )}

        {/* Botón Ver detalle */}
        <div style={{ marginTop: "auto", paddingTop: "15px" }}>
          <span style={{
            background: "#c8b560",
            color: "#1a2e1a",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase",
            padding: "10px 22px",
            borderRadius: "2px",
            fontFamily: "sans-serif",
            display: "inline-block",
            cursor: "pointer"
          }}>
            Ver detalle →
          </span>
        </div>
      </div>
    </div>
  );
}