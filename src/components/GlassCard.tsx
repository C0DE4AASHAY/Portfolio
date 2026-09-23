"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={
        hover
          ? {
              y: -4,
              transition: { duration: 0.3, ease: "easeOut" },
            }
          : undefined
      }
      className={`group relative overflow-hidden rounded-2xl backdrop-blur-xl transition-colors duration-300 ${className}`}
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--card-border)",
      }}
    >
      {/* Top highlight edge */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent, var(--card-highlight), transparent)",
        }}
      />

      {children}
    </motion.div>
  );
}
