// src/Internships.jsx
import React from "react";
import FadeInSection from "./FadeInSection";
import Navbar from "./Navbar";
import Footer from "./Footer";
import internshipsContent from "../content/internships.json";

export default function Internships() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />

      {/* Hero / Intro */}
      <section className="pt-28 md:pt-32 pb-10 px-4 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
        <FadeInSection>
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-fuchsia-400 mb-2">
              {internshipsContent.subtitle}
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold mb-3">
              {internshipsContent.title}
            </h1>
            <p className="text-sm md:text-base text-slate-300 max-w-3xl mx-auto">
              {internshipsContent.description}
            </p>
          </div>
        </FadeInSection>
      </section>

      {/* Internship Tracks */}
      <section className="py-16 md:py-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {internshipsContent.programs.map((program, i) => {
            const colorClass = program.color || "cyan";
            const shadowColors = {
              cyan: "56,189,248,0.25",
              fuchsia: "236,72,153,0.22",
              emerald: "34,197,94,0.2"
            };

            return (
              <FadeInSection key={i} className={i === 1 ? "delay-100" : i === 2 ? "delay-200" : ""}>
                <div className={`h-full rounded-3xl border border-${colorClass}-400/40 bg-slate-950/80 p-6 backdrop-blur shadow-[0_0_40px_rgba(${shadowColors[colorClass]})]`}>
                  <p className={`text-xs uppercase tracking-[0.22em] text-${colorClass}-300 mb-2`}>
                    {program.label}
                  </p>
                  <h3 className="text-xl font-semibold mb-2">{program.name}</h3>
                  <p className="text-sm text-slate-300 mb-4">
                    {program.description}
                  </p>
                  <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
                    {program.responsibilities.map((resp, j) => (
                      <li key={j}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </section>

      {/* Internship Process Timeline */}
      <section className="py-20 px-4 bg-slate-950">
        <FadeInSection>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
              {internshipsContent.process.heading}
            </h2>
            <div className="grid gap-6 md:grid-cols-4">
              {internshipsContent.process.steps.map((step, i) => (
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
                {internshipsContent.application.heading}
              </h2>
              <p className="text-sm md:text-base text-slate-300 mb-4">
                {internshipsContent.application.description}
              </p>
              <ul className="text-xs md:text-sm text-slate-300 space-y-2 list-disc list-inside mb-4">
                {internshipsContent.application.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
              <p className="text-[11px] text-slate-500">
                {internshipsContent.application.note}
              </p>
            </div>

            {/* Right: Netlify-wired Form */}
            <form
              name="internship-application"
              method="POST"
              data-netlify="true"
              action="/thanks.html"
              className="space-y-3"
            >
              <input
                type="hidden"
                name="form-name"
                value="internship-application"
              />

              <div>
                <label className="block text-xs text-slate-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
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
                  name="email"
                  required
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">
                  Current Status
                </label>
                <select
                  name="status"
                  required
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400"
                >
                  <option value="">Select...</option>
                  <option value="Student">Student</option>
                  <option value="Recent Graduate">Recent Graduate</option>
                  <option value="Working Professional">
                    Working Professional
                  </option>
                  <option value="Career Transition">Career Transition</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">
                  Preferred Internship Path
                </label>
                <select
                  name="path"
                  required
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400"
                >
                  <option value="">Select...</option>
                  <option value="AI Agent Intern">AI Agent Intern</option>
                  <option value="RPA Automation Intern">
                    RPA Automation Intern
                  </option>
                  <option value="Full Stack AI Intern">
                    Full Stack AI Intern
                  </option>
                  <option value="Need guidance">
                    Not sure, need guidance
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">
                  Tell us about your background
                </label>
                <textarea
                  rows={3}
                  name="about"
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
