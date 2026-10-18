"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import LoadingScreen from "@/components/ui/LoadingScreen";
import Navbar from "@/components/ui/Navbar";
import Orion from "@/components/chatbot/Orion";
import StarsBackground from "@/components/ui/StarsBackground";

const CubeView = dynamic(() => import("@/components/cube/CubeView"), { ssr: false });
const AccueilPage = dynamic(() => import("@/components/pages/AccueilPage"));
const AProposPage = dynamic(() => import("@/components/pages/AProposPage"));
const ProjetsPage = dynamic(() => import("@/components/pages/ProjetsPage"));
const ContactPage = dynamic(() => import("@/components/pages/ContactPage"));

export type PageId = "cube" | "accueil" | "apropos" | "projets" | "contact";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<PageId>("cube");
  const [lang, setLang] = useState<"fr" | "en">("fr");

  const navigate = useCallback((page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0 });
  }, []);

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case "accueil": return <AccueilPage lang={lang} />;
      case "apropos": return <AProposPage lang={lang} />;
      case "projets": return <ProjetsPage lang={lang} />;
      case "contact": return <ContactPage lang={lang} />;
      default: return null;
    }
  };

  return (
    <div className="relative min-h-screen">
      <StarsBackground />
      <Navbar currentPage={currentPage} onNavigate={navigate} lang={lang} onLangToggle={() => setLang(l => l === "fr" ? "en" : "fr")} />
      <Orion currentPage={currentPage} onNavigate={navigate} lang={lang} />

      <AnimatePresence mode="wait">
        {currentPage === "cube" ? (
          <motion.div
            key="cube"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 pt-16"
          >
            <CubeView onNavigate={navigate} activeFace={currentPage} lang={lang} />
          </motion.div>
        ) : (
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative z-10"
          >
            {renderPage()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
