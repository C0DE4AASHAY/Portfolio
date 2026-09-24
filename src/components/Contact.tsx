"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { GitHubIcon, LinkedInIcon, DiscordIcon, InstagramIcon } from "@/components/icons/BrandIcons";
import MagneticButton from "@/components/MagneticButton";

const socials = [
  {
    label: "GitHub",
    href: siteConfig.socials.github,
    icon: <GitHubIcon size={20} />,
  },
  {
    label: "LinkedIn",
    href: siteConfig.socials.linkedin,
    icon: <LinkedInIcon size={20} />,
  },
  {
    label: "Discord",
    href: siteConfig.socials.discord,
    icon: <DiscordIcon size={20} />,
  },
  {
    label: "Instagram",
    href: siteConfig.socials.instagram,
    icon: <InstagramIcon size={20} />,
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const handleGetInTouch = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      e.preventDefault();
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(siteConfig.email)}`,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <section id="contact" className="section-padding" aria-label="Contact">
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-accent mb-4"
        >
          Contact
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary"
        >
          Have an idea?
          <br />
          <span className="gradient-text">Let&apos;s build it.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-text-secondary text-base md:text-lg leading-relaxed"
        >
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to build something great.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8"
        >
          <MagneticButton>
            <a
              href={`mailto:${siteConfig.email}`}
              onClick={handleGetInTouch}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-colors duration-300"
              style={{
                background: "var(--btn-primary-bg)",
                color: "var(--btn-primary-text)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--btn-primary-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--btn-primary-bg)";
              }}
            >
              Get in Touch
              <ArrowUpRight size={16} />
            </a>
          </MagneticButton>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex justify-center gap-3"
        >
          {socials.map((social) => (
            <MagneticButton key={social.label} strength={0.2}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center text-text-secondary hover:text-text-primary transition-all duration-300"
                style={{
                  background: "var(--social-bg)",
                  border: "1px solid var(--social-border)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--social-hover-bg)";
                  e.currentTarget.style.borderColor = "var(--social-hover-border)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--social-bg)";
                  e.currentTarget.style.borderColor = "var(--social-border)";
                }}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            </MagneticButton>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
