"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBrain, FaUser } from "react-icons/fa";
import type { PageId } from "@/app/page";

interface Message {
  role: "bot" | "user";
  text: string;
  typing?: boolean;
  actions?: { label: string; page: PageId }[];
  time?: string;
}

const getTime = () => {
  const d = new Date();
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
};

interface Resp { text: string; actions?: { label: string; page: PageId }[]; }

const responses: Record<string, Resp> = {
  qui: { text: "Safwan Djazouli est developpeur Full-Stack & IA, originaire du Tchad. 3eme annee KEYCE Informatique, specialite IA & Big Data. Il detient 3 baccalaureats obtenus entre la Centrafrique, le Tchad et le Cameroun.", actions: [{ label: "Ouvrir Accueil & Vision", page: "accueil" }, { label: "Voir Formations & Competences", page: "apropos" }] },
  comp: { text: "⚡ Stack de Safwan :\n• IA : TensorFlow, PyTorch, ML/DL\n• Frontend : React, Next.js, Tailwind\n• Backend : Java/Spring Boot, Node.js, Laravel\n• Langages : Python, TS, Java, C++, PHP\n• BDD : MySQL, PostgreSQL, MongoDB, Firebase", actions: [{ label: "Voir Formations & Competences", page: "apropos" }] },
  proj: { text: "📁 Projets :\n\n🟣 Scensora — Plateforme beaute sensorielle\n🔵 Trading Platform — IA analyse de marches\n🟣 Djazz Junior BTP — Site entreprise BTP", actions: [{ label: "Entrer dans la Salle des Projets", page: "projets" }] },
  contact: { text: "📬 Contacter Safwan :\n• Email : safwandjazouli@yahoo.com\n• GitHub : Safwan0506\n• LinkedIn : djazouli-safwan\n• Douala, Cameroun\n\nDisponible pour stages, freelance, collaborations.", actions: [{ label: "Ecrire un Message", page: "contact" }] },
  parcours: { text: "🎓 Parcours :\n2026-27 → Licence IA & Big Data — KEYCE\n2025-26 → 2e annee Tronc Commun\n2024-25 → 1ere annee KEYCE\n2024 → Stage Djazz Junior BTP\n2022-23 → Double Bac (Tchad + Cameroun)\n2021-22 → Bac Centrafricain", actions: [{ label: "Voir le parcours complet", page: "apropos" }] },
  cube: { text: "🔮 Le cube 3D est l'interface principale du portfolio. Chaque face represente une section. Faites tourner le cube et cliquez sur une face pour explorer.", actions: [{ label: "Retour au Cube", page: "cube" }] },
};

function getResponse(input: string): Resp {
  const l = input.toLowerCase();
  if (l.includes("safwan") || l.includes("qui") || l.includes("toi")) return responses.qui;
  if (l.includes("comp") || l.includes("skill") || l.includes("ia") || l.includes("tech") || l.includes("stack")) return responses.comp;
  if (l.includes("projet") || l.includes("scensora") || l.includes("trading")) return responses.proj;
  if (l.includes("contact") || l.includes("email") || l.includes("mail")) return responses.contact;
  if (l.includes("parcours") || l.includes("ecole") || l.includes("bac") || l.includes("keyce") || l.includes("formation")) return responses.parcours;
  if (l.includes("cube") || l.includes("3d") || l.includes("orbite")) return responses.cube;
  if (l.includes("bonjour") || l.includes("salut") || l.includes("hello")) return { text: "Salut ! 👋 Je suis Orion, l'assistant IA de Safwan. Posez-moi une question !", actions: [{ label: "Explorer le Cube", page: "cube" }] };
  return { text: "Je suis Orion, l'IA de Safwan. Demandez-moi ses competences, son parcours, ses projets ou comment le contacter.", actions: [{ label: "Voir les projets", page: "projets" }] };
}

export default function Orion({ currentPage, onNavigate, lang }: { currentPage: PageId; onNavigate: (p: PageId) => void; lang: "fr" | "en" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{
    role: "bot",
    text: "Bienvenue sur la Planete Safwan. 🧠\n\nJe suis Orion, votre assistant IA. Explorez le cube 3D ou posez-moi une question pour decouvrir l'univers de Safwan.",
    time: getTime(),
    actions: [{ label: "Ouvrir Accueil & Vision", page: "accueil" }, { label: "Voir les Projets", page: "projets" }],
  }]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const send = useCallback((text: string) => {
    const time = getTime();
    setMessages(prev => [...prev, { role: "user", text, time }, { role: "bot", text: "", typing: true }]);
    setInput("");
    setTimeout(() => {
      const r = getResponse(text);
      setMessages(prev => [...prev.filter(m => !m.typing), { role: "bot", text: r.text, time: getTime(), actions: r.actions }]);
    }, 600 + Math.random() * 800);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 left-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[520px] rounded-2xl flex flex-col overflow-hidden shadow-2xl shadow-black/50"
            style={{ background: "rgba(10,10,18,0.95)", backdropFilter: "blur(40px)", border: "1px solid rgba(124,106,255,0.12)" }}
          >
            {/* Header */}
            <div className="p-4 flex items-center gap-3 border-b border-white/[0.04]">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--gradient-1)] to-[var(--gradient-2)] flex items-center justify-center">
                <FaBrain className="text-white" size={16} />
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm flex items-center gap-2">
                  Orion
                  <span className="px-1.5 py-0.5 rounded text-[8px] font-bold bg-[var(--accent)]/20 text-[var(--accent)]">Assistant IA</span>
                </p>
                <p className="text-green-400 text-[10px] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  {lang === "fr" ? "En direct de la Planete Safwan" : "Live from Planet Safwan"}
                </p>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-white text-lg">×</button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "bot" && (
                    <div className="w-6 h-6 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <FaBrain className="text-[var(--accent)]" size={9} />
                    </div>
                  )}
                  <div className="max-w-[80%]">
                    <div className={`px-3.5 py-2.5 text-[12px] leading-relaxed ${msg.role === "user" ? "bg-gradient-to-r from-[var(--gradient-1)] to-[var(--gradient-2)] text-white rounded-2xl rounded-br-sm" : "bg-white/[0.04] border border-white/[0.06] text-white/80 rounded-2xl rounded-bl-sm"}`}>
                      {msg.typing ? (
                        <div className="flex gap-1.5 py-1">
                          {[0, 1, 2].map(n => <span key={n} className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-bounce" style={{ animationDelay: `${n * 150}ms` }} />)}
                        </div>
                      ) : (
                        <div className="whitespace-pre-line">{msg.text}</div>
                      )}
                    </div>
                    {msg.actions && msg.actions.length > 0 && !msg.typing && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {msg.actions.map((a, ai) => (
                          <button key={ai} onClick={() => onNavigate(a.page)} className="px-3 py-1.5 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[var(--accent)] text-[10px] font-medium hover:bg-[var(--accent)]/20 transition-colors">
                            {a.label} ↗
                          </button>
                        ))}
                      </div>
                    )}
                    {msg.time && !msg.typing && <p className="text-[9px] text-white/15 mt-1">{msg.time}</p>}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-6 h-6 rounded-lg bg-[var(--gradient-2)]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <FaUser className="text-[var(--gradient-2)]" size={8} />
                    </div>
                  )}
                </div>
              ))}
              <div ref={endRef} />
              {messages.length <= 2 && (
                <div className="grid grid-cols-2 gap-1.5 mt-2">
                  {[{ l: "Qui est Safwan ?", i: "🧠" }, { l: "Competences", i: "⚡" }, { l: "Projets", i: "📁" }, { l: "Parcours", i: "🎓" }, { l: "Le Cube 3D ?", i: "🔮" }, { l: "Contacter", i: "📬" }].map(q => (
                    <button key={q.l} onClick={() => send(q.l)} className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[10px] text-[var(--text-muted)] hover:text-white hover:bg-[var(--accent)]/5 transition-all text-left">
                      <span>{q.i}</span><span>{q.l}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={e => { e.preventDefault(); if (input.trim()) send(input.trim()); }} className="p-3 border-t border-white/[0.04] flex gap-2">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder={lang === "fr" ? "Posez une question a Orion..." : "Ask Orion a question..."}
                className="flex-1 bg-white/[0.03] border border-white/[0.06] rounded-xl px-3.5 py-2 text-white text-xs focus:outline-none focus:border-[var(--accent)]/30 placeholder:text-white/15"
              />
              <button type="submit" className="w-9 h-9 rounded-xl bg-gradient-to-r from-[var(--gradient-1)] to-[var(--gradient-2)] flex items-center justify-center text-white shrink-0">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Float button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-2xl shadow-2xl transition-all duration-300 ${isOpen ? "w-12 h-12 bg-white/10 border border-white/20 justify-center" : "px-4 h-12 bg-gradient-to-br from-[var(--gradient-1)] to-[var(--gradient-2)] animate-pulse-glow"}`}
      >
        {isOpen ? (
          <span className="text-white text-lg">×</span>
        ) : (
          <>
            <FaBrain className="text-white" size={16} />
            <div className="text-left hidden sm:block">
              <p className="text-white text-[10px] font-semibold leading-tight">Orion</p>
              <p className="text-white/60 text-[8px] leading-tight">{lang === "fr" ? "En ligne · Poser une question" : "Online · Ask a question"}</p>
            </div>
          </>
        )}
      </motion.button>
    </>
  );
}
