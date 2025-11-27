// src/About.jsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FadeInSection from "./FadeInSection";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />

      {/* Hero / Mission & Vision */}
      <section className="pt-28 md:pt-32 pb-16 px-4 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
        <FadeInSection>
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 mb-3">
              About AIDT&amp;D
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold mb-4">
              Building the Next Wave of{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">
                AI &amp; Automation Talent
              </span>
            </h1>
            <p className="text-sm md:text-base text-slate-300 max-w-3xl mx-auto">
              AIDT&amp;D (AI, Digital Transformation &amp; Development) is a
              studio and training space where modern AI agents, RPA automations,
              and real-world projects meet structured learning and mentoring.
            </p>
          </div>
        </FadeInSection>

        {/* Mission & Vision cards */}
        <FadeInSection className="mt-10">
          <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-cyan-400/40 bg-slate-950/80 p-6 md:p-7 backdrop-blur shadow-[0_0_40px_rgba(56,189,248,0.25)] aidtd-float">
              <h2 className="text-xl md:text-2xl font-semibold mb-2 text-cyan-300">
                Our Mission
              </h2>
              <p className="text-sm md:text-base text-slate-200 mb-2">
                To make AI and automation skills truly accessible by combining
                hands-on projects, mentorship, and real client work so that
                learners don&apos;t just collect certificates – they become
                confident builders.
              </p>
              <p className="text-xs md:text-sm text-slate-400">
                We want every learner who passes through AIDT&amp;D to ship
                something real: an agent, a bot, a workflow, or a tool that
                actually solves a problem for someone.
              </p>
            </div>

            <div className="rounded-3xl border border-fuchsia-400/40 bg-slate-950/80 p-6 md:p-7 backdrop-blur shadow-[0_0_40px_rgba(232,121,249,0.22)] aidtd-float">
              <h2 className="text-xl md:text-2xl font-semibold mb-2 text-fuchsia-300">
                Our Vision
              </h2>
              <p className="text-sm md:text-base text-slate-200 mb-2">
                To become a go-to hub where companies and individuals co-build
                the future of work with AI – a place where ideas move from
                &quot;what if&quot; to deployed systems, and where talent is
                constantly being discovered, trained, and empowered.
              </p>
              <p className="text-xs md:text-sm text-slate-400">
                We imagine a world where every team has access to practical AI
                and automation expertise, and every motivated learner can grow
                into that role with the right guidance and projects.
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20 px-4 bg-slate-900">
        <FadeInSection>
          <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-[1.2fr,0.9fr] items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Our Story
              </h2>
              <p className="text-sm md:text-base text-slate-300 mb-3">
                AIDT&amp;D was born from a simple observation: there is a huge
                gap between what most courses teach and what teams actually need
                when they want to ship AI or automation into production.
              </p>
              <p className="text-sm md:text-base text-slate-300 mb-3">
                On one side, we saw students and professionals stuck in endless
                theory and tool-checklists. On the other side, we saw
                organisations struggling to find people who can design, build,
                and maintain AI agents, RPA workflows, and document
                understanding solutions on real infrastructure.
              </p>
              <p className="text-sm md:text-base text-slate-300">
                AIDT&amp;D exists to sit in the middle – as a studio that ships
                real solutions and a training ecosystem that prepares people to
                work on those solutions from day one.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 md:p-6 backdrop-blur aidtd-float">
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-300 mb-2">
                At a glance
              </p>
              <ul className="space-y-3 text-sm text-slate-200">
                <li>
                  <span className="font-semibold text-cyan-300">
                    Studio + Academy:
                  </span>{" "}
                  We both build solutions and train people on the same stack.
                </li>
                <li>
                  <span className="font-semibold text-cyan-300">
                    Project-first:
                  </span>{" "}
                  Every track is anchored around real-world use cases, not just
                  slides.
                </li>
                <li>
                  <span className="font-semibold text-cyan-300">
                    Talent pipeline:
                  </span>{" "}
                  Interns and learners can grow into contributors on live
                  projects.
                </li>
              </ul>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-20 px-4 bg-slate-950">
        <FadeInSection>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
              What We Do
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 backdrop-blur aidtd-float">
                <h3 className="text-lg font-semibold mb-2 text-cyan-300">
                  AI &amp; Automation Studio
                </h3>
                <p className="text-sm text-slate-300 mb-3">
                  We work with teams to design and implement AI agents, RPA
                  workflows, and intelligent document processing pipelines.
                </p>
                <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
                  <li>AI agents for support, ops, and internal tools</li>
                  <li>IDP for invoices, KYC, and forms</li>
                  <li>RPA bots for repetitive back-office work</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 backdrop-blur aidtd-float">
                <h3 className="text-lg font-semibold mb-2 text-fuchsia-300">
                  Training Programs
                </h3>
                <p className="text-sm text-slate-300 mb-3">
                  We run focused programs on AI agents, RPA, and full stack
                  automation – with labs, assignments, and mentor feedback.
                </p>
                <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
                  <li>Short bootcamps and intensive tracks</li>
                  <li>Beginner-friendly pathways into production work</li>
                  <li>Capstone projects inspired by real client work</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 backdrop-blur aidtd-float">
                <h3 className="text-lg font-semibold mb-2 text-emerald-300">
                  Internships &amp; Co-build
                </h3>
                <p className="text-sm text-slate-300 mb-3">
                  We invite learners to collaborate on live or simulated
                  projects, acting as a bridge between training and industry.
                </p>
                <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
                  <li>Mentored internships with real responsibilities</li>
                  <li>Co-build model: we ship together with your team</li>
                  <li>Portfolio-building and interview preparation</li>
                </ul>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Values / How We Work */}
      <section className="py-16 md:py-20 px-4 bg-slate-900">
        <FadeInSection>
          <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[1.1fr,1fr] items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                How We Think &amp; Work
              </h2>
              <p className="text-sm md:text-base text-slate-300 mb-4">
                Great AI and automation work is not just about tools – it&apos;s
                about understanding context, asking the right questions, and
                designing systems that people can actually use and maintain.
              </p>
              <p className="text-sm md:text-base text-slate-300 mb-4">
                That&apos;s why we emphasise fundamentals, design thinking, and
                collaboration alongside hands-on exposure to platforms like
                OpenAI, LangChain, Automation Anywhere, and ABBYY.
              </p>
              <p className="text-sm md:text-base text-slate-300">
                Whether you&apos;re a learner or an organisation, our goal is
                the same: ship something meaningful, and ensure you understand
                how it works under the hood.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 backdrop-blur aidtd-float">
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-300 mb-3">
                Our Core Values
              </p>
              <ul className="space-y-2.5 text-sm text-slate-200">
                <li>
                  <span className="font-semibold text-cyan-300">
                    Real over theoretical:
                  </span>{" "}
                  If it doesn&apos;t ship or create value, it&apos;s only half
                  done.
                </li>
                <li>
                  <span className="font-semibold text-cyan-300">
                    Learn by doing:
                  </span>{" "}
                  We believe the best way to learn AI &amp; automation is by
                  building and breaking real systems.
                </li>
                <li>
                  <span className="font-semibold text-cyan-300">
                    Clarity over hype:
                  </span>{" "}
                  We cut through buzzwords and focus on solid foundations and
                  practical patterns.
                </li>
                <li>
                  <span className="font-semibold text-cyan-300">
                    Shared growth:
                  </span>{" "}
                  When our learners succeed, our partner companies succeed –
                  everyone grows together.
                </li>
              </ul>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 bg-slate-950">
        <FadeInSection>
          <div className="max-w-4xl mx-auto text-center rounded-3xl border border-cyan-400/40 bg-slate-950/80 p-8 md:p-10 backdrop-blur shadow-[0_0_60px_rgba(56,189,248,0.25)]">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Want to Work or Learn with AIDT&amp;D?
            </h2>
            <p className="text-sm md:text-base text-slate-300 mb-6 max-w-2xl mx-auto">
              Whether you&apos;re exploring internships, looking to upskill your
              team, or want to discuss an AI / automation use case, we&apos;d
              love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/internships#apply-form">
                <button className="w-full sm:w-auto rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-2.5 text-sm font-semibold text-slate-950 hover:from-cyan-400 hover:to-fuchsia-400 transition shadow-lg">
                  Explore Internships
                </button>
              </a>
              <button
                onClick={() =>
                  window.dispatchEvent(new Event("openContactForm"))
                }
                className="w-full sm:w-auto rounded-full border border-slate-600 px-6 py-2.5 text-sm font-semibold text-slate-100 hover:border-cyan-400 hover:text-cyan-300 transition"
              >
                Talk to Us
              </button>
            </div>
          </div>
        </FadeInSection>
      </section>

      <Footer />
    </div>
  );
}
