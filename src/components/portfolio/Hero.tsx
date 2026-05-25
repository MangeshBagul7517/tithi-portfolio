import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Sparkles } from "lucide-react";

const ROLES = [
  "Business Analyst",
  "Agile Specialist",
  "Web3 Product Strategist",
  "Digital Transformation Consultant",
];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % ROLES.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center px-4 pt-28 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur"
        >
          <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
          Available for senior BA & product strategy roles
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-balance font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl"
        >
          Tithi <span className="gradient-text animated-gradient">Shah</span>
        </motion.h1>

        <div className="mt-6 flex h-12 items-center text-2xl font-medium sm:h-14 sm:text-3xl md:text-4xl">
          <span className="mr-3 text-muted-foreground">I am a</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={ROLES[i]}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="gradient-text font-semibold"
            >
              {ROLES[i]}
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Business Analyst with{" "}
          <span className="text-foreground">2.9+ years of experience</span> driving SDLC
          optimization, Web3 innovation, stakeholder management, and Agile product delivery across
          SaaS, blockchain, gaming, and healthcare.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="/resume.pdf"
            download
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/30 transition hover:shadow-purple-500/50"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition hover:bg-white/10"
          >
            Contact Me
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Floating dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="pointer-events-none absolute -right-10 top-1/4 hidden w-[460px] lg:block"
          style={{ perspective: 1200 }}
        >
          <div className="glass-strong animate-float rounded-2xl p-4 shadow-2xl shadow-purple-500/20">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <span className="ml-2 text-xs text-muted-foreground">product-metrics.io</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { l: "Retention", v: "+30%", c: "from-cyan-400 to-blue-500" },
                { l: "Launch", v: "+40%", c: "from-blue-500 to-purple-500" },
                { l: "Cost", v: "-18%", c: "from-purple-500 to-pink-500" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-white/10 bg-black/30 p-3">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    {s.l}
                  </p>
                  <p className={`mt-1 bg-gradient-to-r ${s.c} bg-clip-text text-xl font-bold text-transparent`}>
                    {s.v}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-3 h-32 overflow-hidden rounded-xl border border-white/10 bg-black/40 p-3">
              <svg viewBox="0 0 300 100" className="h-full w-full">
                <defs>
                  <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0" stopColor="#22d3ee" />
                    <stop offset="0.5" stopColor="#3b82f6" />
                    <stop offset="1" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,80 C40,60 60,30 100,40 C140,50 160,80 200,55 C240,30 270,50 300,20"
                  stroke="url(#g)"
                  strokeWidth="2.5"
                  fill="none"
                />
                <path
                  d="M0,80 C40,60 60,30 100,40 C140,50 160,80 200,55 C240,30 270,50 300,20 L300,100 L0,100 Z"
                  fill="url(#g)"
                  opacity="0.15"
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
