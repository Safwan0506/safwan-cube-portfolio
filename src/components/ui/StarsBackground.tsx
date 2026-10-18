"use client";

import { useEffect, useRef } from "react";

export default function StarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationId: number;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    interface Star { x: number; y: number; size: number; opacity: number; twinkleSpeed: number; }
    interface Shooting { x: number; y: number; len: number; speed: number; opacity: number; angle: number; life: number; maxLife: number; }

    const stars: Star[] = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.3 + 0.3,
      opacity: Math.random() * 0.5 + 0.1,
      twinkleSpeed: Math.random() * 0.003 + 0.001,
    }));

    const shootings: Shooting[] = [];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const t = performance.now();

      stars.forEach(s => {
        const twinkle = Math.sin(t * s.twinkleSpeed + s.x) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 170, 255, ${s.opacity * twinkle})`;
        ctx.fill();
      });

      if (shootings.length < 2 && Math.random() < 0.006) {
        const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.5;
        shootings.push({
          x: Math.random() * canvas.width * 0.7,
          y: Math.random() * canvas.height * 0.3,
          len: 50 + Math.random() * 70,
          speed: 5 + Math.random() * 4,
          opacity: 1, angle,
          life: 0, maxLife: 35 + Math.random() * 20,
        });
      }

      for (let i = shootings.length - 1; i >= 0; i--) {
        const s = shootings[i];
        s.life++;
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.opacity = 1 - s.life / s.maxLife;
        const tx = s.x - Math.cos(s.angle) * s.len;
        const ty = s.y - Math.sin(s.angle) * s.len;
        const grad = ctx.createLinearGradient(tx, ty, s.x, s.y);
        grad.addColorStop(0, `rgba(124,106,255,0)`);
        grad.addColorStop(1, `rgba(255,255,255,${s.opacity})`);
        ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad; ctx.lineWidth = 1.5; ctx.stroke();
        if (s.life >= s.maxLife) shootings.splice(i, 1);
      }

      animationId = requestAnimationFrame(animate);
    };
    animate();
    return () => { cancelAnimationFrame(animationId); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[1]" />;
}
