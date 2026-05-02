import StarField from "./StarField";
import '../pages/BonsaiMatch.css';

export default function Result({resultados, signoData, handleReset}) {
    return (
        <div className="quiz-wrap">
            <StarField />
            <div className="nebula" style={{ width: 700, height: 700, top: -200, left: -200, background: "radial-gradient(circle, #2A0E80, transparent)" }} />
            <div className="nebula" style={{ width: 500, height: 500, bottom: -200, right: -150, background: "radial-gradient(circle, #0E2A80, transparent)" }} />

            <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 700, padding: "40px 20px" }}>
                {/* Header resultado */}
                <div className="fade-up" style={{ textAlign: "center", marginBottom: 40 }}>
                    <p style={{ fontSize: 12, letterSpacing: 4, color: "#A06CFF", textTransform: "uppercase", marginBottom: 12 }}>
                        {signoData?.emoji} {signoData?.nombre} · {signoData?.elemento}
                    </p>
                    <h1 className="title-font" style={{ fontSize: "clamp(26px, 5vw, 40px)", color: "#E8E0FF", marginBottom: 12 }}>
                        Tus Árboles del Alma
                    </h1>
                    <p style={{ color: "rgba(232,224,255,0.5)", fontSize: 15 }}>
                        El universo ha hablado. Estos son tus 3 bonsáis con mayor afinidad cósmica.
                    </p>
                </div>

                {/* Cards resultado */}
                <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 40 }}>
                    {resultados.map((b, idx) => (
                        <div key={b.id} className={`result-card fade-up`} style={{ animationDelay: `${idx * 0.15}s` }}>
                            {/* Badge posición */}
                            <div style={{ padding: "16px 20px 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                    <span style={{ fontSize: 20 }}>{idx === 0 ? "✦" : idx === 1 ? "✧" : "·"}</span>
                                    <span style={{ fontSize: 12, color: "rgba(232,224,255,0.4)", letterSpacing: 2, textTransform: "uppercase" }}>
                                        {idx === 0 ? "Match principal" : idx === 1 ? "Alternativa ideal" : "Tercera opción"}
                                    </span>
                                </div>
                                <div className="match-badge">
                                    {b.match}% <span style={{ fontSize: 12, fontWeight: 400, opacity: 0.7 }}>match</span>
                                </div>
                            </div>

                            <div style={{ padding: "16px 20px 20px", display: "flex", gap: 20 }}>
                                {/* Imagen placeholder */}
                                <div style={{ width: 100, height: 120, borderRadius: 12, background: "rgba(106,63,255,0.15)", border: "1px solid rgba(160,130,255,0.2)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, overflow: "hidden" }}>
                                    <img src={b.image} alt={b.name} style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                        onError={e => { e.target.style.display = "none"; e.target.parentElement.innerHTML = "🌳"; }} />
                                </div>

                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <h3 className="title-font" style={{ fontSize: 20, color: "#E8E0FF", marginBottom: 4, textAlign: "justify" }}>{b.name}</h3>
                                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
                                        {b.elemento.map(el => (
                                            <span key={el} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: "rgba(160,130,255,0.15)", color: "#A06CFF", border: "1px solid rgba(160,130,255,0.3)", textTransform: "capitalize" }}>{el}</span>
                                        ))}
                                        <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: "rgba(255,255,255,0.06)", color: "rgba(232,224,255,0.5)", border: "1px solid rgba(255,255,255,0.1)" }}>
                                            {b.dificultad}
                                        </span>
                                    </div>
                                    <p style={{ fontSize: 13, color: "rgba(232,224,255,0.6)", lineHeight: 1.6, marginBottom: 14 }}>{b.descripcion}</p>

                                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                        <span style={{ fontSize: 16, fontWeight: 700, color: "#A06CFF" }}>{b.precio}</span>
                                        <a href={`/catalogo/${b.id}`}
                                            style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "linear-gradient(135deg, #6A3FFF, #A06CFF)", color: "white", border: "none", borderRadius: 8, padding: "8px 18px", fontSize: 13, fontWeight: 600, textDecoration: "none", fontFamily: "'Raleway', sans-serif", cursor: "pointer", transition: "all 0.2s" }}>
                                            Ver en catálogo →
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Barra de compatibilidad */}
                            <div style={{ padding: "0 20px 16px" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 11, color: "rgba(232,224,255,0.3)" }}>
                                    <span>Compatibilidad cósmica</span>
                                    <span>{b.match}%</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{ width: `${b.match}%`, transition: "width 1s ease" }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Resumen del usuario */}
                {signoData && (
                    <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(160,130,255,0.15)", borderRadius: 16, padding: "20px 24px", marginBottom: 32 }}>
                        <p style={{ fontSize: 12, letterSpacing: 2, color: "rgba(232,224,255,0.4)", textTransform: "uppercase", marginBottom: 12 }}>Tu perfil cósmico</p>
                        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                            {[
                                ["Signo", `${signoData.emoji} ${signoData.nombre}`],
                                ["Elemento", signoData.elemento],
                                ["Modalidad", signoData.modalidad],
                                ["Polaridad", signoData.polaridad === "+" ? "Activo +" : "Receptivo −"]
                            ].map(([k, v]) => (
                                <div key={k}>
                                    <p style={{ fontSize: 11, color: "rgba(232,224,255,0.35)", textTransform: "uppercase", letterSpacing: 1 }}>{k}</p>
                                    <p style={{ fontSize: 15, color: "#E8E0FF", fontWeight: 500, textTransform: "capitalize" }}>{v}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Acciones */}
                <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                    <button className="btn-primary" onClick={handleReset}>
                        ✦ Repetir el quiz
                    </button>
                    <a href="/catalogo" style={{ display: "inline-block", textDecoration: "none" }}>
                        <button className="btn-ghost">Ver todo el catálogo →</button>
                    </a>
                </div>

                <p style={{ textAlign: "center", marginTop: 20, fontSize: 12, color: "rgba(232,224,255,0.2)" }}>
                    ✦ ESPÍRITU BONSÁI · Arte milenario con conexión cósmica ✦
                </p>
            </div>
        </div>
    );
}