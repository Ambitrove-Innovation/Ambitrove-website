import { Briefcase } from "lucide-react";

const HeroSection = () => {
  return (
    <header className="py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center fade-in">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-500 to-green-500 rounded-full mb-6">
          <Briefcase className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Build the Future with Us
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Join a team of passionate innovators building South Africa's tech
          future. We're always looking for talented individuals to help us
          create amazing digital solutions.
        </p>
      </div>
    </header>
  );
};

export default HeroSection;
