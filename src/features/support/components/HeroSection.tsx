import { HelpCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center fade-in">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-6">
          <HelpCircle className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          How Can We Help You?
        </h1>
        <p className="text-xl text-gray-300">
          Find answers, get support, and learn how to make the most of
          Ambitrove's services.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
