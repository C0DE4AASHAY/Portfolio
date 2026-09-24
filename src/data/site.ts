// ============================================================
// SITE DATA — Edit this file to customize your portfolio
// Replace placeholder URLs and content with your real info.
// ============================================================

export const siteConfig = {
  name: "Aashay Kashyap",
  title: "Professional Coder & Developer",
  description:
    "I build modern applications, creative tools, and digital experiences using code.",
  url: "https://aashaykashyap.dev", // Replace with your domain
  email: "kashyap.aashay123@gmail.com", // Replace with your email
  socials: {
    github: "https://github.com/C0DE4AASHAY", // Replace
    linkedin: "https://linkedin.com/in/aashaykashyap", // Replace
    twitter: "https://twitter.com/aashaykashyap", // Replace
  },
};

export const aboutText = [
  "I'm a developer who thrives at the intersection of code and creativity. I build applications that solve real problems, automate tedious workflows, and push the boundaries of what's possible on the web.",
  "From low-level systems programming in C/C++ to full-stack web applications with React and Next.js, I enjoy working across the entire spectrum. My focus is on writing clean, performant code that delivers exceptional user experiences.",
];

export interface Skill {
  name: string;
  icon: string; // lucide icon name
  category: "language" | "frontend" | "framework";
  color: string;
}

export const skills: Skill[] = [
  { name: "Python", icon: "terminal", category: "language", color: "#3776AB" },
  { name: "Java", icon: "coffee", category: "language", color: "#ED8B00" },
  { name: "C", icon: "cpu", category: "language", color: "#A8B9CC" },
  { name: "C++", icon: "microchip", category: "language", color: "#00599C" },
  { name: "HTML", icon: "code", category: "frontend", color: "#E34F26" },
  { name: "CSS", icon: "paintbrush", category: "frontend", color: "#1572B6" },
  {
    name: "JavaScript",
    icon: "file-json",
    category: "frontend",
    color: "#F7DF1E",
  },
  {
    name: "React.js",
    icon: "atom",
    category: "framework",
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: "triangle",
    category: "framework",
    color: "#ffffff",
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github: string;
  live: string;
  image: string; // path in /public/projects/
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "devflow",
    title: "Attendance System",
    description:
      "This is a Attendance System which keep tracking of the attendance of the students. using QR Code scanning.",
    longDescription:
      "This is a Attendance System which keep tracking of the attendance of the students. using QR Code scanning. and generate reports",
    technologies: ["Typescript", "CSS", "JavaScript"],
    github: "https://github.com/C0DE4AASHAY/attendance", // Replace
    live: "https://attendance-eosin-mu-88.vercel.app", // Replace
    image: "/projects/devflow.png",
    featured: true,
  },
  {
    id: "codeforge",
    title: "Brightness-controller",
    description:
      "A browser-based code editor with real-time collaboration, syntax highlighting, and AI-powered code suggestions.",
    longDescription:
      "Designed for pair programming sessions with integrated terminal and Git support.",
    technologies: ["Batchfile", "PowerShell", "Python"],
    github: "https://github.com/C0DE4AASHAY/Brightness-controller", // Replace
    live: "", // Replace
    image: "/projects/codeforge.png",
    featured: true,
  },
  {
    id: "automate-cli",
    title: "Coming Soon",
    description:
      "No Description",
    longDescription:
      "Written in Python with plugin architecture for easy extensibility.",
    technologies: ["No Info"],
    github: "", // Replace
    live: "", // Replace
    image: "/projects/automate-cli.png",
    featured: false,
  },
  {
    id: "neural-canvas",
    title: "Coming Soon",
    description:
      "No Description",
    longDescription:
      "Combines creative coding with machine learning for unique artistic output.",
    technologies: ["No Info"],
    github: "", // Replace
    live: "", // Replace
    image: "/projects/neural-canvas.png",
    featured: false,
  },
];

export interface PhilosophyItem {
  title: string;
  description: string;
  icon: string;
}

export const philosophy: PhilosophyItem[] = [
  {
    title: "Developer Tools",
    description: "CLIs, extensions, and utilities that make coding faster.",
    icon: "wrench",
  },
  {
    title: "Web Applications",
    description: "Full-stack apps with modern frameworks and clean architecture.",
    icon: "globe",
  },
  {
    title: "Automation",
    description: "Scripts and pipelines that eliminate repetitive work.",
    icon: "bot",
  },
  {
    title: "AI Projects",
    description: "Experiments with machine learning, LLMs, and intelligent systems.",
    icon: "brain",
  },
  {
    title: "Creative Experiments",
    description: "Generative art, interactive visuals, and creative coding.",
    icon: "sparkles",
  },
  {
    title: "Digital Products",
    description: "Useful tools and apps that people actually want to use.",
    icon: "package",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;
