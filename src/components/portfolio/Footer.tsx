import { ArrowUp, Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-20 px-4 pb-10 pt-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="h-px w-full animated-gradient bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
        <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="font-display text-lg font-semibold">
              Tithi <span className="gradient-text">Shah</span>
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              © {new Date().getFullYear()} — Designed & built with care.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {[
              { i: Linkedin, h: "https://linkedin.com" },
              { i: Mail, h: "mailto:tithi.shah@example.com" },
              { i: Github, h: "https://github.com" },
              { i: Twitter, h: "https://twitter.com" },
            ].map(({ i: Icon, h }, idx) => (
              <a
                key={idx}
                href={h}
                aria-label="social"
                className="grid h-10 w-10 place-content-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition hover:border-white/20 hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <a
              href="#hero"
              aria-label="Back to top"
              className="ml-2 grid h-10 w-10 place-content-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg shadow-purple-500/30 transition hover:scale-110"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
