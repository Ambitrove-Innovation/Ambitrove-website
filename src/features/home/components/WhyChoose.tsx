import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router";

const WhyChoose = () => {
  // GSAP animation can be added here if needed
  
useGSAP(() => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) return; // Skip animations if user disabled them

  gsap.from(".fade-in", {
    opacity: 0,
    y: 70,
    stagger: 0.3,
    duration: 1.2,
    ease: "power3.out",
  });
}, []);


  return (
    <section className=" py-16 px-6 md:px-12" id="about">
      <div className="max-w-6xl mx-auto grid  md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 text-left">
          <h2 className="text-2xl md:text-4xl  shadow-2xl font-extrabold text-white fade-in">
            Why Choose{" "}
            <span className="text-white drop-shadow-lg">Ambitrove ?</span>
          </h2>

          <p className="text-xl md:text-2xl font-medium text-white leading-relaxed">
            ✓ Fostering client trust by solving real problems with great
            communication &amp; attention to detail
          </p>

          <p className="text-gray-300 leading-relaxed">
            As a South African tech powerhouse, we combine youthful ambition,
            technical prowess, and a client-centric mindset to deliver scalable
            solutions that drive real impact. Unlike traditional consultancies,
            we're agile partners focused on your success.
          </p>

          <p className="text-gray-300 leading-relaxed">
            We are not just building great software — we are solving real
            problems with innovative solutions.
          </p>

        <Button asChild className="mt-4 px-6 py-2 rounded-full bg-transparent border border-white text-white hover:bg-white hover:text-black transition duration-300 rounded-tr-lg rounded-bl-lg md:w-35">
          <Link to="/about" aria-label="Learn more about Ambitrove Innovation">Learn more</Link>
        </Button>

        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <div className="overflow-hidden rounded-tr-[4rem] rounded-bl-[4rem] border-b-4 border-teal-500  shadow-xl shadow-black/40">
            <img
              src="/images/board-meeting.jpg"
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
