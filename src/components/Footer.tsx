"use client";

import { siteConfig } from "@/data/site";
import { GitHubIcon, InstagramIcon, LinkedInIcon, DiscordIcon } from "@/components/icons/BrandIcons";

const footerSocials = [
  { label: "GitHub", href: siteConfig.socials.github, icon: <GitHubIcon size={16} /> },
  { label: "LinkedIn", href: siteConfig.socials.linkedin, icon: <LinkedInIcon size={16} /> },
  { label: "Discord", href: siteConfig.socials.discord, icon: <DiscordIcon size={16} /> },
  { label: "Instagram", href: siteConfig.socials.instagram, icon: <InstagramIcon size={16} /> }
];

export default function Footer() {
  return (
    <footer
      className="py-8 px-6 transition-colors duration-500"
      style={{ borderTop: "1px solid var(--footer-border)" }}
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-text-tertiary">
          © 2026 {siteConfig.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {footerSocials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text-primary transition-colors duration-300"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
