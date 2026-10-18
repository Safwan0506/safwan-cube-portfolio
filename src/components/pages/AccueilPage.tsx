"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function AccueilPage({ lang }: { lang: "fr" | "en" }) {
  return (
    <section className="min-h-screen relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0a0a12 0%, #12101e 50%, #0a0a12 100%)" }}>
      {/* Giant text background */}
      <div className="absolute inset-0 flex items-center justify-end pr-10 pointer-events-none overflow-hidden">
        <div className="text-right select-none">
          <p className="font-serif italic text-[8rem] sm:text-[12rem] md:text-[16rem] leading-[0.85] font-bold gradient-text opacity-10">
            PORTFOLIO
          </p>
          <p className="font-serif text-[3rem] sm:text-[5rem] md:text-[7rem] leading-[0.9] text-white/[0.03] font-bold tracking-wide">
            DJAZOULI
          </p>
          <p className="font-serif text-[3rem] sm:text-[5rem] md:text-[7rem] leading-[0.9] text-white/[0.03] font-bold tracking-wide">
            SAFWAN
          </p>
        </div>
      </div>

      {/* Decorative stars */}
      {[
        { top: "12%", left: "8%", size: 12, delay: 0 },
        { top: "15%", right: "35%", size: 14, delay: 0.5 },
        { top: "8%", right: "20%", size: 10, delay: 1 },
        { bottom: "30%", left: "40%", size: 8, delay: 1.5 },
        { bottom: "20%", right: "15%", size: 12, delay: 2 },
      ].map((star, i) => (
        <motion.div
          key={i}
          className="absolute text-[var(--accent)]"
          style={{ top: star.top, left: star.left, right: star.right, bottom: star.bottom, fontSize: star.size }}
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: star.delay }}
        >
          ✦
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 min-h-[80vh]">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="shrink-0"
          >
            <div className="w-52 h-64 md:w-60 md:h-72 rounded-xl overflow-hidden relative" style={{ border: "2px solid rgba(124,106,255,0.2)", boxShadow: "0 0 40px rgba(124,106,255,0.1)" }}>
              <div className="w-full h-full bg-gradient-to-b from-[var(--accent)]/10 to-[var(--gradient-2)]/10 flex items-center justify-center">
                <span className="text-5xl font-bold gradient-text">SD</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-1 space-y-6"
          >
            <h1 className="text-white font-bold text-3xl md:text-4xl tracking-[0.15em] uppercase">
              SAFWAN DJAZOULI
            </h1>

            <p className="text-white/50 text-base italic font-serif leading-relaxed max-w-md">
              {lang === "fr"
                ? "« Le succes arrive lorsque l'opportunite rencontre la preparation. »"
                : "\"Success comes when opportunity meets preparation.\""}
            </p>

            <div className="flex items-center gap-2">
              <span className="text-[var(--accent)]">→</span>
              <TypeAnimation
                sequence={[
                  lang === "fr" ? "Developpeur Full-Stack & IA" : "Full-Stack & AI Developer",
                  2500,
                  lang === "fr" ? "Specialiste Machine Learning" : "Machine Learning Specialist",
                  2500,
                  lang === "fr" ? "Architecte Logiciel" : "Software Architect",
                  2500,
                ]}
                wrapper="span"
                speed={35}
                repeat={Infinity}
                className="text-white font-medium text-lg"
              />
            </div>

            <div className="flex items-center gap-4 pt-4">
              <button onClick={() => document.dispatchEvent(new CustomEvent("navigate", { detail: "projets" }))} className="px-6 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all">
                {lang === "fr" ? "Voir mes projets" : "View my projects"}
              </button>
              <button onClick={() => document.dispatchEvent(new CustomEvent("navigate", { detail: "contact" }))} className="px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--gradient-1)] to-[var(--gradient-2)] text-white text-sm font-medium hover:shadow-lg hover:shadow-[var(--accent)]/20 transition-all">
                {lang === "fr" ? "Me contacter" : "Contact me"}
              </button>
            </div>
          </motion.div>

          {/* Right: Social links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="hidden lg:flex flex-col items-end gap-4 text-sm text-white/40"
          >
            <a href="https://github.com/Safwan0506" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <FaGithub size={14} />
              <span>/Safwan0506</span>
            </a>
            <a href="https://linkedin.com/in/djazouli-safwan-079b23342" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <FaLinkedinIn size={14} />
              <span>/djazouli-safwan</span>
            </a>
            <div className="flex items-center gap-2">
              <HiMail size={14} />
              <span>safwandjazouli@yahoo.com</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-white/20 text-xs tracking-[0.2em] uppercase">
          SUIVANT ▾
        </motion.div>
      </div>
    </section>
  );
}
