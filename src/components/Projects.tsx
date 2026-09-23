"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";
import { projects } from "@/data/site";
import type { Project } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group relative"
    >
      <div
        className="relative overflow-hidden rounded-2xl transition-all duration-500"
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
          className="absolute inset-x-0 top-0 h-px z-10"
          style={{
            background: "linear-gradient(to right, transparent, var(--card-highlight-subtle), transparent)",
          }}
        />

        {/* Project image area */}
        <div
          className="relative h-48 md:h-56 overflow-hidden"
          style={{ background: "var(--surface)" }}
        >
          {/* Gradient overlay */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background: `linear-gradient(to top, var(--bg), transparent)`,
            }}
          />

          {/* Abstract pattern as image placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div
                className="w-24 h-24 rounded-2xl rotate-12 group-hover:rotate-6 transition-transform duration-700"
                style={{
                  background: "linear-gradient(135deg, var(--accent-icon-bg), var(--surface))",
                  border: "1px solid var(--card-border)",
                }}
              />
              <div
                className="absolute top-4 left-4 w-24 h-24 rounded-2xl -rotate-6 group-hover:rotate-0 transition-transform duration-700"
                style={{
                  background: "linear-gradient(135deg, var(--surface), transparent)",
                  border: "1px solid var(--card-border-hover)",
                }}
              />
            </div>
          </div>

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-4 right-4 z-20">
              <span
                className="px-3 py-1 text-[10px] font-medium tracking-wider uppercase rounded-full"
                style={{
                  background: "var(--featured-bg)",
                  color: "var(--featured-text)",
                  border: "1px solid var(--featured-border)",
                }}
              >
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-text-primary tracking-tight">
            {project.title}
          </h3>

          <p className="mt-2 text-sm text-text-secondary leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[11px] font-medium rounded-full text-text-tertiary"
                style={{
                  background: "var(--tag-bg)",
                  border: "1px solid var(--tag-border)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-5 flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-text-tertiary hover:text-text-primary transition-colors duration-300"
              aria-label={`View ${project.title} source on GitHub`}
            >
              <GitBranch size={14} />
              Source
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-text-tertiary hover:text-text-primary transition-colors duration-300"
                aria-label={`View ${project.title} live demo`}
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding" aria-label="Projects">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Projects"
          title="Selected Work"
          description="A collection of projects I've built — from developer tools to creative experiments."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
