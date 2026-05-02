import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: "'Jost', sans-serif" }}>

      {/* ===== HERO ===== */}
      <section style={{ background: "linear-gradient(160deg, #1a2e1a, #2d4a2d)", color: "#e8dfc0", textAlign: "center", padding: "80px 2rem 100px" }}>
        <span style={{ border: "1px solid rgba(200,181,96,0.4)", color: "#c8b560", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", padding: "6px 18px", borderRadius: "20px", display: "inline-block", marginBottom: "2rem" }}>
          Arte vivo · Naturaleza cultivada
        </span>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(40px, 8vw, 64px)", fontWeight: 400, color: "#f0e8c8", marginBottom: "1.5rem" }}>
          Espíritu <em style={{ color: "#c8b560" }}>Bonsai</em>
        </h1>
        <p style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.8, color: "rgba(240,232,200,0.7)", maxWidth: "520px", margin: "0 auto 2.5rem" }}>
          Donde la Naturaleza se encuentra con el Arte
        </p>
        <button onClick={() => navigate("/catalogo")} style={{ background: "#c8b560", color: "#1a2e1a", fontSize: "13px", fontWeight: 500, letterSpacing: "2px", textTransform: "uppercase", padding: "14px 36px", border: "none", borderRadius: "2px", cursor: "pointer" }}>
          Ver catálogo
        </button>
      </section>

      {/* ===== QUIÉNES SOMOS ===== */}
      <section style={{ padding: "80px 2rem", maxWidth: "900px", margin: "0 auto" }}>
        <p style={{ textAlign: "center", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#c8b560" }}>Nuestra historia</p>
        <div style={{ width: "40px", height: "1px", background: "#c8b560", margin: "0.5rem auto 1rem" }} />
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "40px", fontWeight: 400, textAlign: "center", marginBottom: "1.5rem" }}>¿Quiénes somos?</h2>
        <p style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, textAlign: "center", maxWidth: "640px", margin: "0 auto" }}>
          Somos Espíritu Bonsái, una empresa que nace del amor por la naturaleza y el arte de los bonsáis, una práctica milenaria que consiste en cultivar árboles en miniatura, representando la belleza y esencia de la vida en su forma más simple.
          Nos dedicamos no solo a ofrecer bonsáis, sino también a enseñar su cuidado y a crear una conexión especial entre las personas y estas pequeñas obras vivas. Creemos que cada bonsái es único, y que más allá de ser una planta, es una experiencia que transmite tranquilidad, paciencia y equilibrio.
          En Espíritu Bonsái buscamos que cada persona descubra el valor de este arte y aprenda a cuidarlo correctamente, convirtiendo cada bonsái en un símbolo de vida, armonía y crecimiento personal.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem", marginTop: "3rem" }}>
          {[
            { icon: "🌱", titulo: "Dueña", texto: "Maria Lozano" },
            { icon: "🍃", titulo: "Dueño", texto: "Alejandro González" },
            { icon: "✦",  titulo: "Dueño", texto: "Felipe Moreno" },
          ].map((v, i) => (
            <div key={i} style={{ background: "#f9f7f2", border: "0.5px solid #e0d8c0", borderRadius: "12px", padding: "2rem 1.5rem", textAlign: "center" }}>
              <div style={{ fontSize: "28px", marginBottom: "1rem" }}>{v.icon}</div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "22px", fontWeight: 600, marginBottom: "0.75rem" }}>{v.titulo}</h3>
              <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: 1.8, color: "#666" }}>{v.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #e5e5e5", maxWidth: "900px", margin: "0 auto" }} />

      {/* ===== ¿QUÉ ES UN BONSÁI? ===== */}
      <section style={{ padding: "80px 2rem", maxWidth: "900px", margin: "0 auto" }}>
        <p style={{ textAlign: "center", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#c8b560" }}>El arte milenario</p>
        <div style={{ width: "40px", height: "1px", background: "#c8b560", margin: "0.5rem auto 1rem" }} />
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "40px", fontWeight: 400, textAlign: "center", marginBottom: "1.5rem" }}>¿Qué es un Bonsái?</h2>
        <p style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.9, textAlign: "center", maxWidth: "680px", margin: "0 auto 3rem" }}>
          El bonsái es el arte de cultivar árboles en miniatura que replican la forma y esencia de árboles en la naturaleza. Originario de China y perfeccionado en Japón, es una práctica que combina horticultura, paciencia y estética, buscando capturar la belleza del tiempo en un árbol viviente. Un bonsái no es complicado, pero sí requiere constancia y atención a los detalles. No es solo una planta, es un ser vivo que necesita equilibrio.
        Lo más importante es el riego. Un bonsái no se riega todos los días por rutina, sino cuando la tierra empieza a secarse. Hay que hacerlo bien, hasta que el agua salga por los orificios de la maceta, sin encharcarlo.
        La luz también es clave. La mayoría de los bonsáis necesitan buena iluminación natural, preferiblemente cerca de una ventana o en exteriores, pero evitando el sol muy fuerte por mucho tiempo (dependiendo de la especie).

        La poda ayuda a mantener su forma y tamaño. Se podan ramas y hojas para que el árbol crezca de manera equilibrada y conserve su estilo.
        El abono es necesario porque el bonsái tiene poca tierra. Se recomienda fertilizarlo en épocas de crecimiento (como primavera y verano) para mantenerlo sano.
        También es importante el trasplante, que se hace cada cierto tiempo para renovar la tierra y recortar raíces, permitiendo que el bonsái siga desarrollándose correctamente.
    En resumen, cuidar un bonsái es observarlo, entender lo que necesita y dedicarle tiempo. Con paciencia, se convierte en una experiencia muy especial
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
          {[
            { num: "+1000",  label: "Años de historia",       desc: "Una tradición milenaria originada en Asia." },
            { num: "100+",   label: "Estilos reconocidos",    desc: "Desde el Formal Upright hasta el Cascada." },
            { num: "∞",      label: "Años de vida",           desc: "Un bonsái bien cuidado puede vivir siglos." },
            { num: "🧘",     label: "Paz y meditación",       desc: "Cuidar un bonsái es una práctica de mindfulness." },
          ].map((stat, i) => (
            <div key={i} style={{ background: "#1a2e1a", borderRadius: "12px", padding: "1.5rem", textAlign: "center" }}>
              <div style={{ fontSize: "28px", fontFamily: "Georgia, serif", color: "#c8b560", fontWeight: 600, marginBottom: "0.5rem" }}>{stat.num}</div>
              <div style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "1px", textTransform: "uppercase", color: "#e8dfc0", marginBottom: "0.5rem" }}>{stat.label}</div>
              <p style={{ fontSize: "13px", fontWeight: 300, color: "rgba(240,232,200,0.6)", lineHeight: 1.6 }}>{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid #e5e5e5", maxWidth: "900px", margin: "0 auto" }} />

      {/* ===== MISIÓN, VISIÓN, VALORES ===== */}
      <section style={{ padding: "80px 2rem", maxWidth: "900px", margin: "0 auto" }}>
        <p style={{ textAlign: "center", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#c8b560" }}>Propósito</p>
        <div style={{ width: "40px", height: "1px", background: "#c8b560", margin: "0.5rem auto 1rem" }} />
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "40px", fontWeight: 400, textAlign: "center", marginBottom: "3rem" }}>Misión & Visión</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
          {[
            { tag: "Misión",  titulo: "Lo que hacemos hoy",     texto: "Realizamos la venta de bonsáis de la más alta calidad, brindando a nuestros clientes una experiencia única y relajante que solo Espíritu Bonsái puede ofrecer. A través de nuestros productos, inspiramos, guiamos y acompañamos a cada persona en la creación de un entorno armonioso y significativo en su día a día." },
            { tag: "Visión",  titulo: "Lo que queremos lograr", texto: "Ser una marca líder en el mundo del bonsái, reconocida por transformar la vida de las personas a través de experiencias únicas de conexión, tranquilidad y naturaleza. Aspiramos a expandir nuestra comunidad, llevando el arte del bonsái a más hogares y consolidándonos como un referente en bienestar y equilibrio." },
            { tag: "Valores", titulo: "En lo que creemos",      texto: "Creemos en el poder de la naturaleza como fuente de bienestar, equilibrio y conexión interior. Nos guiamos por la pasión por el arte del bonsái, el compromiso con la calidad y el respeto por cada detalle en nuestros productos. Valoramos la autenticidad, la tranquilidad y la experiencia única que ofrecemos a cada cliente. Fomentamos la cercanía, la confianza y la inspiración, acompañando a cada persona en su camino hacia un entorno más armonioso y significativo." },
          ].map((mv, i) => (
            <div key={i} style={{ borderLeft: "2px solid #c8b560", padding: "1.5rem 1.5rem 1.5rem 1.75rem", background: "#f9f7f2", borderRadius: "0 8px 8px 0" }}>
              <p style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", color: "#c8b560", marginBottom: "0.5rem" }}>{mv.tag}</p>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: "22px", fontWeight: 600, marginBottom: "0.75rem" }}>{mv.titulo}</h3>
              <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: 1.8, color: "#666" }}>{mv.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 🌟 BONSAI MATCH CTA ===== */}
      <section style={{
        margin: "0",
        padding: "0",
        position: "relative",
        overflow: "hidden",
        background: "#070B1A",
      }}>
        {/* Estrellas decorativas estáticas */}
        {[...Array(30)].map((_, i) => (
          <div key={i} style={{
            position: "absolute",
            width: Math.random() * 2 + 1 + "px",
            height: Math.random() * 2 + 1 + "px",
            borderRadius: "50%",
            background: `rgba(200, 180, 255, ${Math.random() * 0.6 + 0.2})`,
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            pointerEvents: "none",
          }} />
        ))}

        {/* Nebulosas */}
        <div style={{ position: "absolute", width: 500, height: 500, top: -150, left: -100, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,31,160,0.35), transparent)", filter: "blur(60px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 400, height: 400, bottom: -100, right: -80, borderRadius: "50%", background: "radial-gradient(circle, rgba(106,63,255,0.2), transparent)", filter: "blur(60px)", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1, padding: "80px 2rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          {/* Icono flotante */}
          <div style={{
            fontSize: "64px",
            marginBottom: "24px",
            animation: "float 4s ease-in-out infinite",
            display: "inline-block",
          }}>🌳</div>

          <p style={{
            fontSize: "11px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#A06CFF",
            marginBottom: "16px",
            fontWeight: 600,
            fontFamily: "'Raleway', sans-serif",
          }}>✦ Espíritu Bonsái · Match Cósmico</p>

          <h2 style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 400,
            color: "#E8E0FF",
            marginBottom: "16px",
            lineHeight: 1.2,
          }}>
            ¿Cuál es tu<br />
            <span style={{ background: "linear-gradient(135deg, #A06CFF, #C470FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              árbol del alma?
            </span>
          </h2>

          <p style={{
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "rgba(232,224,255,0.6)",
            maxWidth: "500px",
            marginBottom: "12px",
            fontFamily: "'Raleway', sans-serif",
          }}>
            Las estrellas y los árboles hablan el mismo idioma. En 7 preguntas descubrimos qué bonsái está alineado con tu energía cósmica.
          </p>

          {/* Badges informativos */}
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", marginBottom: "40px" }}>
            {[["✨", "7 preguntas"], ["🌌", "Match zodiacal"], ["🌳", "Top 3 bonsáis"]].map(([ico, txt]) => (
              <div key={txt} style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(160,108,255,0.12)",
                border: "1px solid rgba(160,108,255,0.25)",
                borderRadius: "100px",
                padding: "8px 18px",
                fontFamily: "'Raleway', sans-serif",
                fontSize: "13px",
                color: "rgba(232,224,255,0.7)",
              }}>
                <span>{ico}</span>
                <span>{txt}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate("/match")}
            style={{
              background: "linear-gradient(135deg, #6A3FFF, #A06CFF)",
              color: "white",
              border: "none",
              borderRadius: "12px",
              padding: "16px 48px",
              fontSize: "16px",
              fontWeight: 600,
              fontFamily: "'Raleway', sans-serif",
              cursor: "pointer",
              letterSpacing: "0.5px",
              boxShadow: "0 8px 32px rgba(106,63,255,0.35)",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 12px 40px rgba(106,63,255,0.5)"; }}
            onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 8px 32px rgba(106,63,255,0.35)"; }}
          >
            Descubrir mi bonsái ✦
          </button>
          <p style={{ marginTop: "14px", fontSize: "12px", color: "rgba(232,224,255,0.25)", fontFamily: "'Raleway', sans-serif" }}>
            Gratis · Sin registro · 2 minutos
          </p>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section style={{ textAlign: "center", padding: "80px 2rem", background: "#f9f7f2" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "36px", fontWeight: 400, marginBottom: "1rem", color: "#1a2e1a" }}>¿Listo para encontrar tu bonsái?</h2>
        <p style={{ fontSize: "15px", fontWeight: 300, color: "#555", marginBottom: "2rem" }}>Explora nuestra colección de árboles cultivados con dedicación y amor.</p>
        <button onClick={() => navigate("/catalogo")} style={{ border: "1px solid #c8b560", color: "#c8b560", background: "none", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", padding: "13px 32px", borderRadius: "2px", cursor: "pointer" }}>
          Explorar catálogo →
        </button>
      </section>

    </div>
  );
}