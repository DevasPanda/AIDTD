// src/Footer.jsx
import React, { useState } from "react";

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <footer className="bg-[#141819] text-slate-300 pt-16 pb-8 mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand Column */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold text-white">✦</span>
                <span className="text-xl font-semibold text-white">
                  AIDT&amp;D
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Empowering the future with AI and automation excellence.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-cyan-400 transition">AI Training</li>
                <li className="hover:text-cyan-400 transition">
                  RPA Consulting
                </li>
                <li className="hover:text-cyan-400 transition">IDP Solutions</li>
                <li className="hover:text-cyan-400 transition">
                  Integration Services
                </li>
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-white font-semibold mb-4">Technologies</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-cyan-400 transition">
                  Automation Anywhere
                </li>
                <li className="hover:text-cyan-400 transition">UiPath</li>
                <li className="hover:text-cyan-400 transition">
                  Power Platform
                </li>
                <li className="hover:text-cyan-400 transition">
                  ABBYY Vantage
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-cyan-400 transition cursor-pointer">
                  About Us
                </li>
                <li className="hover:text-cyan-400 transition cursor-pointer">
                  Careers
                </li>
                <li
                  onClick={() => setShowContact(true)}
                  className="hover:text-cyan-400 transition cursor-pointer"
                >
                  Contact
                </li>
                <li
                  onClick={() => setShowPrivacy(true)}
                  className="hover:text-cyan-400 transition cursor-pointer"
                >
                  Privacy Policy
                </li>
                <li
                  onClick={() => setShowTerms(true)}
                  className="hover:text-cyan-400 transition cursor-pointer"
                >
                  Terms &amp; Conditions
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-12 mb-6 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

          {/* Bottom Row */}
          <div className="text-center text-sm text-slate-400">
            © {new Date().getFullYear()} AIDT&amp;D. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {showContact && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="max-w-lg w-full rounded-2xl bg-slate-950 border border-slate-700 p-6 shadow-xl">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold text-slate-100">
                Contact AIDT&amp;D
              </h2>
              <button
                onClick={() => setShowContact(false)}
                className="text-slate-400 hover:text-slate-200 text-sm"
              >
                ✕
              </button>
            </div>

            {/* Netlify-wired contact form */}
            <form
                name="contact"
                action="/pages/success"
                method="POST"
                data-netlify="true"
            >
              {/* Netlify required hidden field */}
              <input type="hidden" name="form-name" value="contact" />

              <div>
                <label className="block text-xs text-slate-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
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
                  Message
                </label>
                <textarea
                  rows={3}
                  name="message"
                  required
                  className="w-full rounded-lg bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowContact(false)}
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

      {/* Privacy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="max-w-lg w-full rounded-2xl bg-slate-950 border border-slate-700 p-6 shadow-xl">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold text-slate-100">
                Privacy Policy
              </h2>
              <button
                onClick={() => setShowPrivacy(false)}
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
                onClick={() => setShowPrivacy(false)}
                className="px-4 py-1.5 rounded-full bg-cyan-500 text-slate-950 text-xs font-semibold hover:bg-cyan-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Terms Modal */}
      {showTerms && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="max-w-lg w-full rounded-2xl bg-slate-950 border border-slate-700 p-6 shadow-xl">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold text-slate-100">
                Terms &amp; Conditions
              </h2>
              <button
                onClick={() => setShowTerms(false)}
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
                onClick={() => setShowTerms(false)}
                className="px-4 py-1.5 rounded-full bg-cyan-500 text-slate-950 text-xs font-semibold hover:bg-cyan-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
