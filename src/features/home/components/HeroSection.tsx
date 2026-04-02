import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageAnimations } from "@/hooks/usePageAnimations";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Use centralized animations for standard entry effects
  usePageAnimations(containerRef);

  return (
    <div 
      ref={containerRef}
      className="flex flex-col justify-center items-center text-center space-y-6 px-4 sm:px-8">
      <Button className="w-fit outline-1 outline-double bg-linear-to-r from-blue-950 via-teal-600 to-cyan-950 outline-gray rounded-full shadow-md shadow-cyan-500/50 transition-transform duration-300 hover:scale-105 ease-in-out">
        ✓ Trusted Innovative Solutions⚡
      </Button>
      
      <div className="slide-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-inter text-gradient bg-clip-text text-transparent bg-linear-to-r from-black via-white to-teal-500 max-w-3xl leading-snug sm:leading-tight">
          Enhancing your ideas with Innovative digital Solutions
        </h1>
      </div>
      
      <div className="slide-right">
        <p className="font-light text-base sm:text-lg md:text-2xl py-4 sm:py-5 max-w-xl mx-auto">
          You think it, we build it - with precision and creative digital
          solutions that build to scale.
        </p>
      </div>

      <Button
        asChild
        variant={"default"}
        className="outline-solid outline-1 outline-gray-500 text-sm sm:text-base md:text-lg font-semibold
        mt-4 px-6 py-2 bg-transparent border border-white text-white hover:bg-white hover:text-black transition duration-300 md:w-35">
        <Link to="/contact">Contact Us</Link>
      </Button>
    </div>
  );
};

export default HeroSection;
