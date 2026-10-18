"use client";

import { motion } from "framer-motion";

interface Project {
  room: string;
  category: string;
  title: string;
  desc: string;
  descEn: string;
  tech: string[];
  year: string;
  featured: boolean;
  url?: string;
}

const projects: Project[] = [
  {
    room: "ROOM // 01", category: "WEB", title: "SCENSORA",
    desc: "Plateforme beaute sensorielle avec design immersif & animations fluides. Experience utilisateur premium deployee sur Vercel.",
    descEn: "Sensory beauty platform with immersive design & fluid animations. Premium UX deployed on Vercel.",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"], year: "2025", featured: true,
    url: "https://scensora-site.vercel.app",
  },
  {
    room: "ROOM // 02", category: "IA", title: "TRADING PLATFORM",
    desc: "Plateforme d'analyse de marches financiers avec algorithmes predictifs IA et visualisation temps reel des donnees.",
    descEn: "Financial market analysis platform with AI predictive algorithms and real-time data visualization.",
    tech: ["Python", "TensorFlow", "React", "WebSocket"], year: "2025", featured: true,
  },
  {
    room: "ROOM // 03", category: "WEB", title: "DJAZZ JUNIOR BTP",
    desc: "Site vitrine pour entreprise BTP basee a Bangui. Design professionnel, presentation des services et realisations.",
    descEn: "Showcase website for construction company based in Bangui. Professional design, services presentation.",
    tech: ["HTML", "CSS", "JavaScript", "PHP"], year: "2024", featured: false,
  },
];

export default function ProjetsPage({ lang }: { lang: "fr" | "en" }) {
  return (
    <section className="min-h-screen" style={{ background: "var(--background)" }}>
      {/* Header bar */}
      <div className="pt-20 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 text-xs font-mono text-[var(--text-muted)]">
          <span>SAFWAN DJAZOULI // LABS</span>
          <span>ROOM // 01</span>
        </div>
      </div>

      {/* Projects */}
      <div className="space-y-0">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.15 }}
          >
            {/* Warm section */}
            <div style={{ background: "linear-gradient(135deg, #c9a96e20, #d4a95320, #c9a96e10)", borderTop: "4px solid var(--accent)", borderBottom: "4px solid var(--accent)" }}>
              <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-[auto,1fr,auto] gap-8 items-center">
                  {/* Left label */}
                  <div className="text-center lg:text-left">
                    <p className="text-xs font-bold text-[var(--text-muted)] uppercase">{project.category}</p>
                    <p className="text-[10px] text-[var(--text-muted)] mt-1">{String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</p>
                  </div>

                  {/* Image placeholder + content */}
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    {/* Image */}
                    <div className="w-full md:w-64 h-44 rounded-xl overflow-hidden shrink-0 relative" style={{ border: "3px solid rgba(255,255,255,0.1)", boxShadow: "0 8px 30px rgba(0,0,0,0.3)" }}>
                      <div className="w-full h-full bg-gradient-to-br from-[var(--accent)]/20 to-[var(--gradient-2)]/20 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white/40">{project.title.slice(0, 2)}</span>
                      </div>
                      {project.featured && (
                        <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-[9px] font-bold uppercase flex items-center gap-1.5" style={{ background: "var(--accent)", color: "white" }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-white" />
                          {lang === "fr" ? "PROJET MAJEUR" : "FEATURED WORK"}
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono" style={{ color: "var(--accent)" }}>{project.room}</span>
                        <span className="text-[10px] text-[var(--text-muted)]">·</span>
                        <span className="text-[10px] text-[var(--text-muted)] uppercase">{project.category}</span>
                      </div>

                      <h2 className="font-serif italic text-3xl md:text-4xl text-white">{project.title}</h2>

                      <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-lg">
                        {lang === "fr" ? project.desc : project.descEn}
                      </p>

                      <div className="flex items-center gap-4 flex-wrap">
                        {project.url ? (
                          <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white tracking-wider uppercase" style={{ background: "var(--accent)" }}>
                            {lang === "fr" ? "EXPLORER LA FICHE" : "VIEW CASE STUDY"} ↗
                          </a>
                        ) : (
                          <span className="text-[var(--text-muted)] text-sm italic">{lang === "fr" ? "Bientot disponible" : "Coming soon"}</span>
                        )}
                        <span className="text-xs font-mono text-[var(--text-muted)]">
                          {project.tech.join(" · ")}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: tech + year */}
                  <div className="hidden lg:block text-right text-[10px] text-[var(--text-muted)]">
                    <p className="font-mono">{project.tech[0]} · {project.year}</p>
                    <p className="mt-1">{project.year}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between py-3 text-[10px] font-mono text-[var(--text-muted)]">
              <span>SAFWAN DJAZOULI // LABS</span>
              <span>{projects[i + 1] ? `ROOM // ${String(i + 2).padStart(2, "0")}` : ""}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
