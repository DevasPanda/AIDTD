// src/Navbar.jsx
import React from "react";

export default function Navbar() {
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
          <a
            href="/"
            className="px-3 py-2 rounded-full hover:bg-slate-800 hover:text-cyan-300 transition-all"
          >
            Home
          </a>
          <a
            href="/#services"
            className="px-3 py-2 rounded-full hover:bg-slate-800 hover:text-cyan-300 transition-all"
          >
            AI & Automation
          </a>
          <a
            href="/courses"
            className="px-3 py-2 rounded-full hover:bg-slate-800 hover:text-cyan-300 transition-all"
          >
            Courses
          </a>
          <a
            href="/internships"
            className="px-3 py-2 rounded-full hover:bg-slate-800 hover:text-cyan-300 transition-all"
          >
            Internships
          </a>
        </nav>
      </div>
    </header>
  );
}
