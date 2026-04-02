import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageAnimations } from "@/hooks/usePageAnimations";

const WhyChoose = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  // Use centralized animations
  usePageAnimations(containerRef);

  return (
    <section ref={containerRef} className=" py-16 px-6 md:px-12" id="about">
      <div className="max-w-6xl mx-auto grid  md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 text-left">
          <h2 className="text-2xl md:text-4xl shadow-2xl font-inter text-white fade-in">
            Why Choose{" "}
            <span className="text-white drop-shadow-lg">Ambitrove ?</span>
          </h2>

          <p className="text-xl md:text-2xl font-inter text-white leading-relaxed fade-in">
            ✓ Fostering client trust by solving real problems with great
            communication &amp; attention to detail
          </p>

          <p className="text-gray-300 leading-relaxed fade-in">
            As a South African tech powerhouse, we combine youthful ambition,
            technical prowess, and a client-centric mindset to deliver scalable
            solutions that drive real impact. Unlike traditional consultancies,
            we're agile partners focused on your success.
          </p>

          <p className="text-gray-300 leading-relaxed fade-in">
            We are not just building great software we are solving real
            problems with innovative solutions.
          </p>

          <Button
            asChild
            className="mt-4 px-6 py-2 rounded-full bg-transparent border border-white text-white hover:bg-white hover:text-black transition duration-300 rounded-tr-lg rounded-bl-lg md:w-35 fade-in">
            <Link
              to="/about"
              aria-label="Learn more about Ambitrove Innovation">
              Learn more
            </Link>
          </Button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end fade-in">
          <div className="overflow-hidden rounded-tr-[4rem] rounded-bl-[4rem] border-b-4 border-teal-500  shadow-xl shadow-black/40">
            <img
              src="/images/board-meeting.webp"
              alt="Team working on digital solutions"
              className="w-full h-auto object-cover rounded-tr-lg rounded-bl-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
