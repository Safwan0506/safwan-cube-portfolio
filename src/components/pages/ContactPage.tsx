"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function ContactPage({ lang }: { lang: "fr" | "en" }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:safwandjazouli@yahoo.com?subject=${encodeURIComponent(form.subject || "Contact Portfolio")}&body=${encodeURIComponent(`Nom: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.open(mailto, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="page-warm pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[1fr,1.3fr] gap-16">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full" style={{ background: "var(--accent)" }} />
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--accent)" }}>CONTACT</span>
            </div>

            <h1 className="font-serif italic text-5xl sm:text-6xl text-[#1a1a1a] leading-[1]">
              {lang === "fr" ? "Travaillons" : "Let's Work"}<br />
              <span style={{ color: "var(--accent)" }}>{lang === "fr" ? "Ensemble" : "Together"}</span>
            </h1>

            <p className="mt-6 text-[#6b6b6b] text-base leading-relaxed max-w-md">
              {lang === "fr"
                ? "Une idee de projet, une opportunite ou juste envie d'echanger ? Je reponds rapidement et avec enthousiasme."
                : "A project idea, an opportunity or just want to chat? I respond quickly and with enthusiasm."}
            </p>

            <div className="space-y-5 mt-10">
              {[
                { icon: "✉️", label: "EMAIL", value: "safwandjazouli@yahoo.com" },
                { icon: "📍", label: lang === "fr" ? "ADRESSE" : "ADDRESS", value: "Douala, Cameroun 🇨🇲" },
                { icon: "🔗", label: "LINKEDIN", value: "djazouli-safwan" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(124,106,255,0.1)" }}>
                    <span>{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#6b6b6b]">{item.label}</p>
                    <p className="text-[#1a1a1a] font-medium text-sm">{item.value}</p>
                  </div>
                </div>
              ))}

              <div className="flex gap-3 pt-4">
                <a href="https://github.com/Safwan0506" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ background: "#1a1a1a" }}>
                  <FaGithub size={16} />
                </a>
                <a href="https://linkedin.com/in/djazouli-safwan-079b23342" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ background: "var(--accent)" }}>
                  <FaLinkedinIn size={16} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#6b6b6b] mb-2 block">
                    {lang === "fr" ? "NOM COMPLET" : "FULL NAME"}
                  </label>
                  <input
                    type="text" required placeholder="Jean Dupont"
                    value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-sm text-[#1a1a1a] bg-white border border-[#e0d5c5] focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[#c0b8a8]"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#6b6b6b] mb-2 block">
                    {lang === "fr" ? "ADRESSE EMAIL" : "EMAIL ADDRESS"}
                  </label>
                  <input
                    type="email" required placeholder="jean@email.com"
                    value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-sm text-[#1a1a1a] bg-white border border-[#e0d5c5] focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[#c0b8a8]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#6b6b6b] mb-2 block">
                  {lang === "fr" ? "SUJET" : "SUBJECT"}
                </label>
                <input
                  type="text" placeholder={lang === "fr" ? "Proposition de projet, stage..." : "Project proposal, internship..."}
                  value={form.subject} onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl text-sm text-[#1a1a1a] bg-white border border-[#e0d5c5] focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[#c0b8a8]"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#6b6b6b] mb-2 block">
                  MESSAGE
                </label>
                <textarea
                  required rows={5} placeholder={lang === "fr" ? "Decrivez votre projet ou votre demande en detail..." : "Describe your project or request in detail..."}
                  value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl text-sm text-[#1a1a1a] bg-white border border-[#e0d5c5] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none placeholder:text-[#c0b8a8]"
                />
              </div>

              <button type="submit" className="w-full py-3.5 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-lg transition-shadow" style={{ background: "linear-gradient(90deg, var(--gradient-1), var(--gradient-2))" }}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                {sent ? (lang === "fr" ? "Message envoye !" : "Message sent!") : (lang === "fr" ? "Envoyer le message" : "Send message")}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
