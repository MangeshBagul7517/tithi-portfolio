import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Award,
  BarChart3,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  Layers,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useRef, useState } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <motion.div {...fadeUp} className="mx-auto mb-14 max-w-2xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
        <Sparkles className="h-3 w-3 text-cyan-400" />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}

/* ----------------------------- ABOUT ----------------------------- */
const STATS = [
  { v: "2.9+", l: "Years Experience", icon: Calendar },
  { v: "10+", l: "Web3 Products", icon: Layers },
  { v: "30%", l: "Retention Boost", icon: TrendingUp },
  { v: "40%", l: "Faster Launches", icon: Zap },
  { v: "18%", l: "Cost Reduction", icon: Target },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="About"
          title={
            <>
              Translating <span className="gradient-text">complex problems</span> into shipped
              outcomes
            </>
          }
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div {...fadeUp} className="glass rounded-2xl p-8">
            <p className="text-pretty leading-relaxed text-muted-foreground">
              I'm a Business Analyst who lives at the intersection of{" "}
              <span className="text-foreground">blockchain, SaaS, gaming, and healthcare</span>.
              Over the last 2.9+ years, I've owned the full Agile delivery loop — from requirement
              gathering and BRDs to user stories, UX/UI optimization, and stakeholder alignment.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              I love turning ambiguous Web3 ideas into shippable roadmaps and helping enterprise
              teams reduce friction across the SDLC. My focus is always the same: faster launches,
              cleaner processes, and product experiences that retain users.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Agile / Scrum",
                "Web3 Strategy",
                "SDLC Optimization",
                "Stakeholder Mgmt",
                "Digital Transformation",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2">
            {STATS.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition-colors hover:border-white/20"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
                <s.icon className="h-5 w-5 text-cyan-400" />
                <p className="mt-3 font-display text-3xl font-bold gradient-text">{s.v}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.l}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- SKILLS ----------------------------- */
const SKILLS = [
  {
    cat: "Business Analysis",
    icon: BarChart3,
    items: [
      { n: "Requirement Gathering", v: 95 },
      { n: "Gap Analysis", v: 90 },
      { n: "Stakeholder Mgmt", v: 92 },
      { n: "BRDs & User Stories", v: 95 },
      { n: "Workflow Optimization", v: 88 },
    ],
  },
  {
    cat: "Tools",
    icon: Layers,
    items: [
      { n: "Jira", v: 92 },
      { n: "Figma", v: 85 },
      { n: "Advanced Excel", v: 90 },
      { n: "SQL", v: 80 },
      { n: "Web3 Technologies", v: 82 },
    ],
  },
  {
    cat: "Methodologies",
    icon: Target,
    items: [
      { n: "Agile", v: 95 },
      { n: "Scrum", v: 92 },
      { n: "Kanban", v: 88 },
      { n: "SDLC", v: 90 },
      { n: "Process Modeling", v: 85 },
    ],
  },
  {
    cat: "Domains",
    icon: Building2,
    items: [
      { n: "Blockchain / Web3", v: 90 },
      { n: "SaaS", v: 88 },
      { n: "Gaming", v: 85 },
      { n: "Healthcare", v: 80 },
      { n: "E-commerce", v: 82 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Skills"
          title={
            <>
              A toolkit built for <span className="gradient-text">enterprise velocity</span>
            </>
          }
        />
        <div className="grid gap-6 md:grid-cols-2">
          {SKILLS.map((s, idx) => (
            <motion.div
              key={s.cat}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-all hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-cyan-500/0 opacity-0 transition-opacity group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-cyan-500/5 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-content-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 ring-1 ring-white/10">
                    <s.icon className="h-5 w-5 text-cyan-300" />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{s.cat}</h3>
                </div>
                <ul className="space-y-3">
                  {s.items.map((it, i) => (
                    <li key={it.n}>
                      <div className="mb-1.5 flex justify-between text-sm">
                        <span className="text-muted-foreground">{it.n}</span>
                        <span className="text-xs text-muted-foreground">{it.v}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${it.v}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.1 + i * 0.08, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- EXPERIENCE ----------------------------- */
const EXP = [
  {
    co: "Glia Tech Solutions",
    role: "Business Analyst",
    when: "Jan 2026 – Present",
    pts: [
      "Improved stakeholder communication efficiency by 25%",
      "Reduced project delivery delays by 20%",
      "Increased Agile team productivity by 15%",
    ],
  },
  {
    co: "SDLC Corp",
    role: "Business Analyst",
    when: "Sep 2024 – Dec 2025",
    pts: [
      "Optimized SDLC processes by 30%",
      "Improved onboarding time by 25%",
      "Accelerated product launches by 40%",
      "Reduced operational costs by 18%",
    ],
  },
  {
    co: "Rent-per",
    role: "Junior Business Analyst",
    when: "Oct 2023 – Aug 2024",
    pts: [
      "Improved documentation accuracy by 20%",
      "Enhanced project delivery efficiency by 15%",
      "Reduced clarification cycles by 25%",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Experience"
          title={
            <>
              A timeline of <span className="gradient-text">measurable wins</span>
            </>
          }
        />
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-400/40 via-blue-500/40 to-purple-500/40 md:left-1/2" />
          <div className="space-y-12">
            {EXP.map((e, i) => (
              <motion.div
                key={e.co}
                initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col gap-4 md:flex-row md:items-start ${
                  i % 2 ? "md:flex-row-reverse" : ""
                }`}
              >
                <span className="absolute left-4 top-2 grid h-3 w-3 -translate-x-1/2 place-content-center rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 ring-4 ring-background md:left-1/2" />
                <div className="hidden flex-1 md:block" />
                <div className="ml-10 flex-1 md:ml-0 md:px-8">
                  <div className="glass rounded-2xl p-6 transition-transform hover:-translate-y-1">
                    <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" /> {e.when}
                    </div>
                    <h3 className="font-display text-xl font-semibold">{e.role}</h3>
                    <p className="mt-0.5 text-sm text-cyan-300">{e.co}</p>
                    <ul className="mt-4 space-y-2">
                      {e.pts.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- PROJECTS ----------------------------- */
const PROJECTS = [
  {
    name: "Artyfact",
    sub: "Web3 Gaming Platform",
    tags: ["Web3", "Gaming", "Onboarding"],
    pts: ["Improved onboarding for 10K+ players", "Reduced activation time by 30%"],
    grad: "from-purple-500 to-pink-500",
  },
  {
    name: "Orange",
    sub: "VR Soccer Game",
    tags: ["VR", "Gaming", "Cross-functional"],
    pts: ["Increased player engagement by 40%", "Coordinated 8+ cross-functional teams"],
    grad: "from-orange-400 to-red-500",
  },
  {
    name: "Comuni Cart",
    sub: "E-Commerce Marketplace",
    tags: ["E-commerce", "API", "Retention"],
    pts: ["Improved retention by 25%", "Optimized API integrations"],
    grad: "from-cyan-400 to-blue-500",
  },
  {
    name: "Phlebotomist Mgmt",
    sub: "Healthcare Scheduling",
    tags: ["Healthcare", "Scheduling"],
    pts: ["Improved scheduling efficiency by 30%"],
    grad: "from-emerald-400 to-teal-500",
  },
  {
    name: "Dietician Consult",
    sub: "Consultation Platform",
    tags: ["Healthcare", "UX"],
    pts: ["Enhanced appointment flow by 20%"],
    grad: "from-blue-500 to-indigo-500",
  },
  {
    name: "RentenPe",
    sub: "Delivery App",
    tags: ["Logistics", "Tracking"],
    pts: ["Improved task tracking efficiency by 20%"],
    grad: "from-fuchsia-500 to-purple-500",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Projects"
          title={
            <>
              Selected work across <span className="gradient-text">Web3, SaaS & beyond</span>
            </>
          }
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur transition-all hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${p.grad}`}>
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 text-white">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <ExternalLink className="h-7 w-7 text-white drop-shadow" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                <p className="text-xs text-cyan-300">{p.sub}</p>
                <ul className="mt-3 space-y-1.5">
                  {p.pts.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-400" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- CERTS ----------------------------- */
const CERTS = [
  { name: "AI Business Analyst", iss: "Microsoft" },
  { name: "Certified ScrumMaster (CSM)", iss: "Scrum Alliance" },
  { name: "Project Management", iss: "Simplilearn" },
  { name: "Digital Marketing Fundamentals", iss: "IIDE" },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Certifications"
          title={
            <>
              Continuously <span className="gradient-text">leveling up</span>
            </>
          }
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CERTS.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur transition-colors hover:border-white/20"
            >
              <div className="mx-auto mb-4 grid h-12 w-12 place-content-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 ring-1 ring-white/10">
                <Award className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="font-display text-sm font-semibold">{c.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{c.iss}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- EDUCATION ----------------------------- */
export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Education"
          title={
            <>
              Engineering <span className="gradient-text">foundation</span>
            </>
          }
        />
        <motion.div
          {...fadeUp}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur"
        >
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl" />
          <div className="relative flex items-start gap-5">
            <span className="grid h-14 w-14 place-content-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 ring-1 ring-white/10">
              <GraduationCap className="h-6 w-6 text-cyan-300" />
            </span>
            <div>
              <h3 className="font-display text-xl font-semibold">
                Bachelor of Engineering — Civil Engineering
              </h3>
              <p className="mt-1 text-sm text-cyan-300">VIIT Pune</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Engineering rigor that informs how I model processes, structure requirements, and
                ship reliable digital products.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ----------------------------- CONTACT ----------------------------- */
export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Contact"
          title={
            <>
              Let's build something <span className="gradient-text">remarkable</span>
            </>
          }
          subtitle="Open to senior BA, product strategy, and Web3 consulting opportunities."
        />
        <div className="grid gap-6 lg:grid-cols-5">
          <motion.div {...fadeUp} className="glass-strong space-y-3 rounded-2xl p-6 lg:col-span-2">
            {[
              { icon: Mail, label: "Email", v: "tithi.shah@example.com", href: "mailto:tithi.shah@example.com" },
              { icon: Linkedin, label: "LinkedIn", v: "/in/tithishah", href: "https://linkedin.com" },
              { icon: Phone, label: "Phone", v: "+91 98xxx xxxxx", href: "tel:+91" },
              { icon: MapPin, label: "Location", v: "Aurangabad, Maharashtra" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition hover:border-white/15 hover:bg-white/[0.05]"
              >
                <span className="grid h-10 w-10 place-content-center rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 ring-1 ring-white/10">
                  <c.icon className="h-4 w-4 text-cyan-300" />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </p>
                  <p className="text-sm">{c.v}</p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            {...fadeUp}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="glass-strong space-y-4 rounded-2xl p-6 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" type="text" placeholder="Your name" />
              <Field label="Email" type="email" placeholder="you@company.com" />
            </div>
            <Field label="Subject" type="text" placeholder="Project, role, or opportunity" />
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                required
                rows={5}
                placeholder="Tell me a bit about what you're working on…"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none transition focus:border-purple-400/50 focus:ring-2 focus:ring-purple-500/20"
              />
            </div>
            <button
              type="submit"
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:shadow-purple-500/50"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <Send className="h-4 w-4" />
              {sent ? "Message sent!" : "Send Message"}
            </button>
          </motion.form>
        </div>

        <motion.div
          {...fadeUp}
          className="mt-10 flex items-center justify-center gap-3 text-xs text-muted-foreground"
        >
          <Users className="h-3.5 w-3.5" /> Currently accepting new collaborations
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        required
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none transition focus:border-purple-400/50 focus:ring-2 focus:ring-purple-500/20"
      />
    </div>
  );
}
