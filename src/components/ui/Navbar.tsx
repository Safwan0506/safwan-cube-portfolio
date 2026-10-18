"use client";

import { motion } from "framer-motion";
import type { PageId } from "@/app/page";

const NAV: { id: PageId; fr: string; en: string }[] = [
  { id: "accueil", fr: "Accueil", en: "Home" },
  { id: "apropos", fr: "A Propos & CV", en: "About & Resume" },
  { id: "projets", fr: "Projets", en: "Projects" },
  { id: "contact", fr: "Contact", en: "Contact" },
];

export default function Navbar({
  currentPage, onNavigate, lang, onLangToggle,
}: {
  currentPage: PageId;
  onNavigate: (p: PageId) => void;
  lang: "fr" | "en";
  onLangToggle: () => void;
}) {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50 h-16"
      style={{ background: "rgba(10,10,18,0.75)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(124,106,255,0.08)" }}
    >
      <div className="h-full max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => onNavigate("cube")} className="flex items-center gap-3 group">
          <div className="w-2 h-2 bg-gradient-to-br from-[var(--gradient-1)] to-[var(--gradient-2)] rotate-45" style={{ borderRadius: 2 }} />
          <span className="text-white font-semibold text-sm tracking-wide">Safwan Djazouli</span>
        </button>

        {/* Orbite SD button */}
        {currentPage !== "cube" && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => onNavigate("cube")}
            className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-medium hover:bg-[var(--accent)]/10 transition-all"
          >
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" /><circle cx="6" cy="6" r="1.5" fill="currentColor" /></svg>
            Orbite SD
          </motion.button>
        )}

        {/* Nav items */}
        <div className="hidden md:flex items-center gap-1">
          <div className="flex items-center gap-0.5 glass rounded-full px-1.5 py-1">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors"
              >
                {currentPage === item.id && (
                  <motion.div layoutId="pill" className="absolute inset-0 bg-gradient-to-r from-[var(--gradient-1)] to-[var(--gradient-2)] rounded-full" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                )}
                <span className={`relative z-10 ${currentPage === item.id ? "text-white" : "text-[var(--text-muted)] hover:text-white"}`}>
                  {lang === "fr" ? item.fr : item.en}
                </span>
              </button>
            ))}
          </div>

          {/* Lang toggle */}
          <button onClick={onLangToggle} className="ml-2 px-3 py-1.5 rounded-full glass text-xs font-bold text-white/70 hover:text-white transition-colors">
            {lang === "fr" ? "EN" : "FR"}
          </button>

          {/* CTA */}
          <button
            onClick={() => onNavigate("contact")}
            className="ml-2 flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[var(--gradient-1)] to-[var(--gradient-2)] text-white text-sm rounded-full font-medium hover:shadow-lg hover:shadow-[var(--accent)]/20 transition-shadow"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
            {lang === "fr" ? "Me contacter" : "Contact me"}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
