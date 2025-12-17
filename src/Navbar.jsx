// src/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const path =
    typeof window !== "undefined" ? window.location.pathname : "/";

  const baseLink = "nav-pill";
  const active = "nav-pill--active";
  const inactive = "nav-pill--inactive";

  const handleNavClick = () => {
    // close mobile menu after navigation
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        {/* Logo + brand */}
        <div className="flex items-center space-x-3">
          <div className="aidtd-logo-wrapper">
            <img
              src="/AIDTDLogo.png"
              alt="AIDT&D Logo"
              className="h-9 w-auto md:h-10"
            />
            <span className="aidtd-logo-star">✦</span>
          </div>
          <span className="hidden sm:inline text-[10px] md:text-xs uppercase tracking-[0.25em] text-cyan-400">
            AI • AUTOMATION • TRAINING
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-3 md:space-x-4 text-sm md:text-base font-medium">
          {/* Home */}
          <Link
            to="/"
            className={`${baseLink} ${
              path === "/" ? active : inactive
            }`}
          >
            Home
          </Link>

          {/* AI & Automation – section on Home */}
          <Link
            to="/#services"
            className={`${baseLink} ${inactive}`}
          >
            AI &amp; Automation
          </Link>

          {/* Courses */}
          <Link
            to="/courses"
            className={`${baseLink} ${
              path === "/courses" ? active : inactive
            }`}
          >
            Courses
          </Link>

          {/* Internships */}
          <Link
            to="/internships"
            className={`${baseLink} ${
              path === "/internships" ? active : inactive
            }`}
          >
            Internships
          </Link>

          {/* About */}
          <Link
            to="/about"
            className={`${baseLink} ${
              path === "/about" ? active : inactive
            }`}
          >
            About us
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-700 px-2.5 py-2 text-slate-200"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Toggle menu</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 rounded-full bg-slate-200 transition-transform ${
                open ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-4 rounded-full bg-slate-400 transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-slate-200 transition-transform ${
                open ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur">
          <nav className="flex flex-col px-4 py-3 space-y-2 text-sm font-medium">
            <Link
              to="/"
              onClick={handleNavClick}
              className={`${baseLink} w-max ${
                path === "/" ? active : inactive
              }`}
            >
              Home
            </Link>
            <Link
              to="/#services"
              onClick={handleNavClick}
              className={`${baseLink} w-max ${inactive}`}
            >
              AI &amp; Automation
            </Link>
            <Link
              to="/courses"
              onClick={handleNavClick}
              className={`${baseLink} w-max ${
                path === "/courses" ? active : inactive
              }`}
            >
              Courses
            </Link>
            <Link
              to="/internships"
              onClick={handleNavClick}
              className={`${baseLink} w-max ${
                path === "/internships" ? active : inactive
              }`}
            >
              Internships
            </Link>
            <Link
              to="/about"
              onClick={handleNavClick}
              className={`${baseLink} w-max ${
                path === "/about" ? active : inactive
              }`}
            >
              About us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
