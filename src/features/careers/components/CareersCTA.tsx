import { ArrowRight } from "lucide-react";

const CareersCTA = () => {
  return (
    <section className="py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-teal-500/10 to-green-500/10 p-8 md:p-12 rounded-2xl border border-teal-500/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't See a Perfect Fit?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We're always interested in meeting talented individuals. Send us
            your CV and let's talk about future opportunities.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all">
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CareersCTA;
