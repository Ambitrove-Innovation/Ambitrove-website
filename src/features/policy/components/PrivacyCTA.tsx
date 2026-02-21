import { Mail, Phone } from "lucide-react";

const PrivacyCTA = () => {
  return (
    <div
      id="contact"
      className="bg-linear-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 rounded-2xl p-8 md:p-10 text-white fade-in ">
      <h2 className="text-2xl md:text-3xl font-inter font-bold mb-3">
        Questions about your data?
      </h2>
      <p className="text-gray-300 mb-6 max-w-2xl">
        Our data protection officer is available to address any concerns
        regarding our privacy practices or if you wish to exercise your rights.
        We aim to respond within 24 hours.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 text-center justify-center">
        <a
          href="mailto:contact@ambitrove.com"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors">
          <Mail className="w-5 h-5" />
          Email DPO
        </a>
        <a
          href="tel:+27761972861"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold rounded-lg transition-colors">
          <Phone className="w-5 h-5" />
          Call Support
        </a>
      </div>
    </div>
  );
};

export default PrivacyCTA;
