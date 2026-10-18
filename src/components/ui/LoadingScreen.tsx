"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);
  const [text, setText] = useState("");

  const fullText = "Safwan Djazouli...";

  useEffect(() => {
    let i = 0;
    const typeTimer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeTimer);
      }
    }, 90);
    return () => clearInterval(typeTimer);
  }, []);

  useEffect(() => {
    const duration = 3000;
    const interval = 30;
    let elapsed = 0;
    const timer = setInterval(() => {
      elapsed += interval;
      const t = elapsed / duration;
      const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      setProgress(Math.min(100, eased * 100));
      if (elapsed >= duration) {
        clearInterval(timer);
        setProgress(100);
        setTimeout(() => {
          setShow(false);
          setTimeout(onComplete, 500);
        }, 400);
      }
    }, interval);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ background: "var(--background)" }}
        >
          {/* Neural pattern background */}
          <div className="absolute inset-0 opacity-[0.04]">
            <svg className="w-full h-full" viewBox="0 0 800 800" preserveAspectRatio="none">
              {Array.from({ length: 25 }).map((_, i) => {
                const x = 80 + (i % 5) * 160;
                const y = 80 + Math.floor(i / 5) * 160;
                return <circle key={i} cx={x} cy={y} r="2.5" fill="var(--accent)" />;
              })}
              {Array.from({ length: 20 }).map((_, i) => {
                const x1 = 80 + (i % 5) * 160;
                const y1 = 80 + Math.floor(i / 5) * 160;
                const x2 = 80 + ((i + 1) % 5) * 160;
                const y2 = 80 + Math.floor((i + 1) / 5) * 160;
                return <line key={`l${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--accent)" strokeWidth="0.4" opacity="0.3" />;
              })}
            </svg>
          </div>

          <div className="absolute w-[350px] h-[350px] bg-[var(--accent)] rounded-full blur-[200px] opacity-[0.06]" />

          {/* Diamond icon */}
          <motion.div
            initial={{ scale: 0, rotate: 45 }}
            animate={{ scale: 1, rotate: 45 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            className="w-8 h-8 bg-gradient-to-br from-[var(--gradient-1)] to-[var(--gradient-2)] mb-10"
            style={{ borderRadius: 3 }}
          />

          {/* Typewriter name */}
          <h1 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            {text}
            <span className="inline-block w-[2px] h-[0.75em] bg-[var(--accent)] ml-1 align-baseline" style={{ animation: "typewriter-cursor 0.8s step-end infinite" }} />
          </h1>

          {/* Progress bar */}
          <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden mt-12">
            <div className="h-full bg-gradient-to-r from-[var(--gradient-1)] to-[var(--gradient-2)] rounded-full transition-all duration-100" style={{ width: `${progress}%` }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
