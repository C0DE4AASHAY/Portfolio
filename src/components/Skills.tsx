"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  Coffee,
  Cpu,
  Microchip,
  Code,
  Paintbrush,
  FileJson,
  Atom,
  Triangle,
} from "lucide-react";
import { GitHubIcon } from "@/components/icons/BrandIcons";
import { skills } from "@/data/site";
import type { Skill } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";

const iconMap: Record<string, React.ReactNode> = {
  terminal: <Terminal size={24} />,
  coffee: <Coffee size={24} />,
  cpu: <Cpu size={24} />,
  microchip: <Microchip size={24} />,
  code: <Code size={24} />,
  paintbrush: <Paintbrush size={24} />,
  "file-json": <FileJson size={24} />,
  atom: <Atom size={24} />,
  triangle: <Triangle size={24} />,
  github: <GitHubIcon size={24} />,
};

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const isWhite =
    skill.color.toLowerCase() === "#ffffff" ||
    skill.color.toLowerCase() === "#fff";
  const iconColor = isWhite ? "var(--text-primary)" : skill.color;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{
        y: -6,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className="group relative"
    >
      <div
        className="relative overflow-hidden rounded-2xl p-6 transition-all duration-300 cursor-default"
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
            background: "linear-gradient(to right, transparent, var(--card-highlight-subtle), transparent)",
          }}
        />

        {/* Color glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: isWhite
              ? "radial-gradient(circle at 50% 0%, var(--card-highlight), transparent 60%)"
              : `radial-gradient(circle at 50% 0%, ${skill.color}15, transparent 60%)`,
          }}
        />

        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
          style={{
            background: "var(--icon-bg)",
            border: "1px solid var(--icon-border)",
            color: iconColor,
          }}
        >
          {iconMap[skill.icon] || <Code size={24} />}
        </div>

        {/* Name */}
        <h3 className="text-sm font-semibold text-text-primary tracking-tight">
          {skill.name}
        </h3>

        {/* Category */}
        <p className="text-xs text-text-tertiary mt-1 capitalize">
          {skill.category}
        </p>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding" aria-label="Skills">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="Skills"
          title="Technologies I Work With"
          description="From systems programming to modern web frameworks I work across the full stack."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
