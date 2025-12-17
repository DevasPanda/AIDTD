import React, { useState } from "react";
import FadeInSection from "./FadeInSection";
import TechStackStrip from "./TechStackStrip";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Home() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 overflow-x-hidden">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-16 md:pt-28 pb-12 md:pb-24 px-4">
        {/* glow */}
        <div className="pointer-events-none absolute -top-32 -left-10 h-72 w-72 rounded-full bg-cyan-500 blur-[120px] opacity-40" />
        <div className="pointer-events-none absolute -bottom-32 -right-10 h-80 w-80 rounded-full bg-fuchsia-500 blur-[130px] opacity-50" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">
          <FadeInSection>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 mb-3">
                AIDT&amp;D
              </p>

              <h1 className="text-2xl md:text-6xl font-semibold leading-snug mb-3">
                Build{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                  AI & Automation
                </span>{" "}
                that ships.
              </h1>

              <p className="text-sm md:text-lg text-slate-300 max-w-xl mb-6">
                Learn, build, and deploy real AI agents & automation with
                hands-on projects, mentorship, and internships.
              </p>

              {/* Primary CTA (mobile-first) */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="/internships#apply-form">
                  <button className="w-full rounded-full bg-cyan-500 py-3 px-6 text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition">
                    Apply for Internship
                  </button>
                </a>

                {/* Secondary CTA hidden on mobile */}
                <a href="/courses" className="hidden sm:block">
                  <button className="rounded-full border border-slate-600 px-6 py-2 text-sm hover:border-cyan-400 hover:text-cyan-300 transition">
                    View Courses
                  </button>
                </a>
              </div>
            </div>
          </FadeInSection>

          {/* Right visual – desktop only */}
          <FadeInSection className="hidden md:block delay-150">
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_0_50px_rgba(56,189,248,0.35)] backdrop-blur">
              <p className="text-xs uppercase tracking-wider text-slate-400 mb-2">
                Live Studio
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Resume Screening Agent – Deployed</li>
                <li>• Invoice IDP + RPA – In Progress</li>
                <li>• GenAI Knowledge Bot – Prototype</li>
              </ul>

              <a href="/train-demo" className="inline-block mt-4 text-cyan-300 hover:text-cyan-400 text-sm">
                View demo →
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <TechStackStrip />

      {/* ================= SERVICES ================= */}
      <section
        id="services"
        className="py-14 md:py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950"
      >
        <FadeInSection>
          <div className="max-w-6xl mx-auto text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-semibold mb-3">
              AI & Automation Services
            </h2>
            <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
              We design and deploy AI agents, RPA workflows, and intelligent
              document systems — and train teams to own them.
            </p>
          </div>
        </FadeInSection>

        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
          {[
            {
              title: "AI Agent Solutions",
              color: "text-cyan-300",
              text:
                "RAG bots, copilots, and assistants integrated into real workflows.",
            },
            {
              title: "RPA & IDP Automation",
              color: "text-fuchsia-300",
              text:
                "End-to-end automation using Automation Anywhere and ABBYY.",
            },
            {
              title: "Upskilling & Co-build",
              color: "text-emerald-300",
              text:
                "We co-build your first use cases while training your team.",
            },
          ].map((item, i) => (
            <FadeInSection key={i}>
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <h3 className={`text-lg font-semibold mb-2 ${item.color}`}>
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300">{item.text}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* ================= WHY ================= */}
      <section className="py-14 px-4 bg-slate-950">
        <FadeInSection>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                Why AIDT&amp;D?
              </h2>
              <ul className="text-sm text-slate-300 space-y-2 list-disc list-inside">
                <li>Real projects, not slideware</li>
                <li>Internships aligned with production work</li>
                <li>Mentorship from industry practitioners</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <p className="text-sm text-slate-300 mb-4">
                Built for students, career switchers, and teams who want
                practical AI & automation capability.
              </p>
              <a href="/internships#apply-form">
                <button className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 py-3 text-sm font-semibold text-slate-950">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </FadeInSection>
      </section>

      <Footer />

      {/* ========== MOBILE STICKY CTA (HOME) ========== */}
      <div className="fixed bottom-0 inset-x-0 bg-slate-950/90 backdrop-blur p-3 md:hidden z-40">
        <a href="/internships#apply-form">
          <button className="w-full rounded-full bg-cyan-500 py-3 text-sm font-semibold text-slate-950">
            Apply for Internship
          </button>
        </a>
      </div>
    </div>
  );
}
