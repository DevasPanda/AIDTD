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

      {/* Hero Section */}
      <section
        id="hero"
        className="relative overflow-hidden pt-16 pb-12 md:py-28 px-4"
      >
        {/* Glow blobs */}
        <div className="pointer-events-none absolute -top-32 -left-10 h-72 w-72 rounded-full bg-cyan-500 blur-[120px] opacity-50" />
        <div className="pointer-events-none absolute -bottom-32 -right-10 h-80 w-80 rounded-full bg-fuchsia-500 blur-[130px] opacity-60" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.3fr,1fr] gap-10 items-center relative z-10">
          <FadeInSection>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-slate-900/60 px-3 py-1 text-xs md:text-sm text-cyan-200 mb-4">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>AIDT&amp;D | AI & Automation Studio</span>
              </div>

              <h1 className="text-2xl md:text-6xl font-semibold leading-tight mb-3">
                Build{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">
                  AI Agents
                </span>{" "}
                & Automations
                <br className="hidden md:block" />
                that ship to production.
              </h1>

              <p className="text-slate-300 text-sm md:text-lg mb-6 max-w-xl">
                We design AI & Automation solutions for businesses and train
                builders through hands-on projects, internships, and bootcamps.
              </p>

              {/* CTA – mobile first */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="/internships#apply-form">
                  <button className="w-full rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/30">
                    Apply for Internship
                  </button>
                </a>

                {/* secondary CTA hidden on mobile */}
                <a href="/courses#course-section" className="hidden sm:block">
                  <button className="rounded-full border border-slate-600 px-6 py-2 text-sm font-semibold hover:border-cyan-400 hover:text-cyan-300 transition">
                    View Training Tracks
                  </button>
                </a>
              </div>
            </div>
          </FadeInSection>

          {/* Dashboard – desktop only */}
          <FadeInSection className="hidden md:block delay-150">
            <div className="relative rounded-3xl border border-white/10 bg-slate-900/70 p-5 md:p-6 shadow-[0_0_60px_rgba(56,189,248,0.35)] backdrop-blur">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Live Studio
                </span>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-300 border border-emerald-500/40">
                  Active Projects
                </span>
              </div>

              <div className="space-y-3 text-xs md:text-sm">
                <DashboardRow
                  label="Resume Screening Agent"
                  value="Deployed"
                  accent="emerald"
                />
                <DashboardRow
                  label="Invoice Extraction (IDP + RPA)"
                  value="In Progress"
                  accent="cyan"
                />
                <DashboardRow
                  label="GenAI Knowledge Bot"
                  value="Prototype"
                  accent="fuchsia"
                />
                <a
                  href="/train-demo"
                  className="block text-cyan-300 hover:text-cyan-400 transition"
                >
                  Demo Combat Training →
                </a>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-700/70 bg-slate-900/80 p-3">
                <p className="text-xs text-slate-300 mb-1">
                  Want to build something similar?
                </p>
                <p className="text-[11px] text-slate-400 mb-3">
                  Tell us your use case – we’ll help design it.
                </p>
                <a href="/internships#apply-form">
                  <button className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 py-2 text-xs font-semibold text-slate-950">
                    Talk to us / Apply now
                  </button>
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <TechStackStrip />

      {/* rest of your file stays EXACTLY SAME */}
      <Footer />
    </div>
  );
}

/** helper stays untouched */
function DashboardRow({ label, value, accent }) {
  const accentMap = {
    emerald: "bg-emerald-400",
    cyan: "bg-cyan-400",
    fuchsia: "bg-fuchsia-400",
  };
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-700/70 bg-slate-900/80 px-3 py-2.5">
      <div className="flex items-center gap-2">
        <span
          className={`h-2.5 w-2.5 rounded-full ${
            accentMap[accent] || "bg-cyan-400"
          }`}
        />
        <span className="text-slate-200 text-xs md:text-sm">{label}</span>
      </div>
      <span className="text-[11px] md:text-xs text-slate-400">{value}</span>
    </div>
  );
}
