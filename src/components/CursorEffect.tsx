"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useIsMobile, useReducedMotion } from "@/hooks/use-utils";
import { useTheme } from "@/components/ThemeProvider";

export default function CursorEffect() {
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();
  const { theme } = useTheme();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const targetRef = useRef({ x: -100, y: -100 });
  const currentRef = useRef({ x: -100, y: -100 });
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    if (isMobile || reducedMotion) return;

    const handleMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const handleDown = () => setClicking(true);
    const handleUp = () => setClicking(false);
    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    const animate = () => {
      const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
      currentRef.current = {
        x: lerp(currentRef.current.x, targetRef.current.x, 0.12),
        y: lerp(currentRef.current.y, targetRef.current.y, 0.12),
      };
      setPos({ ...currentRef.current });
      animRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);
    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isMobile, reducedMotion, visible]);

  if (isMobile || reducedMotion) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] mix-blend-screen"
      animate={{
        opacity: visible ? 1 : 0,
        scale: clicking ? 0.8 : 1,
      }}
      transition={{ duration: 0.15 }}
      style={{
        left: pos.x - 16,
        top: pos.y - 16,
        width: 32,
        height: 32,
      }}
      aria-hidden="true"
    >
      <div
        className="w-full h-full rounded-full"
        style={{
          background: `radial-gradient(circle, var(--cursor-glow) 0%, var(--cursor-glow-mid) 50%, transparent 70%)`,
        }}
      />
    </motion.div>
  );
}
