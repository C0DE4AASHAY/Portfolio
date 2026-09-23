"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Lazy-load heavy visual components
const Background = dynamic(() => import("@/components/Background"), {
  ssr: false,
});

function Divider() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <div
        className="h-px"
        style={{
          background: "linear-gradient(to right, transparent, var(--divider), transparent)",
        }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />

      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Philosophy />
        <Divider />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
