import { Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center fade-in">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-br from-teal-500 to-green-500 rounded-full mb-6">
          <Zap className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Affordable, Scalable Solutions for South African Businesses
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Choose the perfect package for your business. From startups to
          enterprises, we've got you covered with transparent pricing and
          premium features.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
