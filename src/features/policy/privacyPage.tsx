import Footer from "@/components/Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Shield, Lock, Eye, FileText, UserCheck, Globe } from "lucide-react";
import PrivacyMetaData from "./components/PrivacyMetaData";
import HeroSection from "./components/HeroSection";

const PrivacyPage = () => {
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    gsap.from(".fade-in", {
      opacity: 0,
      y: 70,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <>
      {/* SEO Metadata */}
      <PrivacyMetaData />

      {/* Hero Section */}
      <HeroSection />

      {/* Content Section */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction */}
          <div className="fade-in bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
            <div className="flex items-start gap-4">
              <div className="bg-blue-500/10 p-3 rounded-lg flex-shrink-0">
                <FileText className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Introduction
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Welcome to Ambitrove Innovation (Pty) Ltd ("Ambitrove," "we,"
                  "us," or "our"). We are committed to protecting your personal
                  information and your right to privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your
                  information when you visit our website or use our services.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  By using our services, you agree to the collection and use of
                  information in accordance with this policy. If you do not
                  agree with our policies and practices, please do not use our
                  services.
                </p>
              </div>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="fade-in bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
            <div className="flex items-start gap-4">
              <div className="bg-green-500/10 p-3 rounded-lg flex-shrink-0">
                <Eye className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Personal Information
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-2">
                      When you interact with our services, we may collect:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                      <li>
                        Name and contact information (email, phone number)
                      </li>
                      <li>Company name and business information</li>
                      <li>Payment and billing information</li>
                      <li>Project requirements and specifications</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Automatically Collected Information
                    </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                      <li>IP address and browser type</li>
                      <li>Device information and operating system</li>
                      <li>Pages visited and time spent on site</li>
                      <li>Referring website addresses</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="fade-in bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
            <div className="flex items-start gap-4">
              <div className="bg-purple-500/10 p-3 rounded-lg flex-shrink-0">
                <Lock className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We use the information we collect or receive:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>To provide, maintain, and improve our services</li>
                  <li>To process your transactions and manage projects</li>
                  <li>
                    To communicate with you about services, updates, and
                    marketing
                  </li>
                  <li>
                    To respond to your inquiries and provide customer support
                  </li>
                  <li>
                    To analyze usage patterns and optimize user experience
                  </li>
                  <li>To detect, prevent, and address technical issues</li>
                  <li>
                    To comply with legal obligations and protect our rights
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Protection & Security */}
          <div className="fade-in bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
            <div className="flex items-start gap-4">
              <div className="bg-red-500/10 p-3 rounded-lg flex-shrink-0">
                <Shield className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Data Protection & Security
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We implement appropriate technical and organizational security
                  measures to protect your personal information, including:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication protocols</li>
                  <li>Employee training on data protection practices</li>
                  <li>Secure cloud infrastructure and backups</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  However, no method of transmission over the internet is 100%
                  secure. While we strive to protect your information, we cannot
                  guarantee absolute security.
                </p>
              </div>
            </div>
          </div>

          {/* Your Rights (POPIA Compliance) */}
          <div className="fade-in bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
            <div className="flex items-start gap-4">
              <div className="bg-teal-500/10 p-3 rounded-lg flex-shrink-0">
                <UserCheck className="w-6 h-6 text-teal-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Your Rights Under POPIA
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  As a South African company, we comply with the Protection of
                  Personal Information Act (POPIA). You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Access your personal information we hold</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to processing of your data</li>
                  <li>Withdraw consent at any time</li>
                  <li>Lodge a complaint with the Information Regulator</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  To exercise any of these rights, please contact us at{" "}
                  <a
                    href="mailto:contact@ambitrove.com"
                    className="text-teal-400 hover:text-teal-300 underline">
                    contact@ambitrove.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* International Transfers */}
          <div className="fade-in bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-500/10 p-3 rounded-lg flex-shrink-0">
                <Globe className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  International Data Transfers
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Your information may be transferred to and maintained on
                  servers located outside of South Africa. We ensure appropriate
                  safeguards are in place for such transfers, including:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Using cloud providers with GDPR compliance</li>
                  <li>Implementing standard contractual clauses</li>
                  <li>Ensuring adequate data protection measures</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cookies & Tracking */}
          <div className="fade-in bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
            <h2 className="text-2xl font-bold text-white mb-4">
              Cookies & Tracking Technologies
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your
              experience. These include:
            </p>
            <div className="space-y-3">
              <div className="bg-neutral-800 p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-2">
                  Essential Cookies
                </h3>
                <p className="text-gray-300 text-sm">
                  Required for basic site functionality and security
                </p>
              </div>
              <div className="bg-neutral-800 p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-2">
                  Analytics Cookies
                </h3>
                <p className="text-gray-300 text-sm">
                  Help us understand how visitors interact with our website
                </p>
              </div>
              <div className="bg-neutral-800 p-4 rounded-lg">
                <h3 className="text-white font-semibold mb-2">
                  Marketing Cookies
                </h3>
                <p className="text-gray-300 text-sm">
                  Used to deliver relevant advertisements and track campaign
                  effectiveness
                </p>
              </div>
            </div>
          </div>

          {/* Third-Party Services */}
          <div className="fade-in bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
            <h2 className="text-2xl font-bold text-white mb-4">
              Third-Party Services
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may use third-party services that collect, monitor, and analyze
              data, including:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>EmailJS for contact form functionality</li>
              <li>Cloud hosting providers (Netlify, Vercel, Firebase)</li>
              <li>Analytics platforms for website performance</li>
              <li>Payment processors for billing services</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              These third parties have their own privacy policies. We encourage
              you to review their policies before providing any information.
            </p>
          </div>

          {/* Data Retention */}
          <div className="fade-in bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
            <h2 className="text-2xl font-bold text-white mb-4">
              Data Retention
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We retain your personal information only for as long as necessary
              to fulfill the purposes outlined in this Privacy Policy, unless a
              longer retention period is required or permitted by law. When data
              is no longer needed, we securely delete or anonymize it.
            </p>
          </div>

          {/* Children's Privacy */}
          <div className="fade-in bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
            <h2 className="text-2xl font-bold text-white mb-4">
              Children's Privacy
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our services are not intended for individuals under the age of 18.
              We do not knowingly collect personal information from children. If
              you believe we have collected information from a child, please
              contact us immediately.
            </p>
          </div>

          {/* Changes to Privacy Policy */}
          <div className="fade-in bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
            <h2 className="text-2xl font-bold text-white mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              and updating the "Last Updated" date. You are advised to review
              this policy periodically for any changes.
            </p>
          </div>

          {/* Contact Information */}
          <div className="fade-in bg-gradient-to-r from-blue-500/10 to-teal-500/10 p-8 rounded-2xl border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data
              practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-300">
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
                <strong className="text-white">Address:</strong> Pretoria, South
                Africa
              </p>
              <p>
                <strong className="text-white">Company:</strong> Ambitrove
                Innovation (Pty) Ltd
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PrivacyPage;
