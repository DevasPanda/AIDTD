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
     <div className="min-h-screen bg-slate-950 text-slate-50">
    <Navbar />      

      {/* Hero Section */}
      <section
        id="hero"
        className="relative overflow-hidden py-16 md:py-28 px-4"
      >
        {/* Glow blobs */}
        <div className="pointer-events-none absolute -top-32 -left-10 h-72 w-72 rounded-full bg-cyan-500 blur-[120px] opacity-50" />
        <div className="pointer-events-none absolute -bottom-32 -right-10 h-80 w-80 rounded-full bg-fuchsia-500 blur-[130px] opacity-60" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.3fr,1fr] gap-12 items-center relative z-10">
          <FadeInSection>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-slate-900/60 px-3 py-1 text-xs md:text-sm text-cyan-200 mb-4">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>AIDT&D | AI & Automation Studio</span>
              </div>
              <h1 className="text-3xl md:text-6xl font-semibold leading-tight mb-4">
                Build{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">
                  AI Agents
                </span>{" "}
                & Automations
                <br />
                that ship to production.
              </h1>
              <p className="text-slate-300 text-sm md:text-lg mb-8 max-w-xl">
                We design AI & Automation solutions for businesses and train
                the next generation of builders through hands-on projects,
                internships, and bootcamps.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <a href="#services">
                  <button className="rounded-full bg-cyan-500 px-4 md:px-6 py-2 text-sm md:text-base font-semibold text-slate-950 hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/30">
                    Explore AI & Automation Services
                  </button>
                </a>
                <a href="/courses#course-section">
                  <button className="rounded-full border border-slate-600 px-4 md:px-6 py-2 text-sm md:text-base font-semibold hover:border-cyan-400 hover:text-cyan-300 transition">
                    View Training Tracks
                  </button>
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-xs md:text-sm text-slate-400">
                <div>
                  <div className="font-semibold text-slate-100">
                    AI Agents • RPA • IDP
                  </div>
                  <div>OpenAI · LangChain · Automation Anywhere · ABBYY</div>
                </div>
                <div>
                  <div className="font-semibold text-slate-100">
                    Education + Services
                  </div>
                  <div>Consulting, builds, internships & mentorship</div>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection className="delay-150">
            {/* Futuristic card / dashboard */}
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
                  className="block text-cyan-300 hover:text-cyan-400 transition text-xs md:text-sm"
                >
                  Demo Combat Training →
                </a>
              </div>
              <div className="mt-6 rounded-2xl border border-slate-700/70 bg-slate-900/80 p-3">
                <p className="text-xs text-slate-300 mb-1">
                  Want to build something similar?
                </p>
                <p className="text-[11px] text-slate-400 mb-3">
                  Tell us your use case – we’ll help you design an AI or
                  automation blueprint and train your team to maintain it.
                </p>
                <a href="/internships#apply-form">
                  <button className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 py-2 text-xs font-semibold text-slate-950 hover:from-cyan-400 hover:to-fuchsia-400 transition">
                    Talk to us / Apply now
                  </button>
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Tech stack scrolling strip */}
      <TechStackStrip />

      {/* AI & Automation Services */}
      <section
        id="services"
        className="relative py-16 md:py-20 px-4 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950"
      >
  {/* thin divider line above the section */}
  <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
        <FadeInSection>
          <div className="max-w-6xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">
              AI & Automation Services
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
              We work with teams to design, build, and deploy AI agents, RPA
              workflows, and intelligent document pipelines – and then train
              your people to run them.
            </p>
          </div>
        </FadeInSection>

        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          <FadeInSection>
            <div className="h-full rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur shadow-md shadow-cyan-500/10 aidtd-float">
              <h3 className="text-xl font-semibold mb-2 text-cyan-300">
                AI Agent Solutions
              </h3>
              <p className="text-sm text-slate-300 mb-4">
                Custom AI agents for support, document Q&A, lead qualification,
                and internal copilots using OpenAI, LangChain, and vector DBs.
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 text-left list-disc list-inside">
                <li>RAG-based knowledge bots</li>
                <li>Document understanding assistants</li>
                <li>Workflow-integrated chatbots</li>
              </ul>
            </div>
          </FadeInSection>

          <FadeInSection className="delay-100">
            <div className="h-full rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur shadow-md shadow-cyan-500/10 aidtd-float">
              <h3 className="text-xl font-semibold mb-2 text-fuchsia-300">
                RPA & Intelligent Automation
              </h3>
              <p className="text-sm text-slate-300 mb-4">
                End-to-end automation using Automation Anywhere, ABBYY Vantage,
                and custom APIs for finance, HR, and operations teams.
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 text-left list-disc list-inside">
                <li>IDP for invoices, forms, KYC</li>
                <li>Email & document workflows</li>
                <li>Bot architecture & governance</li>
              </ul>
            </div>
          </FadeInSection>

          <FadeInSection className="delay-200">
            <div className="h-full rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur shadow-md shadow-cyan-500/10 aidtd-float">
              <h3 className="text-xl font-semibold mb-2 text-emerald-300">
                AI Upskilling & Co-build
              </h3>
              <p className="text-sm text-slate-300 mb-4">
                Hybrid model where we co-build your first use cases while
                training your team through bootcamps, projects, and internships.
              </p>
              <ul className="text-xs text-slate-400 space-y-1.5 text-left list-disc list-inside">
                <li>Internal AI playbook design</li>
                <li>Hands-on bootcamps & labs</li>
                <li>Mentored capstone projects</li>
              </ul>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Placeholder for future sections (Why AIDT&D, testimonials, etc.) */}
      <FadeInSection>
        <section className="py-16 px-4 bg-slate-950">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                Why AIDT&D?
              </h2>
              <p className="text-sm md:text-base text-slate-300 mb-4">
                We blend a delivery studio and an education lab: real client
                projects on one side, structured learning paths on the other.
              </p>
              <ul className="text-sm text-slate-300 space-y-2 list-disc list-inside">
                <li>Hands-on AI & Automation builds, not just theory.</li>
                <li>Pathways from beginner to project-ready contributor.</li>
                <li>Exposure to real-world tools and workflows.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                For Students & Early Professionals
              </h3>
              <p className="text-sm text-slate-300 mb-3">
                Join our courses and internships to work on practical AI &
                automation projects under mentorship.
              </p>
              <h3 className="text-lg font-semibold text-fuchsia-300 mb-2 mt-4">
                For Teams & Companies
              </h3>
              <p className="text-sm text-slate-300">
                Engage with us for consulting, pilot builds, or full AI &
                automation programs tailored to your use cases.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Footer */}
      <Footer />


      {/* Privacy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4">
          <div className="max-w-lg w-full rounded-2xl bg-slate-950 border border-slate-700 p-6 shadow-xl">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold text-slate-100">
                Privacy Policy
              </h2>
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="text-slate-400 hover:text-slate-200 text-sm"
              >
                ✕
              </button>
            </div>
            <p className="text-xs md:text-sm text-slate-300 mb-3">
              We use your information only to respond to enquiries, share course
              or internship details, and improve our services. We do not sell
              your data to third parties.
            </p>
            <p className="text-xs md:text-sm text-slate-400">
              For any privacy-related questions, you can contact us via the
              contact form on this website or email us directly.
            </p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="px-4 py-1.5 rounded-full bg-cyan-500 text-slate-950 text-xs font-semibold hover:bg-cyan-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4">
          <div className="max-w-lg w-full rounded-2xl bg-slate-950 border border-slate-700 p-6 shadow-xl">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold text-slate-100">
                Contact AIDT&amp;D
              </h2>
              <button
                onClick={() => setShowContactModal(false)}
                className="text-slate-400 hover:text-slate-200 text-sm"
              >
                ✕
              </button>
            </div>
            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks for reaching out! We will get back to you soon.");
                setShowContactModal(false);
              }}
            >
              <div>
                <label className="block text-xs text-slate-300 mb-1">
                  Name
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
                  Message
                </label>
                <textarea
                  rows={3}
                  required
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowContactModal(false)}
                  className="px-4 py-1.5 rounded-full border border-slate-600 text-xs text-slate-300 hover:border-slate-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-full bg-cyan-500 text-slate-950 text-xs font-semibold hover:bg-cyan-400"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Terms Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center px-4">
          <div className="max-w-lg w-full rounded-2xl bg-slate-950 border border-slate-700 p-6 shadow-xl">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold text-slate-100">
                Terms &amp; Conditions
              </h2>
              <button
                onClick={() => setShowTermsModal(false)}
                className="text-slate-400 hover:text-slate-200 text-sm"
              >
                ✕
              </button>
            </div>
            <p className="text-xs md:text-sm text-slate-300 mb-3">
              By using this website, enrolling in our programs, or engaging our
              services, you agree to our terms regarding payment, attendance,
              project ownership, and code of conduct.
            </p>
            <p className="text-xs md:text-sm text-slate-400">
              Detailed terms can be shared over email or during onboarding. For
              any questions about these terms, feel free to contact us.
            </p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowTermsModal(false)}
                className="px-4 py-1.5 rounded-full bg-cyan-500 text-slate-950 text-xs font-semibold hover:bg-cyan-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/** Small helper component for the hero dashboard rows */
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
