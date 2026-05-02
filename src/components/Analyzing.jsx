import StarField from "./StarField";
import '../pages/BonsaiMatch.css';

export default function Analyzing({analyzeProgress, signoData}) {
    return (
        <div className="quiz-wrap" style={{ justifyContent: "center" }}>
            <StarField />
            <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: 40 }}>
                <div style={{ position: "relative", width: 140, height: 140, margin: "0 auto 32px" }}>
                    <svg className="analyzing-ring" width="140" height="140" viewBox="0 0 140 140" style={{ position: "absolute", inset: 0 }}>
                        <circle cx="70" cy="70" r="60" fill="none" stroke="rgba(160,130,255,0.15)" strokeWidth="2" />
                        <circle cx="70" cy="70" r="60" fill="none" stroke="#A06CFF" strokeWidth="2"
                            strokeDasharray={`${analyzeProgress * 3.77} 377`} strokeLinecap="round" strokeDashoffset="0"
                            style={{ transformOrigin: "70px 70px" }} />
                    </svg>
                    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ fontSize: 36 }}>{signoData?.emoji || "✨"}</div>
                        <div style={{ fontSize: 14, color: "#A06CFF", fontWeight: 600, marginTop: 4 }}>{Math.round(analyzeProgress)}%</div>
                    </div>
                </div>
                <h2 className="title-font" style={{ fontSize: 24, color: "#E8E0FF", marginBottom: 12 }}>Leyendo las estrellas...</h2>
                <p style={{ color: "rgba(232,224,255,0.5)", fontSize: 15 }}>
                    {analyzeProgress < 40 ? "Analizando tu energía zodiacal..." :
                        analyzeProgress < 70 ? "Consultando la compatibilidad cósmica..." :
                            analyzeProgress < 90 ? "Seleccionando tus árboles del alma..." :
                                "¡Casi listo!"}
                </p>
                <div style={{ marginTop: 24, display: "flex", gap: 8, justifyContent: "center" }}>
                    {[0, 1, 2].map(i => (
                        <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: "#A06CFF", opacity: 0.3 + i * 0.25, animation: `pulse 1.2s ${i * 0.4}s ease-in-out infinite` }} />
                    ))}
                </div>
            </div>
        </div>
    );
}