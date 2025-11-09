import { BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <header className="py-12 px-6 md:px-12 mt-4">
      <div className="max-w-4xl mx-auto text-center fade-in">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-6">
          <BookOpen className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Ambitrove Blog
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Insights, tutorials, and stories from our team about technology,
          innovation, and building the future of digital solutions.
        </p>
      </div>
    </header>
  );
};

export default HeroSection;
