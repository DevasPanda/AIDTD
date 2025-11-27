import React from "react";

export default function Footer({ setShowPrivacyModal, setShowTermsModal, setShowContactModal }) {
  return (
    <footer className="bg-[#141819] text-slate-300 pt-16 pb-8 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-white">✦</span>
              <span className="text-xl font-semibold text-white">AIDT&amp;D</span>
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
              <li className="hover:text-cyan-400 transition">RPA Consulting</li>
              <li className="hover:text-cyan-400 transition">IDP Solutions</li>
              <li className="hover:text-cyan-400 transition">Integration Services</li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-white font-semibold mb-4">Technologies</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-cyan-400 transition">Automation Anywhere</li>
              <li className="hover:text-cyan-400 transition">UiPath</li>
              <li className="hover:text-cyan-400 transition">Power Platform</li>
              <li className="hover:text-cyan-400 transition">ABBYY Vantage</li>
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
                onClick={() => setShowContactModal && setShowContactModal(true)}
                className="hover:text-cyan-400 transition cursor-pointer"
              >
                Contact
              </li>
              <li
                onClick={() => setShowPrivacyModal && setShowPrivacyModal(true)}
                className="hover:text-cyan-400 transition cursor-pointer"
              >
                Privacy Policy
              </li>
              <li
                onClick={() => setShowTermsModal && setShowTermsModal(true)}
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
  );
}
