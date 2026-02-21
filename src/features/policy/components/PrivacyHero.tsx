import { Shield, Calendar, Download } from "lucide-react";

const PrivacyHero = () => {
  return (
    <div id="introduction" className="fade-in">
      <div className="flex items-center gap-2 text-sm text-teal-600 mb-3">
        <Shield className="w-4 h-4" />
        <span className="font-medium">Legal & Privacy</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-inter font-bold mb-4">
        Privacy Policy
      </h1>

      <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
        <div className="flex items-center gap-1.5">
          <Calendar className="w-4 h-4" />
          <span>Last Updated: November 8, 2025</span>
        </div>
        <span>•</span>
        <span>Effective immediately for all visitors.</span>
      </div>

      <div className="rounded-lg p-6 border  mb-6 bg-neutral-900 border-neutral-800 hover:border-neutral-700 transition">
        <p className="text-gray-300 leading-relaxed mb-4">
          At <span className="font-semibold">Ambitrove Innovation</span>, your
          data privacy is paramount. We engineer solutions with security at the
          core. This Privacy Policy details how we collect, use, and safeguard
          your personal information across our SaaS platforms and digital
          services. Transparency is our code.
        </p>

        <a
          href="/documents/AmbitrovePrivacy-policy.pdf"
          download
          className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-br from-blue-500 to-teal-500 text-white text-sm font-inter font-medium rounded-lg transition-colors">
          <Download className="w-4 h-4" />
          Download Privacy Policy PDF
        </a>
      </div>
    </div>
  );
};

export default PrivacyHero;
