import React from "react";
import FadeInSection from "./FadeInSection";
import Navbar from "./Navbar";
import Footer from "./Footer";
import coursesContent from "../content/courses.json";

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
              {coursesContent.subtitle}
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold mb-3">
              {coursesContent.title}
            </h1>
            <p className="text-sm md:text-base text-slate-300 max-w-3xl mx-auto">
              {coursesContent.description}
            </p>
          </div>
        </FadeInSection>
      </section>

      {/* Tracks / cards */}
      <section className="pb-16 md:pb-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
          {coursesContent.courses.map((course, i) => {
            const colorClass = course.color || "cyan";
            const borderClass = course.featured
              ? `border-${colorClass}-400/40`
              : "border-white/10";
            const shadowClass = course.featured
              ? `shadow-[0_0_40px_rgba(${colorClass === 'cyan' ? '56,189,248' : colorClass === 'fuchsia' ? '236,72,153' : '34,197,94'},${colorClass === 'fuchsia' ? '0.18' : '0.25'})]`
              : "shadow-md shadow-slate-900/40";
            const buttonClass = course.featured
              ? `bg-${colorClass}-500 text-slate-950 hover:bg-${colorClass}-400`
              : "bg-slate-800 text-slate-100 hover:bg-slate-700";

            return (
              <FadeInSection
                key={i}
                className={i === 1 ? "delay-100" : i === 2 ? "delay-150" : i === 3 ? "delay-200" : ""}
              >
                <div className={`h-full rounded-3xl border ${borderClass} bg-slate-950/${course.featured ? '80' : '70'} p-6 md:p-7 backdrop-blur ${shadowClass}`}>
                  <p className={`text-xs uppercase tracking-[0.22em] text-${colorClass}-300 mb-2`}>
                    {course.level}
                  </p>
                  <h2 className="text-xl md:text-2xl font-semibold mb-2">
                    {course.name}
                  </h2>
                  <p className="text-sm text-slate-300 mb-4">
                    {course.description}
                  </p>
                  <ul className="text-xs md:text-sm text-slate-300 space-y-2 list-disc list-inside mb-4">
                    {course.topics.map((topic, j) => (
                      <li key={j}>{topic}</li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-slate-400 mb-4">
                    {course.idealFor}
                  </p>
                  <button
                    className={`mt-auto inline-flex items-center justify-center rounded-full ${buttonClass} px-4 py-2 text-xs font-semibold transition`}
                    onClick={() => window.dispatchEvent(new Event("openContactForm"))}
                  >
                    {course.buttonText}
                  </button>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </section>

      {/* FAQ / How it works */}
      <section className="pb-20 px-4 bg-slate-950">
        <FadeInSection>
          <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-[1.2fr,1fr] items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                {coursesContent.howItWorks.heading}
              </h2>
              <p className="text-sm md:text-base text-slate-300 mb-4">
                {coursesContent.howItWorks.description}
              </p>
              <ol className="space-y-3 text-sm text-slate-300 list-decimal list-inside">
                {coursesContent.howItWorks.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                {coursesContent.howItWorks.cta.heading}
              </h3>
              <p className="text-sm text-slate-300 mb-3">
                {coursesContent.howItWorks.cta.description}
              </p>
              <button className="w-full rounded-full bg-cyan-500 py-2.5 text-xs md:text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition" onClick={() => window.dispatchEvent(new Event("openContactForm"))}>
                {coursesContent.howItWorks.cta.buttonText}
              </button>
              <p className="mt-3 text-[11px] text-slate-500">
                {coursesContent.howItWorks.cta.disclaimer}
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
