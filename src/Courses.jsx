import React from "react";
import FadeInSection from "./FadeInSection";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Courses() {
  return (
  <div className="min-h-screen bg-slate-950 text-slate-50">
  <Navbar />
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Top section */}
      <section className="pt-20 md:pt-24 pb-10 px-4 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
        <FadeInSection>
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 mb-2">
              AIDT&amp;D Learning Tracks
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold mb-3">
              AI &amp; Automation Courses
            </h1>
            <p className="text-sm md:text-base text-slate-300 max-w-3xl mx-auto">
              Structured, hands-on programs designed to take you from{" "}
              <span className="text-cyan-300">foundations</span> to{" "}
              <span className="text-fuchsia-300">project-ready</span> in AI
              agents, RPA, and intelligent document processing.
            </p>
          </div>
        </FadeInSection>
      </section>

      {/* Tracks / cards */}
      <section className="pb-16 md:pb-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
          {/* Foundations */}
          <FadeInSection>
            <div className="h-full rounded-3xl border border-white/10 bg-slate-950/70 p-6 md:p-7 backdrop-blur shadow-md shadow-slate-900/40">
              <p className="text-xs uppercase tracking-[0.22em] text-emerald-300 mb-2">
                Level 01
              </p>
              <h2 className="text-xl md:text-2xl font-semibold mb-2">
                AI &amp; Programming Foundations
              </h2>
              <p className="text-sm text-slate-300 mb-4">
                Build solid fundamentals in programming and AI concepts so you
                can follow and implement modern AI &amp; automation solutions
                with confidence.
              </p>
              <ul className="text-xs md:text-sm text-slate-300 space-y-2 list-disc list-inside mb-4">
                <li>Python basics, APIs, and JSON</li>
                <li>Git &amp; project structure basics</li>
                <li>Intro to prompt engineering &amp; LLMs</li>
              </ul>
              <p className="text-[11px] text-slate-400 mb-4">
                Ideal for students or professionals transitioning into AI &
                automation from non-CS or non-dev backgrounds.
              </p>
              <button className="mt-auto inline-flex items-center justify-center rounded-full bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-100 hover:bg-slate-700 transition" onClick={() => window.dispatchEvent(new Event("openContactForm"))}>
                Enquire about this track
              </button>
            </div>
          </FadeInSection>

          {/* AI Agents */}
          <FadeInSection className="delay-100">
            <div className="h-full rounded-3xl border border-cyan-400/40 bg-slate-950/80 p-6 md:p-7 backdrop-blur shadow-[0_0_40px_rgba(56,189,248,0.25)]">
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-300 mb-2">
                Level 02
              </p>
              <h2 className="text-xl md:text-2xl font-semibold mb-2">
                AI Agents &amp; RAG Systems
              </h2>
              <p className="text-sm text-slate-300 mb-4">
                Learn how to build practical AI agents: chatbots, knowledge
                assistants, and workflow copilots using modern LLM tooling.
              </p>
              <ul className="text-xs md:text-sm text-slate-300 space-y-2 list-disc list-inside mb-4">
                <li>OpenAI, LangChain &amp; vector databases</li>
                <li>RAG (Retrieval Augmented Generation) patterns</li>
                <li>Building &amp; deploying simple AI agents</li>
              </ul>
              <p className="text-[11px] text-slate-400 mb-4">
                Best suited for learners who already understand basic coding
                and want to work specifically on GenAI solutions.
              </p>
              <button className="mt-auto inline-flex items-center justify-center rounded-full bg-cyan-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-cyan-400 transition" onClick={() => window.dispatchEvent(new Event("openContactForm"))}>
                Get syllabus &amp; roadmap
              </button>
            </div>
          </FadeInSection>

          {/* RPA / IDP */}
          <FadeInSection className="delay-150">
            <div className="h-full rounded-3xl border border-fuchsia-400/40 bg-slate-950/80 p-6 md:p-7 backdrop-blur shadow-[0_0_40px_rgba(236,72,153,0.18)]">
              <p className="text-xs uppercase tracking-[0.22em] text-fuchsia-300 mb-2">
                Level 03
              </p>
              <h2 className="text-xl md:text-2xl font-semibold mb-2">
                RPA &amp; Intelligent Document Processing
              </h2>
              <p className="text-sm text-slate-300 mb-4">
                Combine RPA platforms and IDP tools to automate repetitive,
                document-heavy workflows end-to-end.
              </p>
              <ul className="text-xs md:text-sm text-slate-300 space-y-2 list-disc list-inside mb-4">
                <li>Automation Anywhere &amp; bot design basics</li>
                <li>ABBYY Vantage / IDP concepts</li>
                <li>Invoice, KYC &amp; email automation use cases</li>
              </ul>
              <p className="text-[11px] text-slate-400 mb-4">
                Great for those targeting automation roles in operations, finance,
                and shared services teams.
              </p>
              <button className="mt-auto inline-flex items-center justify-center rounded-full bg-fuchsia-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-fuchsia-400 transition" onClick={() => window.dispatchEvent(new Event("openContactForm"))}>
                Join RPA &amp; IDP cohort
              </button>
            </div>
          </FadeInSection>

          {/* Capstone / Internship prep */}
          <FadeInSection className="delay-200">
            <div className="h-full rounded-3xl border border-emerald-400/40 bg-slate-950/80 p-6 md:p-7 backdrop-blur shadow-[0_0_40px_rgba(34,197,94,0.18)]">
              <p className="text-xs uppercase tracking-[0.22em] text-emerald-300 mb-2">
                Level 04
              </p>
              <h2 className="text-xl md:text-2xl font-semibold mb-2">
                Capstone &amp; Internship Readiness
              </h2>
              <p className="text-sm text-slate-300 mb-4">
                Work on a guided project that mimics a real client engagement
                and prepare your portfolio and profile for internships.
              </p>
              <ul className="text-xs md:text-sm text-slate-300 space-y-2 list-disc list-inside mb-4">
                <li>End-to-end AI or automation project</li>
                <li>Code reviews &amp; architecture walkthroughs</li>
                <li>Resume, LinkedIn &amp; interview prep for roles</li>
              </ul>
              <p className="text-[11px] text-slate-400 mb-4">
                Often taken along with or after internships to clearly showcase
                your skills to future employers.
              </p>
              <button className="mt-auto inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition" onClick={() => window.dispatchEvent(new Event("openContactForm"))}>
                Talk to mentor / counsellor
              </button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* FAQ / How it works */}
      <section className="pb-20 px-4 bg-slate-950">
        <FadeInSection>
          <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-[1.2fr,1fr] items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                How the learning journey works
              </h2>
              <p className="text-sm md:text-base text-slate-300 mb-4">
                You don’t have to take every track at once. We design a path
                based on your current skills, time, and goals.
              </p>
              <ol className="space-y-3 text-sm text-slate-300 list-decimal list-inside">
                <li>We understand your background &amp; target roles.</li>
                <li>We recommend 1–2 tracks to start with.</li>
                <li>You learn by building mini-projects, not just watching.</li>
                <li>We connect your progress with internship / project work.</li>
              </ol>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                Not sure where to begin?
              </h3>
              <p className="text-sm text-slate-300 mb-3">
                Share a bit about your background and we&apos;ll suggest a
                track that fits you best.
              </p>
              <button className="w-full rounded-full bg-cyan-500 py-2.5 text-xs md:text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition" onClick={() => window.dispatchEvent(new Event("openContactForm"))}>
                Request a free guidance call
              </button>
              <p className="mt-3 text-[11px] text-slate-500">
                No spam. Just an honest conversation about whether AIDT&amp;D is
                the right fit for you.
              </p>
            </div>
          </div>

        </FadeInSection>
      </section>
    </div>
    <Footer />
    </div>
    
  );
}
