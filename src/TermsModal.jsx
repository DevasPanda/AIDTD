import React from 'react';

const TermsModal = () => {
  return (
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
        For AI/ML training purposes, we may use anonymized data from student projects to improve our models. By participating, you agree to this aggregated data usage while maintaining individual project confidentiality.
      </p>

      <h3 className="font-semibold text-lg">6. Prohibited Uses</h3>
      <p>
        You may not use our AI/ML/RPA services to:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Create harmful or discriminatory AI models</li>
        <li>Automate processes that violate third-party terms</li>
        <li>Reverse engineer our proprietary technologies</li>
        <li>Deploy solutions without proper licensing</li>
      </ul>

      <h3 className="font-semibold text-lg">7. Service Modifications</h3>
      <p>
        As AI/ML/RPA technologies evolve rapidly, we reserve the right to modify program content, tools, and methodologies without prior notice to stay current with industry standards.
      </p>

      <h3 className="font-semibold text-lg">8. Limitation of Liability</h3>
      <p>
        Digynix shall not be liable for any outcomes resulting from the implementation of AI/ML/RPA solutions developed during our programs. Students and partners implement solutions at their own risk.
      </p>

      <h3 className="font-semibold text-lg">9. Governing Law</h3>
      <p>
        These terms shall be governed by the laws of [Your Jurisdiction], particularly regarding digital services, AI regulations, and intellectual property rights.
      </p>
    </div>
  );
};

export default TermsModal;