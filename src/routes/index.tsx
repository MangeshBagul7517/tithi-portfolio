import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CursorGlow, GridBackground, ParticleField } from "@/components/portfolio/Background";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import {
  About,
  Certifications,
  Contact,
  Education,
  Experience,
  Projects,
  Skills,
} from "@/components/portfolio/Sections";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] grid place-content-center bg-background"
    >
      <div className="flex flex-col items-center gap-5">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-cyan-400 border-r-blue-500" />
          <div
            className="absolute inset-1 animate-spin rounded-full border-2 border-transparent border-b-purple-500"
            style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
          />
          <span className="absolute inset-0 grid place-content-center font-display text-xs font-bold gradient-text">
            TS
          </span>
        </div>
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Loading</p>
      </div>
    </motion.div>
  );
}

function Index() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <GridBackground />
      <ParticleField />
      <CursorGlow />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
