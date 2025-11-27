// src/TechStackStrip.jsx
import React from "react";
import FadeInSection from "./FadeInSection";

const TECH_STACK = [
  { name: "OpenAI", short: "OpenAI", src: "/logos/openai.png" },
  { name: "LangChain", short: "LangChain", src: "/logos/langchain.png" },
  {
    name: "Automation Anywhere",
    short: "Automation Anywhere",
    src: "/logos/a360.png",
  },
  { name: "ABBYY Vantage", short: "ABBYY Vantage", src: "/logos/abbyy.png" },
  { name: "Python", short: "Python", src: "/logos/python.png" },
  { name: "Node.js", short: "Node.js", src: "/logos/nodejs.svg" },
  { name: "MongoDB", short: "MongoDB", src: "/logos/mongo.svg" },
];

export default function TechStackStrip() {
  return (
    <section className="py-24 px-4 bg-slate-950 relative overflow-hidden">
      {/* subtle glow to separate from sections above/below */}
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-cyan-500/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-10 h-10 bg-gradient-to-t from-cyan-500/10 to-transparent" />

      <FadeInSection>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10 relative z-10">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 mb-2">
              Tech Stack
            </p>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
              We ship with a modern AI &amp; Automation stack
            </h2>
            <p className="text-xs md:text-sm text-slate-400 mt-1">
              The same tools you’ll learn in our programs power real-world
              client projects and internal products.
            </p>
          </div>

          {/* Text pills (static full list) */}
          <div className="hidden md:flex flex-wrap gap-2 text-[11px] text-slate-300">
            {TECH_STACK.map((t) => (
              <span
                key={t.name}
                className="px-3 py-1 rounded-full border border-slate-700/70 bg-slate-900/80"
              >
                {t.name}
              </span>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Big centered marquee */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="tech-marquee rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur">
          <div className="tech-marquee-track">
            {TECH_STACK.map((tech, idx) => (
              <div
                key={idx}
                className="tech-logo-card flex flex-col items-center justify-center gap-2"
              >
                {tech.src ? (
                  <img src={tech.src} alt={tech.name} />
                ) : (
                  <span className="tech-logo-text">{tech.name}</span>
                )}
                <span className="tech-logo-label">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-3 text-[10px] md:text-xs text-slate-500 text-right">
          *Representative tools. We also work with other AI &amp; automation
          platforms.
        </p>
      </div>
    </section>
  );
}
