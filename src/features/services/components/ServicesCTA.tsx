import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesCTA = () => (
  <section className="py-12 px-6 md:px-12">
    <div className="max-w-4xl mx-auto">
      <div className="bg-linear-to-r from-teal-500/10 to-green-500/10 p-8 md:p-12 rounded-2xl border border-teal-500/20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Need a Custom Solution?
        </h2>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Every business is unique. Let's discuss your specific requirements and
          create a tailored package that fits your needs and budget.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all">
          Get Custom Quote
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);
export default ServicesCTA;
