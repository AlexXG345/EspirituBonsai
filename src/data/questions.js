import { zodiac } from "./zodiac";

export const PREGUNTAS = [
  {
    id: 0, titulo: "¿Cuál es tu signo zodiacal?",
    subtitulo: "Las estrellas ya saben cuál es tu árbol...",
    tipo: "grid-zodiac",
    opciones: Object.entries(zodiac).map(([k, v]) => ({ valor: k, label: v.nombre, emoji: v.emoji }))
  },
  {
    id: 1, titulo: "¿Cuál es tu elemento dominante?",
    subtitulo: "Más allá de tu signo, ¿con qué energía te identificas?",
    tipo: "cards",
    opciones: [
      { valor: "fuego", emoji: "🔥", label: "Fuego", desc: "Apasionado, dinámico, transformador" },
      { valor: "agua", emoji: "💧", label: "Agua", desc: "Intuitivo, profundo, sensible" },
      { valor: "tierra", emoji: "🌿", label: "Tierra", desc: "Estable, paciente, confiable" },
      { valor: "aire", emoji: "🌬️", label: "Aire", desc: "Curioso, libre, comunicativo" }
    ]
  },
  {
    id: 2, titulo: "¿Cuál es tu ritmo de vida?",
    subtitulo: "Tu árbol necesita un guardián que lo entienda",
    tipo: "cards",
    opciones: [
      { valor: "activo", emoji: "⚡", label: "Veloz y activo", desc: "Siempre en movimiento, buscando nuevos proyectos" },
      { valor: "contemplativo", emoji: "🌙", label: "Tranquilo y reflexivo", desc: "Valoras los momentos de silencio y calma" },
      { valor: "equilibrado", emoji: "☯️", label: "Equilibrado", desc: "Entre la acción y el descanso" },
      { valor: "caótico", emoji: "🌀", label: "Caótico con amor", desc: "La rutina no es lo tuyo, pero el cariño sí" }
    ]
  },
  {
    id: 3, titulo: "¿Dónde vivirá tu bonsái?",
    subtitulo: "El espacio define el destino de tu árbol",
    tipo: "cards",
    opciones: [
      { valor: "interior", emoji: "🏠", label: "Interior", desc: "En casa, entre mis cosas favoritas" },
      { valor: "exterior", emoji: "🌳", label: "Exterior", desc: "Al aire libre, en balcón o jardín" },
      { valor: "ambos", emoji: "✨", label: "Ambos espacios", desc: "Tengo libertad para moverlo" }
    ]
  },
  {
    id: 4, titulo: "¿Cuál es tu experiencia con plantas?",
    subtitulo: "La honestidad aquí es el primer acto de amor",
    tipo: "cards",
    opciones: [
      { valor: "principiante", emoji: "🌱", label: "Principiante", desc: "Soy nuevo en este camino verde" },
      { valor: "intermedio", emoji: "🌿", label: "Intermedio", desc: "He cuidado plantas con cierto éxito" },
      { valor: "avanzado", emoji: "🎋", label: "Avanzado", desc: "El bonsái no es mi primer árbol" }
    ]
  },
  {
    id: 5, titulo: "¿Qué buscas en tu bonsái?",
    subtitulo: "Cada árbol tiene una vocación sagrada",
    tipo: "cards",
    opciones: [
      { valor: "decoracion", emoji: "🎨", label: "Decoración", desc: "Quiero un elemento visual hermoso en mi espacio" },
      { valor: "meditacion", emoji: "🧘", label: "Meditación", desc: "Busco un compañero para la calma interior" },
      { valor: "reto", emoji: "🏔️", label: "Desafío", desc: "Quiero dominar una técnica antigua" }
    ]
  },
  {
    id: 6, titulo: "¿Cómo es tu personalidad de cuidado?",
    subtitulo: "No hay respuesta incorrecta, solo árboles distintos",
    tipo: "cards",
    opciones: [
      { valor: "constante", emoji: "🌅", label: "Constante", desc: "Riego y cuido con ritmo fijo, todos los días" },
      { valor: "olvidadizo", emoji: "🤷", label: "Olvidadizo", desc: "A veces se me olvida, no puedo mentir" },
      { valor: "metódico", emoji: "📋", label: "Metódico", desc: "Llevo registro, investigo, me preparo bien" }
    ]
  }
];