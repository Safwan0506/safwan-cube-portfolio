"use client";

import { motion } from "framer-motion";

const skills = {
  frontend: [
    { name: "React JS", pct: 85 },
    { name: "Next.js", pct: 80 },
    { name: "HTML / CSS", pct: 90 },
    { name: "JavaScript", pct: 85 },
    { name: "Tailwind CSS", pct: 82 },
  ],
  backend: [
    { name: "Node.js", pct: 78 },
    { name: "PHP / Laravel", pct: 70 },
    { name: "Java / Spring Boot", pct: 72 },
    { name: "Python", pct: 80 },
    { name: "Express.js", pct: 75 },
  ],
};

const formations = [
  { period: "2026 – 2027", label: "En cours", school: "KEYCE Informatique", desc: "Licence 3 IA & Big Data. Machine Learning, Deep Learning, traitement de donnees massives.", descEn: "Bachelor 3 AI & Big Data. Machine Learning, Deep Learning, massive data processing.", tags: ["Python", "TensorFlow", "PyTorch"] },
  { period: "2025 – 2026", label: "En cours", school: "KEYCE Informatique", desc: "Bachelor 2 Informatique — Tronc Commun. Algorithmique avancee, POO, web & mobile, bases de donnees.", descEn: "Bachelor 2 CS — Common Core. Advanced algorithms, OOP, web & mobile, databases.", tags: ["React JS", "Next.js", "Node.js", "PostgreSQL"] },
  { period: "2024 – 2025", school: "KEYCE Informatique", desc: "1ere annee Tronc Commun. Initiation developpement, algorithmique, C/C++.", descEn: "Year 1 Common Core. Introduction to development, algorithms, C/C++.", tags: ["C++", "HTML", "CSS"] },
  { period: "2024", label: "Stage", school: "Djazz Junior BTP, Bangui", desc: "Developpement site web entreprise. Gestion de projet, relation client.", descEn: "Company website development. Project management, client relations.", tags: ["HTML", "CSS", "JavaScript", "PHP"] },
  { period: "2022 – 2023", label: "Projets", school: "Double Baccalaureat", desc: "Obtention simultanee de 2 baccalaureats — Tchad & Cameroun.", descEn: "Simultaneous completion of 2 high school diplomas — Chad & Cameroon.", tags: [] },
];

const interets = [
  { icon: "🏀", label: "Basketball & Sport", labelEn: "Basketball & Sport" },
  { icon: "🎬", label: "Cinema & Veille Tech", labelEn: "Cinema & Tech Watch" },
  { icon: "📱", label: "Developpement Mobile", labelEn: "Mobile Development" },
  { icon: "🤖", label: "Intelligence Artificielle", labelEn: "Artificial Intelligence" },
];

function SkillBar({ name, pct, delay }: { name: string; pct: number; delay: number }) {
  return (
    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay }} className="flex items-center gap-3">
      <span className="text-sm text-[#1a1a1a] w-28 shrink-0">{name}</span>
      <div className="flex-1 h-[3px] bg-[#e0d5c5] rounded-full overflow-hidden">
        <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 1, delay: delay + 0.2 }} className="h-full rounded-full" style={{ background: "linear-gradient(90deg, var(--gradient-1), var(--gradient-2))" }} />
      </div>
      <span className="text-xs font-semibold" style={{ color: "var(--accent)" }}>{pct}%</span>
    </motion.div>
  );
}

export default function AProposPage({ lang }: { lang: "fr" | "en" }) {
  return (
    <section className="page-warm pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <div className="grid lg:grid-cols-[1fr,auto] gap-12 items-start mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-serif italic text-5xl sm:text-6xl md:text-7xl text-[#1a1a1a] leading-[0.95]">
              {lang === "fr" ? "Bonjour," : "Hello,"}<br />
              <span style={{ color: "var(--accent)" }}>{lang === "fr" ? "je suis Safwan !" : "I'm Safwan!"}</span>
            </h1>
            <p className="mt-6 text-[#6b6b6b] text-base leading-relaxed max-w-2xl">
              {lang === "fr"
                ? "Je suis DJAZOULI SAFWAN, etudiant en 3eme annee specialite IA & Big Data a KEYCE Informatique, Douala, Cameroun. Passionne par l'ecosysteme web & mobile full-stack, je concois des solutions modernes alliant haute performance et design soigne. Mon parcours s'enrichit de stages formateurs, de projets ambitieux et d'un voyage a travers 3 pays d'Afrique, qui m'a forge une perspective unique sur l'innovation technologique au service du continent."
                : "I am DJAZOULI SAFWAN, a 3rd year student specializing in AI & Big Data at KEYCE Informatique, Douala, Cameroon. Passionate about the full-stack web & mobile ecosystem, I design modern solutions combining high performance and polished design. My journey spans 3 African countries, giving me a unique perspective on technological innovation."}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {["React JS", "Node.js", "Next.js", "Python", "Java", "Spring Boot", "TensorFlow", "TypeScript", "MongoDB"].map(t => (
                <span key={t} className="px-3 py-1.5 rounded-full text-xs font-medium" style={{ background: "rgba(124,106,255,0.08)", color: "var(--accent)", border: "1px solid rgba(124,106,255,0.15)" }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Photo + badges */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="hidden lg:block relative">
            <div className="w-52 h-60 rounded-xl overflow-hidden" style={{ border: "2px solid rgba(124,106,255,0.15)" }}>
              <div className="w-full h-full bg-gradient-to-b from-[var(--accent)]/10 to-[var(--gradient-2)]/10 flex items-center justify-center">
                <span className="text-4xl font-bold" style={{ color: "var(--accent)" }}>SD</span>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 px-3 py-1 rounded-full text-[10px] font-bold text-white" style={{ background: "var(--accent)" }}>
              Licence 3 · 2026-27
            </div>
            <div className="absolute -bottom-2 -left-2 px-3 py-1 rounded-full text-[10px] font-medium bg-[#1a1a1a] text-white">
              Tchadien 🇹🇩
            </div>

            {/* Contact card */}
            <div className="mt-6 p-4 rounded-xl" style={{ background: "rgba(26,26,26,0.95)", border: "1px solid rgba(124,106,255,0.15)" }}>
              <h3 className="font-serif italic text-white text-base mb-3" style={{ color: "var(--accent)" }}>◆ Contact</h3>
              <div className="space-y-2 text-xs text-white/60">
                <p>📍 Douala, Cameroun</p>
                <p>✉️ safwandjazouli@yahoo.com</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { v: "5+", l: lang === "fr" ? "PROJETS REALISES" : "PROJECTS" },
            { v: "1", l: lang === "fr" ? "MOIS DE STAGE" : "MONTHS INTERNSHIP" },
            { v: "3", l: lang === "fr" ? "LANGUES PARLEES" : "LANGUAGES" },
            { v: "10+", l: lang === "fr" ? "TECHNOLOGIES MAITRISEES" : "TECHNOLOGIES" },
          ].map((s, i) => (
            <div key={i}>
              <p className="font-serif italic text-4xl" style={{ color: "var(--accent)" }}>{s.v}</p>
              <p className="text-[10px] text-[#6b6b6b] uppercase tracking-wider mt-1 font-semibold">{s.l}</p>
            </div>
          ))}
        </motion.div>

        {/* Formation + Skills side by side */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Formation */}
          <div>
            <h2 className="font-serif italic text-3xl text-[#1a1a1a] flex items-center gap-2 mb-8">
              <span style={{ color: "var(--accent)" }}>◆</span> {lang === "fr" ? "Formation" : "Education"}
            </h2>
            <div className="space-y-6 relative">
              <div className="absolute left-3 top-2 bottom-0 w-px" style={{ background: "rgba(124,106,255,0.15)" }} />
              {formations.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.1 }} className="pl-10 relative">
                  <div className="absolute left-1.5 top-1.5 w-3 h-3 rotate-45" style={{ border: "2px solid var(--accent)", background: f.label ? "var(--accent)" : "var(--page-warm)" }} />
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold" style={{ color: "var(--accent)" }}>{f.period}</span>
                    {f.label && <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase" style={{ background: "rgba(124,106,255,0.1)", color: "var(--accent)" }}>{f.label}</span>}
                  </div>
                  <h3 className="text-[#1a1a1a] font-semibold">{f.school}</h3>
                  <p className="text-sm italic text-[#6b6b6b] mt-1">{lang === "fr" ? f.desc : (f.descEn || f.desc)}</p>
                  {f.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {f.tags.map(t => <span key={t} className="px-2 py-0.5 rounded-full text-[10px] font-medium text-white" style={{ background: "#1a1a1a" }}>{t}</span>)}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="font-serif italic text-3xl text-[#1a1a1a] flex items-center gap-2 mb-8">
              <span style={{ color: "var(--accent)" }}>◆</span> {lang === "fr" ? "Competences Techniques" : "Technical Skills"}
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#6b6b6b] mb-4">FRONTEND</h3>
                <div className="space-y-3">
                  {skills.frontend.map((s, i) => <SkillBar key={s.name} name={s.name} pct={s.pct} delay={0.5 + i * 0.08} />)}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#6b6b6b] mb-4">BACKEND & BD</h3>
                <div className="space-y-3">
                  {skills.backend.map((s, i) => <SkillBar key={s.name} name={s.name} pct={s.pct} delay={0.8 + i * 0.08} />)}
                </div>
              </div>
            </div>

            {/* Centres d'intérêt */}
            <div className="mt-12">
              <h2 className="font-serif italic text-2xl text-[#1a1a1a] flex items-center gap-2 mb-6">
                <span style={{ color: "var(--accent)" }}>◆</span> {lang === "fr" ? "Centres d'Interet" : "Interests"}
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {interets.map((c, i) => (
                  <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ border: "1px solid #e0d5c5" }}>
                    <span className="text-lg">{c.icon}</span>
                    <span className="text-sm text-[#1a1a1a]">{lang === "fr" ? c.label : c.labelEn}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
