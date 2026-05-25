import { useEffect, useRef } from "react";

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const COUNT = Math.min(80, Math.floor((w * h) / 22000));
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.6 + 0.4,
    }));

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(168,85,247,0.55)";
        ctx.fill();
      }
      // connect close ones
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 16000) {
            ctx.strokeStyle = `rgba(59,130,246,${0.18 - d2 / 90000})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-60"
    />
  );
}

export function GridBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-radial-fade opacity-40" />
      <div className="absolute -top-40 left-1/4 h-[480px] w-[480px] rounded-full bg-blue-500/20 blur-[120px] animate-pulse-glow" />
      <div
        className="absolute top-1/3 right-0 h-[520px] w-[520px] rounded-full bg-purple-500/20 blur-[140px] animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-0 left-1/2 h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-[120px] animate-pulse-glow"
        style={{ animationDelay: "3s" }}
      />
    </div>
  );
}

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 -z-10 h-[400px] w-[400px] rounded-full opacity-40 transition-transform duration-150 ease-out"
      style={{
        background:
          "radial-gradient(circle, rgba(59,130,246,0.25) 0%, rgba(168,85,247,0.12) 35%, transparent 70%)",
      }}
    />
  );
}
