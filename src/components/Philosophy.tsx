"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  Globe,
  Bot,
  Brain,
  Sparkles,
  Package,
} from "lucide-react";
import { philosophy } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";

const iconMap: Record<string, React.ReactNode> = {
  wrench: <Wrench size={22} />,
  globe: <Globe size={22} />,
  bot: <Bot size={22} />,
  brain: <Brain size={22} />,
  sparkles: <Sparkles size={22} />,
  package: <Package size={22} />,
};

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="section-padding"
      aria-label="What I Build"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="What I Build"
          title="Things I Love Creating"
          description="I'm drawn to building things that are useful, elegant, and push boundaries."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {philosophy.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{
                y: -4,
                transition: { duration: 0.25 },
              }}
              className="group"
            >
              <div
                className="relative overflow-hidden rounded-2xl p-6 transition-all duration-300"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--card-border-hover)";
                  e.currentTarget.style.background = "var(--card-bg-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--card-border)";
                  e.currentTarget.style.background = "var(--card-bg)";
                }}
              >
                {/* Top highlight */}
                <div
                  className="absolute inset-x-0 top-0 h-px"
                  style={{
                    background: "linear-gradient(to right, transparent, var(--card-highlight-faint), transparent)",
                  }}
                />

                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-accent transition-all duration-300"
                  style={{
                    background: "var(--accent-icon-bg)",
                    border: "1px solid var(--accent-icon-border)",
                  }}
                >
                  {iconMap[item.icon] || <Sparkles size={22} />}
                </div>

                <h3 className="text-sm font-semibold text-text-primary tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm text-text-tertiary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
