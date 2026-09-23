"use client";

import { useState, useEffect, useCallback, useRef } from "react";

// ── Mouse position with lerped smoothing ──────────────────────
interface MousePos {
  x: number;
  y: number;
}

export function useMouse() {
  const [pos, setPos] = useState<MousePos>({ x: 0, y: 0 });
  const [smoothPos, setSmoothPos] = useState<MousePos>({ x: 0, y: 0 });
  const animRef = useRef<number | null>(null);
  const posRef = useRef<MousePos>({ x: 0, y: 0 });
  const smoothRef = useRef<MousePos>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      smoothRef.current = {
        x: lerp(smoothRef.current.x, posRef.current.x, 0.08),
        y: lerp(smoothRef.current.y, posRef.current.y, 0.08),
      };
      setSmoothPos({ ...smoothRef.current });
      animRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return { pos, smoothPos };
}

// ── Scroll position ───────────────────────────────────────────
export function useScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handle = () => {
      setScrollY(window.scrollY);
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? window.scrollY / docHeight : 0);
    };
    window.addEventListener("scroll", handle, { passive: true });
    handle();
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return { scrollY, scrollProgress };
}

// ── Is mobile device ──────────────────────────────────────────
export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isMobile;
}

// ── Intersection observer for scroll reveal ───────────────────
export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

// ── Active section tracking ───────────────────────────────────
export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}

// ── Prefers reduced motion ────────────────────────────────────
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}

// ── Magnetic element (for buttons) ────────────────────────────
export function useMagnetic(strength = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      setOffset({
        x: (e.clientX - cx) * strength,
        y: (e.clientY - cy) * strength,
      });
    },
    [strength]
  );

  const handleLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 });
  }, []);

  return { ref, offset, handleMove, handleLeave };
}
