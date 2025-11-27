// src/Internships.jsx
import React from "react";
import FadeInSection from "./FadeInSection";
import Navbar from "./Navbar";
import Footer from "./footer";

export default function Internships() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />

      {/* Hero / Intro */}
      <section className="pt-20 md:pt-24 pb-10 px-4 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
        <FadeInSection>
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-fuchsia-400 mb-2">
              AIDT&amp;D Internships
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold mb-3">
              Real-World AI &amp; Automation Internships
            </h1>
            <p className="text-sm md:text-base text-slate-300 max-w-3xl mx-auto">
              Our internships are not classroom simulations. You work on real
              projects, guided by mentors, and build a portfolio that actually
              proves your capability in AI, RPA, and intelligent automation.
            </p>
          </div>
        </FadeInSection>
      </section>

      {/* Internship Tracks */}
      <section className="py-16 md:py-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          <FadeInSection>
            <div className="h-full rounded-3xl border border-cyan-400/40 bg-slate-950/80 p-6 backdrop-blur shadow-[0_0_40px_rgba(56,189,248,0.25)]">
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-300 mb-2">
                Internship Path
              </p>
              <h3 className="text-xl font-semibold mb-2">AI Agent Intern</h3>
              <p className="text-sm text-slate-300 mb-4">
                Work on chatbot systems, internal copilots, and AI assistants
                using modern GenAI stack and RAG patterns.
              </p>
              <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                <li>Design AI task flows and prompts</li>
                <li>Build knowledge bots on real documents</li>
                <li>Deploy basic AI agents to test users</li>
              </ul>
            </div>
          </FadeInSection>

          <FadeInSection className="delay-100">
            <div className="h-full rounded-3xl border border-fuchsia-400/40 bg-slate-950/80 p-6 backdrop-blur shadow-[0_0_40px_rgba(236,72,153,0.22)]">
              <p className="text-xs uppercase tracking-[0.22em] text-fuchsia-300 mb-2">
                Internship Path
              </p>
              <h3 className="text-xl font-semibold mb-2">
                RPA Automation Intern
              </h3>
              <p className="text-sm text-slate-300 mb-4">
                Create automation workflows for document-heavy business
                processes using RPA tools.
              </p>
              <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                <li>Build and test automation bots</li>
                <li>Integrate email, spreadsheets, and APIs</li>
                <li>Work on invoice / KYC / back-office flows</li>
              </ul>
            </div>
          </FadeInSection>

          <FadeInSection className="delay-200">
            <div className="h-full rounded-3xl border border-emerald-400/40 bg-slate-950/80 p-6 backdrop-blur shadow-[0_0_40px_rgba(34,197,94,0.2)]">
              <p className="text-xs uppercase tracking-[0.22em] text-emerald-300 mb-2">
                Internship Path
              </p>
              <h3 className="text-xl font-semibold mb-2">
                Full Stack AI Intern
              </h3>
              <p className="text-sm text-slate-300 mb-4">
                Combine frontend, backend, and AI integration to build
                production-style systems.
              </p>
              <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                <li>Build AI-powered dashboards and tools</li>
                <li>Work with REST APIs &amp; basic databases</li>
                <li>Get exposure to deployment workflows</li>
              </ul>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Internship Process Timeline */}
      <section className="py-20 px-4 bg-slate-950">
        <FadeInSection>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
              How the Internship Works
            </h2>
            <div className="grid gap-6 md:grid-cols-4">
              {[
                "Apply Online",
                "Screening Call",
                "Training + Project",
                "Certification & Placement Support",
              ].map((step, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-center"
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    {i + 1}
                  </div>
                  <p className="text-sm text-slate-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Application CTA + Form */}
      <section
        id="apply-form"
        className="pb-24 px-4 bg-gradient-to-b from-slate-950 to-slate-900"
      >
        <FadeInSection>
          <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[1.1fr,1fr] items-start rounded-3xl border border-cyan-400/30 bg-slate-950/80 p-8 shadow-[0_0_60px_rgba(56,189,248,0.25)]">
            {/* Left: Text */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                Apply for an Internship at AIDT&amp;D
              </h2>
              <p className="text-sm md:text-base text-slate-300 mb-4">
                Share a few details about yourself and the kind of work you want
                to do. We&apos;ll review your application and get back to you
                with next steps.
              </p>
              <ul className="text-xs md:text-sm text-slate-300 space-y-2 list-disc list-inside mb-4">
                <li>Remote &amp; hybrid options depending on project</li>
                <li>Focus on real deliverables, not just certificates</li>
                <li>Support with portfolio, resume &amp; interviews</li>
              </ul>
              <p className="text-[11px] text-slate-500">
                Note: Seats are limited per cohort. Shortlisted candidates will
                be contacted via email or phone.
              </p>
            </div>

            {/* Right: Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Thanks for applying! We have received your details and will get back to you soon."
                );
              }}
              className="space-y-3"
            >
              <div>
                <label className="block text-xs text-slate-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-300 mb-1">
                  Current Status
                </label>
                <select
                  required
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400"
                >
                  <option value="">Select...</option>
                  <option>Student</option>
                  <option>Recent Graduate</option>
                  <option>Working Professional</option>
                  <option>Career Transition</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-slate-300 mb-1">
                  Preferred Internship Path
                </label>
                <select
                  required
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400"
                >
                  <option value="">Select...</option>
                  <option>AI Agent Intern</option>
                  <option>RPA Automation Intern</option>
                  <option>Full Stack AI Intern</option>
                  <option>Not sure, need guidance</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-slate-300 mb-1">
                  Tell us about your background
                </label>
                <textarea
                  rows={3}
                  required
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400"
                  placeholder="Mention your skills, projects, and what you want to learn..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 py-2.5 text-sm font-semibold text-slate-950 hover:from-cyan-400 hover:to-fuchsia-400 transition shadow-lg"
              >
                Submit Application
              </button>
            </form>
          </div>
        </FadeInSection>
      </section>
      <Footer />
    </div>
    
  );
}
