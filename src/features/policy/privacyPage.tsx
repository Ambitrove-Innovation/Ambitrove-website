import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Download, Shield } from "lucide-react";
import PrivacyMetaData from "./components/PrivacyMetaData";

const PrivacyPage = () => {
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    gsap.from(".fade-in", {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <>
      {/* SEO Metadata */}
      <PrivacyMetaData />

      {/* Hero Section */}
      <section className="py-16 px-6 md:px-12 mt-4">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-blue-500 to-teal-500 rounded-full mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            Your privacy matters to us. Learn how Ambitrove Innovation protects
            and manages your data.
          </p>
          <p className="text-sm text-gray-400 mb-6">
            Last Updated: November 8, 2025
          </p>

          {/* Download Button */}
          <a
            href="/documents/AmbitrovePrivacy-policy.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl">
            <Download className="w-5 h-5" />
            Download Privacy Policy PDF
          </a>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 px-6 md:px-12 mb-12">
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <div className="fade-in space-y-12 text-gray-300">
            {/* Introduction */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                1. Introduction
              </h2>
              <p className="leading-relaxed mb-4">
                Welcome to Ambitrove Innovation (Pty) Ltd ("Ambitrove," "we,"
                "us," or "our"). We are committed to protecting your personal
                information and your right to privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you visit our website or use our services.
              </p>
              <p className="leading-relaxed">
                By using our services, you agree to the collection and use of
                information in accordance with this policy. If you do not agree
                with our policies and practices, please do not use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                2. Information We Collect
              </h2>

              <h3 className="text-2xl font-semibold text-white mb-3 mt-6">
                Personal Information
              </h3>
              <p className="leading-relaxed mb-3">
                When you interact with our services, we may collect:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name and contact information (email, phone number)</li>
                <li>Company name and business information</li>
                <li>Payment and billing information</li>
                <li>Project requirements and specifications</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-2xl font-semibold text-white mb-3 mt-6">
                Automatically Collected Information
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on site</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                3. How We Use Your Information
              </h2>
              <p className="leading-relaxed mb-3">
                We use the information we collect or receive to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your transactions and manage projects</li>
                <li>
                  Communicate with you about services, updates, and marketing
                </li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Analyze usage patterns and optimize user experience</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </div>

            {/* Data Protection & Security */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                4. Data Protection & Security
              </h2>
              <p className="leading-relaxed mb-3">
                We implement appropriate technical and organizational security
                measures to protect your personal information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication protocols</li>
                <li>Employee training on data protection practices</li>
                <li>Secure cloud infrastructure and backups</li>
              </ul>
              <p className="leading-relaxed mt-4">
                However, no method of transmission over the internet is 100%
                secure. While we strive to protect your information, we cannot
                guarantee absolute security.
              </p>
            </div>

            {/* Your Rights (POPIA Compliance) */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                5. Your Rights Under POPIA
              </h2>
              <p className="leading-relaxed mb-3">
                As a South African company, we comply with the Protection of
                Personal Information Act (POPIA). You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal information we hold</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your data</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge a complaint with the Information Regulator</li>
              </ul>
              <p className="leading-relaxed mt-4">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href="mailto:contact@ambitrove.com"
                  className="text-teal-400 hover:text-teal-300 underline">
                  contact@ambitrove.com
                </a>
              </p>
            </div>

            {/* International Data Transfers */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                6. International Data Transfers
              </h2>
              <p className="leading-relaxed mb-3">
                Your information may be transferred to and maintained on servers
                located outside of South Africa. We ensure appropriate
                safeguards are in place for such transfers, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Using cloud providers with GDPR compliance</li>
                <li>Implementing standard contractual clauses</li>
                <li>Ensuring adequate data protection measures</li>
              </ul>
            </div>

            {/* Cookies and Tracking */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                7. Cookies and Tracking Technologies
              </h2>
              <p className="leading-relaxed mb-3">
                We use cookies and similar tracking technologies to track
                activity on our website and store certain information. You can
                instruct your browser to refuse all cookies or to indicate when
                a cookie is being sent.
              </p>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                8. Data Retention
              </h2>
              <p className="leading-relaxed">
                We retain your personal information only for as long as
                necessary to fulfill the purposes outlined in this Privacy
                Policy, unless a longer retention period is required or
                permitted by law.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                9. Changes to This Privacy Policy
              </h2>
              <p className="leading-relaxed">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last Updated" date. You are advised
                to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-linear-to-r from-blue-500/10 to-teal-500/10 p-8 rounded-2xl border border-blue-500/20 mt-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                10. Contact Us
              </h2>
              <p className="leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <div className="space-y-2">
                <p>
                  <strong className="text-white">Email:</strong>{" "}
                  <a
                    href="mailto:contact@ambitrove.com"
                    className="text-teal-400 hover:text-teal-300 underline">
                    contact@ambitrove.com
                  </a>
                </p>
                <p>
                  <strong className="text-white">Phone:</strong>{" "}
                  <a
                    href="tel:+27761972861"
                    className="text-teal-400 hover:text-teal-300">
                    +27 76 197 2861
                  </a>
                </p>
                <p>
                  <strong className="text-white">Address:</strong> Pretoria,
                  South Africa
                </p>
                <p>
                  <strong className="text-white">Company:</strong> Ambitrove
                  Innovation (Pty) Ltd
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;
