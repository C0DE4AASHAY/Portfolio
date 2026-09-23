"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      className={`
        relative w-14 h-7 rounded-full p-1 transition-colors duration-500 ease-in-out
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
        ${isDark
          ? "bg-white/[0.08] border border-white/[0.1]"
          : "bg-black/[0.08] border border-black/[0.1]"
        }
      `}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Sliding knob */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={`
          w-5 h-5 rounded-full flex items-center justify-center
          ${isDark
            ? "bg-white/[0.15]"
            : "bg-black/[0.1] ml-auto"
          }
        `}
      >
        {/* Sun / Moon icon with crossfade */}
        <div className="relative w-3 h-3">
          {/* Moon */}
          <motion.svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute inset-0 w-full h-full"
            initial={false}
            animate={{
              opacity: isDark ? 1 : 0,
              rotate: isDark ? 0 : -90,
              scale: isDark ? 1 : 0.5,
            }}
            transition={{ duration: 0.3 }}
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </motion.svg>

          {/* Sun */}
          <motion.svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute inset-0 w-full h-full"
            initial={false}
            animate={{
              opacity: isDark ? 0 : 1,
              rotate: isDark ? 90 : 0,
              scale: isDark ? 0.5 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </motion.svg>
        </div>
      </motion.div>
    </button>
  );
}
