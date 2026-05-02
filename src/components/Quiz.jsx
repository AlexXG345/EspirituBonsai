import StarField from "./StarField";
import '../pages/BonsaiMatch.css';
import { PREGUNTAS } from "../data/questions";

export default function Quiz({ pregunta, preguntaIdx, selectedCard, handleRespuesta, handleReset }) {
    return (
        <div className="quiz-wrap">
            <StarField />
            <div className="nebula" style={{ width: 500, height: 500, top: -100, right: -150, background: "radial-gradient(circle, #2A0E80, transparent)" }} />

            <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 680, padding: "32px 24px" }}>
                {/* Header */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
                    <button className="btn-ghost" style={{ padding: "8px 16px", fontSize: 13 }} onClick={handleReset}>← Volver</button>
                    <div style={{ textAlign: "center" }}>
                        <p style={{ fontSize: 12, color: "rgba(232,224,255,0.4)", letterSpacing: 2, textTransform: "uppercase" }}>
                            {preguntaIdx + 1} de {PREGUNTAS.length}
                        </p>
                    </div>
                    <div style={{ width: 80 }} />
                </div>

                {/* Progress */}
                <div className="progress-bar" style={{ marginBottom: 40 }}>
                    <div className="progress-fill" style={{ width: `${((preguntaIdx) / PREGUNTAS.length) * 100}%` }} />
                </div>

                {/* Pregunta */}
                <div className="fade-up" key={preguntaIdx}>
                    <h2 className="title-font" style={{ fontSize: "clamp(20px, 4vw, 28px)", color: "#E8E0FF", marginBottom: 10, textAlign: "center" }}>
                        {pregunta.titulo}
                    </h2>
                    <p style={{ textAlign: "center", color: "rgba(232,224,255,0.5)", fontSize: 14, marginBottom: 32 }}>
                        {pregunta.subtitulo}
                    </p>

                    {/* Grid zodiacal */}
                    {pregunta.tipo === "grid-zodiac" && (
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
                            {pregunta.opciones.map(op => (
                                <button key={op.valor} className={`zodiac-btn ${selectedCard === op.valor ? "selected" : ""}`}
                                    onClick={() => handleRespuesta(op.valor)}>
                                    <span style={{ fontSize: 24 }}>{op.emoji}</span>
                                    <span style={{ fontSize: 12, color: "rgba(232,224,255,0.8)", fontWeight: 500 }}>{op.label}</span>
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Cards normales */}
                    {pregunta.tipo === "cards" && (
                        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                            {pregunta.opciones.map(op => (
                                <button key={op.valor} className={`card-option ${selectedCard === op.valor ? "selected" : ""}`}
                                    onClick={() => handleRespuesta(op.valor)}
                                    style={{ width: "100%", textAlign: "left", display: "flex", alignItems: "center", gap: 16, border: "none" }}>
                                    <span style={{ fontSize: 28, minWidth: 40, textAlign: "center" }}>{op.emoji}</span>
                                    <div>
                                        <p style={{ fontWeight: 600, fontSize: 16, color: "#E8E0FF", marginBottom: 2 }}>{op.label}</p>
                                        <p style={{ fontSize: 13, color: "rgba(232,224,255,0.5)" }}>{op.desc}</p>
                                    </div>
                                    <span style={{ marginLeft: "auto", color: "rgba(160,130,255,0.4)", fontSize: 20 }}>›</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Indicadores */}
                <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 40 }}>
                    {PREGUNTAS.map((_, i) => (
                        <div key={i} style={{
                            width: i === preguntaIdx ? 20 : 6, height: 6, borderRadius: 3,
                            background: i < preguntaIdx ? "#6A3FFF" : i === preguntaIdx ? "#A06CFF" : "rgba(255,255,255,0.12)",
                            transition: "all 0.3s"
                        }} />
                    ))}
                </div>
            </div>
        </div>
    );
}