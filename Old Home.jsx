import React, { useState } from "react";

export default function Home() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar with Logo + Ribbon */}
      <div className="relative">
        <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
          <div className="flex items-center space-x-2">
            <img src="/AIDT&DLogo.png" alt="AIDT&D Logo" className="h-14 w-auto" />
          </div>
          <nav className="space-x-6 text-base font-semibold text-gray-700">
            <a href="/" className="px-3 py-2 rounded-md hover:bg-orange-50 hover:text-orange-600 transition-all">Home</a>
            <a href="/courses" className="px-3 py-2 rounded-md hover:bg-orange-50 hover:text-orange-600 transition-all">Courses</a>
            <a href="/internships" className="px-3 py-2 rounded-md hover:bg-orange-50 hover:text-orange-600 transition-all">Internships</a>
          </nav>
        </header>
      </div>

      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-[url('/ai-tech-ribbon.png')] bg-cover bg-center text-white relative overflow-hidden">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Launch Your Digital Career with AIDT&D</h1>
        <p className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto">
          Learn AI, Automation, and Web Technologies with hands-on projects and real-world mentorship.
        </p>
        <div className="space-x-4">
          <a href="/courses#course-section"><button className="bg-white text-orange-600 font-semibold py-2 px-6 rounded-2xl shadow hover:bg-orange-100 transition">Explore Courses</button></a>
          <a href="/internships#apply-form"><button className="bg-black text-white font-semibold py-2 px-6 rounded-2xl shadow hover:bg-gray-800 transition">Apply for Internship</button></a>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose AIDT&D?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 rounded-2xl shadow-lg bg-orange-100">
            <h3 className="text-xl font-semibold mb-2">Project-Based Learning</h3>
            <p>Build real tools like AI Agents, automation bots, and dynamic web apps.</p>
          </div>
          <div className="p-6 rounded-2xl shadow-lg bg-orange-100">
            <h3 className="text-xl font-semibold mb-2">Mentorship & Internships</h3>
            <p>Work with industry experts and get certificate-backed internships.</p>
          </div>
          <div className="p-6 rounded-2xl shadow-lg bg-orange-100">
            <h3 className="text-xl font-semibold mb-2">Career-Focused Tracks</h3>
            <p>Upskill in GenAI, RPA, Web Dev, and prepare for future tech careers.</p>
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section className="py-16 px-4 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">GenAI Bootcamp</h3>
            <p>Master cutting-edge generative AI tools like GPT, Midjourney, and more. Build AI-first solutions.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">Automation Architect</h3>
            <p>Learn RPA tools, intelligent document processing, and AI-led automation strategies.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">Web Dev Accelerator</h3>
            <p>Front-end and full-stack training with React, Vite, Tailwind and API integrations.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 text-center bg-white">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-orange-50 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Step 1: Enroll</h3>
            <p>Choose your track and enroll in our next available cohort. It's simple and quick.</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Step 2: Learn & Build</h3>
            <p>Attend live sessions, access guided projects, and build a portfolio with mentorship support.</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Step 3: Launch</h3>
            <p>Complete your internship or capstone, earn your certificate, and launch your career.</p>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 px-4 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-8">Trusted by Future-Focused Teams</h2>
        <div className="flex flex-wrap justify-center gap-6 items-center max-w-5xl mx-auto">
          <div className="w-32 h-16 bg-white border rounded-xl flex items-center justify-center shadow-sm text-sm font-semibold text-gray-500">Company A</div>
          <div className="w-32 h-16 bg-white border rounded-xl flex items-center justify-center shadow-sm text-sm font-semibold text-gray-500">Company B</div>
          <div className="w-32 h-16 bg-white border rounded-xl flex items-center justify-center shadow-sm text-sm font-semibold text-gray-500">Company C</div>
          <div className="w-32 h-16 bg-white border rounded-xl flex items-center justify-center shadow-sm text-sm font-semibold text-gray-500">Company D</div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Students Say</h2>
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="italic mb-2">“AIDT&D gave me my first real-world project in AI. The mentorship helped me land a job.”</p>
            <p className="font-semibold">— Priya Sharma, AI Intern</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="italic mb-2">“I built a resume parser agent and added it to my portfolio. AIDT&D helped me stand out.”</p>
            <p className="font-semibold">— Arjun Patel, Automation Intern</p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 text-center bg-white">
        <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
        <p className="mb-6 text-lg text-gray-600">Subscribe to receive updates about our programs, events, and more.</p>
        <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-orange-600 transition"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-6 text-lg">Join hundreds of learners building real AI tools at AIDT&D.</p>
        <a href="/internships#apply-form"><button className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-2xl shadow hover:bg-orange-600 transition">Start Learning</button></a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-sm py-6 text-center mt-10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
          <p>© {new Date().getFullYear()} AIDT&D. All rights reserved.</p>
          <div className="space-x-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-white">Terms</a>
            <button onClick={() => setShowPrivacyModal(true)} className="hover:text-white underline">Privacy</button>
            <button onClick={() => setShowContactModal(true)} className="hover:text-white underline">Contact</button>
          </div>
        </div>
      </footer>

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
                At AIDT&D, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information.
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
              <p>If you have any questions regarding this policy, please contact us at privacy@AIDT&D.com.</p>
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
    </div>
  );
}
