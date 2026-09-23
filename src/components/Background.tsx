"use client";

import { useEffect, useRef, useCallback } from "react";
import { useIsMobile, useReducedMotion } from "@/hooks/use-utils";
import { useTheme } from "@/components/ThemeProvider";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  baseAlpha: number;
}

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const particlesRef = useRef<Particle[]>([]);
  const animRef = useRef<number | null>(null);
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();
  const { theme } = useTheme();

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);

    const count = isMobile ? 40 : 80;
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const baseAlpha = 0.08 + Math.random() * 0.15;
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: 1 + Math.random() * 1.5,
        alpha: baseAlpha,
        baseAlpha,
      });
    }
    particlesRef.current = particles;
  }, [isMobile]);

  useEffect(() => {
    if (reducedMotion) return;

    init();

    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => init();
    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouse);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Read the CSS variable for particle color
    const style = getComputedStyle(document.documentElement);
    const particleRGB = style.getPropertyValue("--particle-color").trim();
    const ambientGlow = style.getPropertyValue("--ambient-bg-glow").trim();
    const ambientGlowMid = style.getPropertyValue("--ambient-bg-glow-mid").trim();

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      particlesRef.current.forEach((p) => {
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist / 250);

        if (dist < 250 && !isMobile) {
          p.vx += dx * influence * 0.0003;
          p.vy += dy * influence * 0.0003;
          p.alpha = p.baseAlpha + influence * 0.3;
        } else {
          p.alpha += (p.baseAlpha - p.alpha) * 0.02;
        }

        p.vx *= 0.99;
        p.vy *= 0.99;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = window.innerWidth + 10;
        if (p.x > window.innerWidth + 10) p.x = -10;
        if (p.y < -10) p.y = window.innerHeight + 10;
        if (p.y > window.innerHeight + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleRGB}, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connections
      if (!isMobile) {
        const particles = particlesRef.current;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
              const alpha = (1 - dist / 120) * 0.06;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = `rgba(${particleRGB}, ${alpha})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      // Cursor glow
      if (!isMobile && mx > 0) {
        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, 300);
        gradient.addColorStop(0, ambientGlow);
        gradient.addColorStop(0.5, ambientGlowMid);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouse);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [init, isMobile, reducedMotion, theme]);

  if (reducedMotion) {
    return (
      <div
        className="fixed inset-0 -z-10 transition-colors duration-500"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, var(--ambient-glow) 0%, transparent 60%)`,
        }}
      />
    );
  }

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `radial-gradient(ellipse at 50% -20%, var(--ambient-glow) 0%, transparent 50%)`,
        }}
      />
    </>
  );
}
