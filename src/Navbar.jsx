// src/Navbar.jsx
import React from "react";

export default function Navbar() {
  const path =
    typeof window !== "undefined" ? window.location.pathname : "/";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur border-b border-white/10">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <img
            src="/DigynixLogo.png"
            alt="AIDT&D Logo"
            className="h-10 w-auto"
          />
          <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-cyan-400">
            AI • AUTOMATION • TRAINING
          </span>
        </div>

        <nav className="space-x-3 md:space-x-6 text-sm md:text-base font-medium">
          {/* Home */}
          <a
            href="/"
            className={
              "nav-pill " +
              (path === "/" ? "nav-pill--active" : "nav-pill--inactive")
            }
          >
            Home
          </a>

          {/* AI & Automation – anchor on Home (no active detection for now) */}
          <a
            href="/#services"
            className={"nav-pill nav-pill--inactive"}
          >
            AI &amp; Automation
          </a>

          {/* Courses */}
          <a
            href="/courses"
            className={
              "nav-pill " +
              (path === "/courses"
                ? "nav-pill--active"
                : "nav-pill--inactive")
            }
          >
            Courses
          </a>

          {/* Internships */}
          <a
            href="/internships"
            className={
              "nav-pill " +
              (path === "/internships"
                ? "nav-pill--active"
                : "nav-pill--inactive")
            }
          >
            Internships
          </a>
        </nav>
      </div>
    </header>
  );
}
