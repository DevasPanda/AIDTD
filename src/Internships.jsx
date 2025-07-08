import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import emailjs from "emailjs-com";

export default function Internships() {
  const location = useLocation();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  // New modal visibility states
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill out all fields.");
      return;
    }

    emailjs
      .send("service_ua069ig", "template_qlil", formData, "ryDEK3cJCRx0E")
      .then(() => {
        setFormData({ name: "", email: "", message: "" });
        setShowThankYou(true);
      })
      .catch(() => {
        setError("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 relative">
      {showThankYou && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm text-center">
            <h2 className="text-2xl font-bold mb-2 text-green-600">Thank you!</h2>
            <p className="mb-4 text-gray-700">
              Your application has been submitted successfully. We'll get back to you shortly.
            </p>
            <button
              onClick={() => setShowThankYou(false)}
              className="bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-40">
        <div className="flex items-center space-x-2">
          <img src="/DigynixLogo.png" alt="Digynix Logo" className="h-14 w-auto" />
        </div>
        <nav className="space-x-6 text-base font-semibold text-gray-700">
          <Link
            to="/"
            className={`px-3 py-2 rounded-md transition-all ${
              location.pathname === "/" ? "text-orange-600 bg-orange-50" : "hover:bg-orange-50 hover:text-orange-600"
            }`}
          >
            Home
          </Link>
          <Link
            to="/courses"
            className={`px-3 py-2 rounded-md transition-all ${
              location.pathname === "/courses" ? "text-orange-600 bg-orange-50" : "hover:bg-orange-50 hover:text-orange-600"
            }`}
          >
            Courses
          </Link>
          <Link
            to="/internships"
            className={`px-3 py-2 rounded-md transition-all ${
              location.pathname === "/internships" ? "text-orange-600 bg-orange-50" : "hover:bg-orange-50 hover:text-orange-600"
            }`}
          >
            Internships
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-20 px-4 bg-gradient-to-r from-orange-400 to-red-500 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Internship Opportunities</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Apply your skills in real-world projects, earn experience, and boost your career with Digynix internships.
        </p>
      </section>

      {/* Internship Details */}
      <section className="py-16 px-4 text-center bg-white">
        <h2 className="text-3xl font-bold mb-10">Current Internship Tracks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-orange-50 p-6 rounded-2xl shadow hover:shadow-lg transition text-left">
            <h3 className="text-xl font-bold mb-2">AI Agent Development</h3>
            <p className="mb-2">Work on real-world GenAI agents for document processing, chatbots, and automation copilots.</p>
            <ul className="text-sm list-disc list-inside text-gray-600">
              <li>OpenAI API + LangChain</li>
              <li>Vector DBs + Prompt Tuning</li>
              <li>Business Problem Mapping</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-6 rounded-2xl shadow hover:shadow-lg transition text-left">
            <h3 className="text-xl font-bold mb-2">RPA & Automation</h3>
            <p className="mb-2">Deploy bots and automate document flows using Automation Anywhere and ABBYY Vantage.</p>
            <ul className="text-sm list-disc list-inside text-gray-600">
              <li>Automation Anywhere A360</li>
              <li>ABBYY Vantage IDP</li>
              <li>REST API + Email Automation</li>
              <li>Computer Vision + Table Extraction</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-6 rounded-2xl shadow hover:shadow-lg transition text-left">
            <h3 className="text-xl font-bold mb-2">Web Development</h3>
            <p className="mb-2">Build real client-facing sites using modern web technologies and deployment stacks.</p>
            <ul className="text-sm list-disc list-inside text-gray-600">
              <li>React, Tailwind, Vite</li>
              <li>GitHub + Netlify + CI/CD</li>
              <li>Project Showcase & Mentorship</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Internship Benefits */}
      <section className="py-16 px-4 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose a Digynix Internship?</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Hands-On Projects</h3>
            <p>
              Contribute to live projects and build tools that solve real business problems using AI and Automation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">1:1 Mentorship</h3>
            <p>Receive personalized guidance from senior architects, developers, and automation specialists.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Career Support</h3>
            <p>Build your portfolio, get LinkedIn-ready assets, and receive certificates to boost your job prospects.</p>
          </div>
        </div>
      </section>

      {/* Apply Now */}
      <section id="apply-form" className="py-16 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Apply Now</h2>
        <p className="mb-6 text-gray-600 text-lg max-w-2xl mx-auto">
          Fill out the form below to express your interest in our internship programs. We’ll get back to you shortly with next steps.
        </p>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <textarea
            name="message"
            placeholder="Tell us why you're interested..."
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-orange-600 transition"
          >
            Submit Application
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-sm py-6 text-center mt-10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
          <p>© {new Date().getFullYear()} Digynix. All rights reserved.</p>
          <div className="space-x-4 mt-2 sm:mt-0">
            {/* Updated links to open modals */}
            <button
              onClick={() => setShowTermsModal(true)}
              className="hover:text-white focus:outline-none"
              type="button"
            >
              Terms
            </button>
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="hover:text-white focus:outline-none"
              type="button"
            >
              Privacy
            </button>
            <button
              onClick={() => setShowContactModal(true)}
              className="hover:text-white focus:outline-none"
              type="button"
            >
              Contact
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full shadow-lg relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="absolute top-2 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
            <div className="text-gray-700 text-sm space-y-4">
              <p>
                At Digynix, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information.
              </p>

              <h3 className="font-semibold">1. Information We Collect</h3>
              <p>We may collect personal data including name, email address, phone number, and usage data through our forms, programs, and tracking tools.</p>

              <h3 className="font-semibold">2. Use of Information</h3>
              <p>Your data is used to provide course updates, internship opportunities, newsletters, and personalized experiences on our platform.</p>

              <h3 className="font-semibold">3. Non-Disclosure Agreement (NDA)</h3>
              <p>
                As part of our internship and project collaborations, you may be required to sign a Non-Disclosure Agreement (NDA). This ensures confidentiality and protection of intellectual property and proprietary information shared during the engagement.
              </p>

              <h3 className="font-semibold">4. Data Sharing</h3>
              <p>We do not sell your personal data. We may share it with trusted partners only when necessary to deliver our services and in accordance with confidentiality terms.</p>

              <h3 className="font-semibold">5. Data Security</h3>
              <p>We implement industry-standard security measures to protect your information from unauthorized access, misuse, or disclosure.</p>

              <h3 className="font-semibold">6. Your Rights</h3>
              <p>
                You have the right to access, update, or delete your personal information. You can also unsubscribe from communications at any time.
              </p>

              <h3 className="font-semibold">7. Policy Updates</h3>
              <p>We may update this policy periodically. Continued use of our services constitutes acceptance of the revised policy.</p>

              <h3 className="font-semibold">8. Contact</h3>
              <p>If you have any questions regarding this policy, please contact us at support@digynix.com.</p>
            </div>
            <div className="text-right mt-6">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Us Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-lg relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-2 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for reaching out! We will get back to you soon.");
                setShowContactModal(false);
              }}
              className="space-y-4 text-gray-700"
            >
              <div>
                <label htmlFor="name" className="block font-semibold mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-semibold mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder="Write your message here..."
                />
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full shadow-lg relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowTermsModal(false)}
              className="absolute top-2 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
            <div className="text-gray-700 text-sm space-y-4">
              <h3 className="font-semibold text-lg">1. Acceptance of Terms</h3>
              <p>
                By accessing or using Digynix's AI, ML, and RPA training services, you agree to comply with these Terms of Service. These terms govern your participation in our programs, internships, and use of any related technologies.
              </p>

              <h3 className="font-semibold text-lg">2. AI/ML Service Provisions</h3>
              <p>
                Our AI and Machine Learning services include but are not limited to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Training on generative AI tools (GPT, Midjourney, etc.)</li>
                <li>Development of custom AI models and agents</li>
                <li>Implementation of ML solutions for business automation</li>
                <li>Ethical AI development practices and compliance guidelines</li>
              </ul>

              <h3 className="font-semibold text-lg">3. RPA Service Terms</h3>
              <p>
                Our Robotic Process Automation services are subject to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>License restrictions on proprietary automation scripts</li>
                <li>Compliance with target system terms of service</li>
                <li>Non-compete clauses for custom automation solutions</li>
                <li>Data processing agreements for automation workflows</li>
              </ul>

              <h3 className="font-semibold text-lg">4. Intellectual Property</h3>
              <p>
                All AI models, automation scripts, and training materials provided by Digynix remain our intellectual property. Students and interns may use these solely for educational purposes during the program.
              </p>

              <h3 className="font-semibold text-lg">5. Data Usage for AI Training</h3>
              <p>
                For AI/ML training purposes, we may use anonymized data from student projects to improve our models. By participating, you consent to this limited data usage under strict privacy protocols.
              </p>

              <h3 className="font-semibold text-lg">6. Internship Agreement</h3>
              <p>
                Interns agree to abide by company policies, confidentiality agreements (NDAs), and project deadlines. Non-compliance may result in termination of internship privileges.
              </p>

              <h3 className="font-semibold text-lg">7. Limitation of Liability</h3>
              <p>
                Digynix is not liable for any direct or indirect damages arising from the use of our services, training, or automation solutions.
              </p>

              <h3 className="font-semibold text-lg">8. Governing Law</h3>
              <p>
                These terms are governed by the laws of the jurisdiction where Digynix operates.
              </p>

              <h3 className="font-semibold text-lg">9. Changes to Terms</h3>
              <p>
                We reserve the right to update these Terms of Service at any time. Continued use of services constitutes acceptance of the updated terms.
              </p>

              <h3 className="font-semibold text-lg">10. Contact Us</h3>
              <p>
                For questions regarding these terms, please contact support@digynix.com.
              </p>
            </div>
            <div className="text-right mt-6">
              <button
                onClick={() => setShowTermsModal(false)}
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}