// src/About.jsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FadeInSection from "./FadeInSection";
import aboutContent from "../content/about.json";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Navbar />

      {/* Hero / Mission & Vision */}
      <section className="pt-28 md:pt-32 pb-16 px-4 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
        <FadeInSection>
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 mb-3">
              {aboutContent.subtitle}
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold mb-4">
              {aboutContent.title.split('AI & Automation Talent')[0]}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">
                AI &amp; Automation Talent
              </span>
            </h1>
            <p className="text-sm md:text-base text-slate-300 max-w-3xl mx-auto">
              {aboutContent.description}
            </p>
          </div>
        </FadeInSection>

        {/* Mission & Vision cards */}
        <FadeInSection className="mt-10">
          <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-cyan-400/40 bg-slate-950/80 p-6 md:p-7 backdrop-blur shadow-[0_0_40px_rgba(56,189,248,0.25)] aidtd-float">
              <h2 className="text-xl md:text-2xl font-semibold mb-2 text-cyan-300">
                {aboutContent.mission.title}
              </h2>
              <p className="text-sm md:text-base text-slate-200 mb-2">
                {aboutContent.mission.description}
              </p>
              <p className="text-xs md:text-sm text-slate-400">
                {aboutContent.mission.details}
              </p>
            </div>

            <div className="rounded-3xl border border-fuchsia-400/40 bg-slate-950/80 p-6 md:p-7 backdrop-blur shadow-[0_0_40px_rgba(232,121,249,0.22)] aidtd-float">
              <h2 className="text-xl md:text-2xl font-semibold mb-2 text-fuchsia-300">
                {aboutContent.vision.title}
              </h2>
              <p className="text-sm md:text-base text-slate-200 mb-2">
                {aboutContent.vision.description}
              </p>
              <p className="text-xs md:text-sm text-slate-400">
                {aboutContent.vision.details}
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
                {aboutContent.story.heading}
              </h2>
              {aboutContent.story.paragraphs.map((para, i) => (
                <p key={i} className="text-sm md:text-base text-slate-300 mb-3">
                  {para}
                </p>
              ))}
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 md:p-6 backdrop-blur aidtd-float">
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-300 mb-2">
                At a glance
              </p>
              <ul className="space-y-3 text-sm text-slate-200">
                {aboutContent.story.highlights.map((highlight, i) => (
                  <li key={i}>
                    <span className="font-semibold text-cyan-300">
                      {highlight.title}
                    </span>{" "}
                    {highlight.description}
                  </li>
                ))}
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
              {aboutContent.whatWeDo.heading}
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {aboutContent.whatWeDo.services.map((service, i) => (
                <div key={i} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 backdrop-blur aidtd-float">
                  <h3 className={`text-lg font-semibold mb-2 text-${service.color}-300`}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 mb-3">
                    {service.description}
                  </p>
                  <ul className="text-xs text-slate-400 space-y-1.5 list-disc list-inside">
                    {service.features.map((feature, j) => (
                      <li key={j}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
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
                {aboutContent.values.heading}
              </h2>
              {aboutContent.values.paragraphs.map((para, i) => (
                <p key={i} className="text-sm md:text-base text-slate-300 mb-4">
                  {para}
                </p>
              ))}
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 backdrop-blur aidtd-float">
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-300 mb-3">
                Our Core Values
              </p>
              <ul className="space-y-2.5 text-sm text-slate-200">
                {aboutContent.values.coreValues.map((value, i) => (
                  <li key={i}>
                    <span className="font-semibold text-cyan-300">
                      {value.title}
                    </span>{" "}
                    {value.description}
                  </li>
                ))}
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
              {aboutContent.cta.heading}
            </h2>
            <p className="text-sm md:text-base text-slate-300 mb-6 max-w-2xl mx-auto">
              {aboutContent.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {aboutContent.cta.buttons.map((button, i) => (
                button.primary ? (
                  <a key={i} href={button.link}>
                    <button className="w-full sm:w-auto rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-2.5 text-sm font-semibold text-slate-950 hover:from-cyan-400 hover:to-fuchsia-400 transition shadow-lg">
                      {button.text}
                    </button>
                  </a>
                ) : (
                  <button
                    key={i}
                    onClick={() => window.dispatchEvent(new Event("openContactForm"))}
                    className="w-full sm:w-auto rounded-full border border-slate-600 px-6 py-2.5 text-sm font-semibold text-slate-100 hover:border-cyan-400 hover:text-cyan-300 transition"
                  >
                    {button.text}
                  </button>
                )
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      <Footer />
    </div>
  );
}
