"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/site";
import { useScroll, useActiveSection } from "@/hooks/use-utils";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionIds = useMemo(
    () => navLinks.map((l) => l.href.replace("#", "")),
    []
  );
  const active = useActiveSection(sectionIds);
  const scrolled = scrollY > 50;

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Fixed top-right theme toggle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="fixed top-4 right-4 z-[60]"
      >
        <div
          className="p-1.5 rounded-full"
          style={{
            background: scrolled ? "var(--nav-bg)" : "var(--nav-bg-idle)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: `1px solid ${scrolled ? "var(--nav-border)" : "var(--nav-border-idle)"}`,
            boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.1)" : "none",
            transition: "all 0.5s ease",
          }}
        >
          <ThemeToggle />
        </div>
      </motion.div>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
      >
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-500"
          style={{
            background: scrolled ? "var(--nav-bg)" : "var(--nav-bg-idle)",
            backdropFilter: scrolled ? "blur(24px)" : "blur(16px)",
            WebkitBackdropFilter: scrolled ? "blur(24px)" : "blur(16px)",
            border: `1px solid ${scrolled ? "var(--nav-border)" : "var(--nav-border-idle)"}`,
            boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.1)" : "none",
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            className="px-4 py-2 text-sm font-semibold text-text-primary tracking-tight hover:opacity-70 transition-opacity"
            aria-label="Home"
          >
            AK
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = active === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`
                    relative px-4 py-2 text-sm rounded-full transition-colors duration-300
                    ${
                      isActive
                        ? "text-text-primary"
                        : "text-text-secondary hover:text-text-primary"
                    }
                  `}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: "var(--pill-bg)" }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors rounded-full"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 backdrop-blur-xl"
              style={{ background: "rgba(0,0,0,0.6)" }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu content */}
            <motion.nav
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="absolute bottom-0 left-0 right-0 p-6 pb-10"
              aria-label="Mobile navigation"
            >
              <div className="glass-strong p-6 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.05 }}
                    className="px-4 py-3 rounded-xl text-lg transition-colors"
                    style={{
                      color:
                        active === link.href.replace("#", "")
                          ? "var(--text-primary)"
                          : "var(--text-secondary)",
                      background:
                        active === link.href.replace("#", "")
                          ? "var(--pill-bg)"
                          : "transparent",
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
