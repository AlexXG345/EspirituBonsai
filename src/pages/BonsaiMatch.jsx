import { useState, useEffect, useRef } from "react";
import { bonsais } from "../data/bonsais";
import { zodiac } from "../data/zodiac";
import { PREGUNTAS } from "../data/questions";

import "./BonsaiMatch.css";
import StarField from "../components/StarField";
import Landing from "../components/Landing";
import Analyzing from "../components/Analyzing";
import Quiz from "../components/Quiz";
import Result from "../components/Result";


function calcularMatch(bonsai, respuestas) {
  let score = 0;
  const signo = respuestas[0];
  const zodData = signo ? zodiac[signo] : null;

  if (signo && bonsai.signos.includes(signo)) score += 40;
  else if (zodData && bonsai.elemento.includes(zodData.elemento)) score += 25;
  else if (zodData && bonsai.modalidad.includes(zodData.modalidad)) score += 15;

  const elem = respuestas[1];
  if (elem && bonsai.elemento.includes(elem)) score += 15;

  const ritmo = respuestas[2];
  if (zodData) {
    if (zodData.polaridad === "+" && ["activo", "caótico"].includes(ritmo)) score += 8;
    if (zodData.polaridad === "-" && ["contemplativo", "equilibrado"].includes(ritmo)) score += 8;
  }

  const cuidado = respuestas[6];
  if (cuidado && bonsai.cuidado === cuidado) score += 7;

  const espacio = respuestas[3];
  if (espacio === "ambos" || (espacio && bonsai.espacio.includes(espacio))) score += 10;

  const exp = respuestas[4];
  const diffMap = { principiante: 0, intermedio: 1, avanzado: 2 };
  const expLevels = { principiante: 0, intermedio: 1, avanzado: 2 };
  if (exp && diffMap[bonsai.dificultad] !== undefined) {
    const diff = Math.abs(diffMap[bonsai.dificultad] - expLevels[exp]);
    score += diff === 0 ? 12 : diff === 1 ? 6 : 2;
  }

  const prop = respuestas[5];
  if (prop && bonsai.proposito.includes(prop)) score += 8;

  return Math.min(score, 99);
}


export default function EncuentraTuBonsai() {
  const [step, setStep] = useState("landing"); 
  const [preguntaIdx, setPreguntaIdx] = useState(0);
  const [respuestas, setRespuestas] = useState({});
  const [resultados, setResultados] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [analyzeProgress, setAnalyzeProgress] = useState(0);

  const pregunta = PREGUNTAS[preguntaIdx];

  const handleRespuesta = (valor) => {
    if (animating) return;
    setSelectedCard(valor);
    setAnimating(true);
    setTimeout(() => {
      const nuevas = { ...respuestas, [preguntaIdx]: valor };
      setRespuestas(nuevas);
      if (preguntaIdx < PREGUNTAS.length - 1) {
        setPreguntaIdx(i => i + 1);
        setSelectedCard(null);
        setAnimating(false);
      } else {
        setStep("analyzing");
        setAnimating(false);
        let p = 0;
        const interval = setInterval(() => {
          p += Math.random() * 12 + 3;
          if (p >= 100) {
            p = 100;
            clearInterval(interval);
            const scored = bonsais.map(b => ({ ...b, match: calcularMatch(b, nuevas) }))
              .sort((a, b) => b.match - a.match).slice(0, 3);
            setResultados(scored);
            setTimeout(() => setStep("result"), 600);
          }
          setAnalyzeProgress(Math.min(p, 100));
        }, 180);
      }
    }, 380);
  };

  const handleReset = () => {
    setStep("landing"); setPreguntaIdx(0); setRespuestas({});
    setResultados([]); setSelectedCard(null); setAnalyzeProgress(0);
  };

  const signoData = respuestas[0] ? zodiac[respuestas[0]] : null;

  if (step === "landing") return (
    <Landing setStep={setStep} />
  );

  if (step === "analyzing") return (
    <Analyzing progress={analyzeProgress} signoData={signoData} />
  );
  if (step === "quiz") return (
    <Quiz pregunta={pregunta} preguntaIdx={preguntaIdx} selectedCard={selectedCard} handleRespuesta={handleRespuesta} handleReset={handleReset} />
  );

  if (step === "result") return (
    <Result resultados={resultados} signoData={signoData} handleReset={handleReset} />
  );

  return null;
}