import { Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center fade-in">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full mb-6">
          <Shield className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-xl text-gray-300">
          Your privacy matters to us. Learn how Ambitrove Innovation protects
          and manages your data.
        </p>
        <p className="text-sm text-gray-400 mt-4">
          Last Updated: November 8, 2025
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
