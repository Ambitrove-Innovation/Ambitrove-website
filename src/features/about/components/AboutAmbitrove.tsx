import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AboutAmbitrove = () => {
  useGSAP(() => {
    gsap.from(".fade-in", {
      opacity: 0,
      y: 70,
      stagger: 0.3,
      duration: 1.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="fade-in py-16 px-6 md:px-12" id="about">
      <div className="max-w-6xl mx-auto grid  md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 text-left">
            <h2 className="text-2xl md:text-4xl shadow-2xl font-extrabold text-white">
                About{" "}
                <span className="text-white drop-shadow-lg">Ambitrove</span>
            </h2>

          <p className="text-xl md:text-2xl font-medium text-white leading-relaxed">
            Pioneering South Africa's Tech Future
          </p>

          <p className="text-gray-300 leading-relaxed">
            At Ambitrove Innovation, we're more than just a tech company 
            we're a South African-born force driving the next generation 
            continent's digital revolution.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Founded by Kamogelo Mogasoa, alongside Co-Founder 
            Dean Meyer and a team of strategic shareholders, Ambitrove 
            brings together passionate professionals in software engineering, 
            digital innovation, and business solutions. 
          </p>

          <p className="text-gray-300 leading-relaxed">
            Our ambition? To position South Africa as a global tech leader 
            by transforming client ideas into scalable, impactful products.
          </p>

          <Button className="mt-4 px-6 py-2 rounded bg-transparent border border-white text-white hover:bg-white hover:text-black transition duration-300 md:w-35">
            Meet the Team
          </Button>
        </div>

        {/*
        <div className="relative w-full max-w-6xl mx-auto p-8">
            
            <div className="relative z-99 w-80 max-w-2xl">
                <img 
                src="/images/team office.jpg" 
                alt="Team collaboration" 
                className="w-full h-auto rounded-3xl shadow-2xl"
                />
            </div>
            
            
            <div className="absolute -top-30 right-0 w-50 max-w-md z-20 mt-8 mr-12">
                <img 
                src="/images/collegues.jpg" 
                alt="Professional meeting" 
                className="w-full h-auto rounded-3xl shadow-2xl"
                />
            </div>
        </div>
        */}

<div className="relative w-full max-w-6xl mx-auto p-4 md:p-8">
  {/* Background/Left Image - Smaller on mobile */}
  <div className="relative z-99 w-48 top-24 sm:top-32 md:top-0 sm:w-64 md:w-80 max-w-2xl">
    <img 
      src="/images/team office.jpg" 
      alt="Team collaboration" 
      className="w-full h-auto rounded-3xl shadow-2xl"
    />
  </div>
  
  {/* Foreground/Right Image - Smaller on mobile */}
  <div className="absolute top-32 sm:-top-32 md:-top-30 right-0 w-32 sm:w-40 md:w-50 max-w-md z-20 -mt-30 md:mt-8 mr-4 md:mr-12">
    <img 
      src="/images/collegues.jpg" 
      alt="Professional meeting" 
      className="w-full h-auto rounded-3xl shadow-2xl"
    />
  </div>
</div>
        </div>
    </section>
  );
};

export default AboutAmbitrove;