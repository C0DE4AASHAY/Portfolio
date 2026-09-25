"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center section-padding pt-28"
      aria-label="Hero"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs tracking-wide text-text-secondary transition-colors duration-500"
          style={{
            background: "var(--badge-bg)",
            border: "1px solid var(--badge-border)",
          }}
        >
          <span className="relative flex h-2 w-2">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ background: "var(--status-dot)" }}
            />
            <span
              className="relative inline-flex rounded-full h-2 w-2"
              style={{ background: "var(--status-dot)" }}
            />
          </span>
          Available for work
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.08] sm:leading-[1.04] py-1"
        >
          <span className="shine-wrapper">
            <span className="shine-text-base">{siteConfig.name}</span>
            <span className="shine-text-overlay" aria-hidden="true">
              {siteConfig.name}
            </span>
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-4 text-lg md:text-xl text-text-secondary font-medium tracking-tight"
        >
          {siteConfig.title}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-6 text-base md:text-lg text-text-tertiary max-w-xl mx-auto leading-relaxed"
        >
          {siteConfig.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <MagneticButton>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-colors duration-300"
              style={{
                background: "var(--btn-primary-bg)",
                color: "var(--btn-primary-text)",
              }}
            >
              View My Work
              <ArrowDown size={16} />
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                background: "var(--btn-secondary-bg)",
                border: "1px solid var(--btn-secondary-border)",
                color: "var(--btn-secondary-text)",
              }}
            >
              <Mail size={16} />
              Let&apos;s Connect
            </a>
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full flex items-start justify-center p-2"
            style={{ border: "1px solid var(--card-border)" }}
          >
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-2 rounded-full"
              style={{ background: "var(--text-tertiary)" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
