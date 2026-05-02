import StarField from "./StarField";
import '../pages/BonsaiMatch.css';

export default function Landing({setStep}) {
    return (
        <div className="quiz-wrap" style={{ justifyContent: "center", minHeight: "100vh" }}>
            <StarField />
            <div className="nebula" style={{ width: 600, height: 600, top: -200, left: -150, background: "radial-gradient(circle, #3B1FA0, transparent)" }} />
            <div className="nebula" style={{ width: 400, height: 400, bottom: -100, right: -100, background: "radial-gradient(circle, #1A0A50, transparent)" }} />

            <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "60px 24px", maxWidth: 640 }}>
                <div style={{ marginBottom: 32, animation: "float 4s ease-in-out infinite" }}>
                    <div style={{ fontSize: 72, marginBottom: 16 }}>🌳</div>
                    <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 8, fontSize: 22 }}>
                        {["♈", "♉", "♊", "♋", "♌", "♍"].map(s => (
                            <span key={s} style={{ opacity: 0.4, color: "#A06CFF" }}>{s}</span>
                        ))}
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", gap: 16, fontSize: 22 }}>
                        {["♎", "♏", "♐", "♑", "♒", "♓"].map(s => (
                            <span key={s} style={{ opacity: 0.4, color: "#A06CFF" }}>{s}</span>
                        ))}
                    </div>
                </div>

                <p style={{ fontSize: 13, letterSpacing: 4, color: "#A06CFF", textTransform: "uppercase", marginBottom: 16, fontWeight: 600 }}>
                    ESPÍRITU BONSÁI
                </p>
                <h1 className="title-font" style={{ fontSize: "clamp(32px, 7vw, 56px)", lineHeight: 1.15, marginBottom: 20, background: "linear-gradient(135deg, #E8E0FF, #A06CFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Encuentra tu<br />Árbol del Alma
                </h1>
                <p style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(232,224,255,0.65)", marginBottom: 40, maxWidth: 440, margin: "0 auto 40px" }}>
                    Las estrellas y los árboles hablan el mismo idioma. En 7 preguntas descubriremos qué bonsái está alineado con tu energía cósmica.
                </p>

                <div style={{ display: "flex", gap: 24, justifyContent: "center", marginBottom: 40 }}>
                    {[["✨", "7 preguntas"], ["🌌", "Match zodiacal"], ["🌳", "Top 3 bonsáis"]].map(([ico, txt]) => (
                        <div key={txt} style={{ textAlign: "center" }}>
                            <div style={{ fontSize: 22, marginBottom: 4 }}>{ico}</div>
                            <p style={{ fontSize: 12, color: "rgba(232,224,255,0.45)", letterSpacing: 1 }}>{txt}</p>
                        </div>
                    ))}
                </div>

                <button className="btn-primary" style={{ fontSize: 18, padding: "16px 48px" }} onClick={() => setStep("quiz")}>
                    Descubrir mi bonsái ✦
                </button>
                <p style={{ marginTop: 16, fontSize: 12, color: "rgba(232,224,255,0.3)" }}>Gratis · Sin registro · 2 minutos</p>
            </div>
        </div>
    );
}