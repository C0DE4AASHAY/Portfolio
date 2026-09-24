"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { User } from "lucide-react";
import { siteConfig, aboutText } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [imageError, setImageError] = useState(false);

  const showAvatar = Boolean(siteConfig.avatar) && !imageError;

  return (
    <section id="about" className="section-padding" aria-label="About">
      <div className="max-w-5xl mx-auto">
        <SectionHeading label="About" title="Who I Am" />

        <div ref={ref} className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
          {/* Left — Avatar/Photo card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-2 flex justify-center"
          >
            <div
              className="group relative w-52 h-52 md:w-60 md:h-60 rounded-3xl overflow-hidden flex items-center justify-center transition-all duration-300 hover:shadow-xl"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to bottom right, var(--accent-icon-bg), transparent, transparent)",
                }}
              />

              {showAvatar ? (
                <>
                  <Image
                    src={siteConfig.avatar}
                    alt={siteConfig.name}
                    fill
                    sizes="(max-width: 768px) 208px, 240px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={() => setImageError(true)}
                    priority
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, transparent 45%)",
                    }}
                  />
                  <div className="absolute bottom-3 inset-x-0 text-center pointer-events-none px-3">
                    <span className="text-xs font-medium text-white/90 drop-shadow-md tracking-tight">
                      {siteConfig.name}
                    </span>
                  </div>
                </>
              ) : (
                <div className="relative flex flex-col items-center gap-3">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center"
                    style={{
                      background: "var(--icon-bg)",
                      border: "1px solid var(--icon-border)",
                    }}
                  >
                    <User size={32} className="text-text-secondary" />
                  </div>
                  <span className="text-sm font-medium text-text-secondary tracking-tight">
                    {siteConfig.name}
                  </span>
                </div>
              )}

              {/* Top highlight */}
              <div
                className="absolute inset-x-0 top-0 h-px pointer-events-none z-10"
                style={{
                  background: "linear-gradient(to right, transparent, var(--card-highlight), transparent)",
                }}
              />
            </div>
          </motion.div>

          {/* Right — Text */}
          <div className="md:col-span-3 space-y-6">
            {aboutText.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                className="text-text-secondary text-base md:text-lg leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-8 pt-4"
            >
              {[
                { value: "10+", label: "Technologies" },
                { value: "∞", label: "Curiosity" },
                { value: "24/7", label: "Building" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-text-primary tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-text-tertiary mt-1 tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
