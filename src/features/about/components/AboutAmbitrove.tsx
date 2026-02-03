import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AboutAmbitrove = () => {
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    gsap.from(".fade-in", {
      opacity: 0,
      y: 70,
      stagger: 0.3,
      duration: 1.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="fade-in py-16 px-6 md:px-12 scroll-mt-24" id="about">
      <div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        id="learn">
        {/* LEFT CONTENT */}
        <div className="space-y-6 text-left">
          <h2 className="text-2xl md:text-4xl shadow-2xl font-extrabold text-white">
            <span className="drop-shadow-lg">Ambitrove Innovation</span>
          </h2>

          <p className="text-xl md:text-2xl font-medium text-white leading-relaxed">
            Pioneering South Africa's Tech Future
          </p>

          <p className="text-gray-300 leading-relaxed">
            At Ambitrove Innovation, we're more than just a tech company — we're
            a South African-born force driving the next generation continent's
            digital revolution.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Founded by Kamogelo Mogasoa, alongside Co-Founder Dean Meyer and a
            team of strategic shareholders, Ambitrove brings together passionate
            professionals in software engineering, digital innovation, and
            business solutions.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Our ambition? To position South Africa as a global tech leader by
            transforming client ideas into scalable, impactful products.
          </p>

          <Button className="mt-4 px-6 py-2 rounded bg-transparent border border-white text-white hover:bg-white hover:text-black transition duration-300 md:w-35">
            <a href="#leadership_team">Meet the Team</a>
          </Button>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative w-full max-w-6xl mx-auto p-4 md:p-8">
          {/* TEAM IMAGE */}
          <div className="relative z-10 w-48 top-24 sm:top-32 md:top-0 sm:w-64 md:w-80">
            <img
              src="/images/team-office-640.webp"
              srcSet="
                /images/team-office-320.webp 320w,
                /images/team-office-640.webp 640w
              "
              sizes="(max-width: 768px) 192px, 320px"
              alt="Team collaboration"
              loading="lazy"
              decoding="async"
              width="320"
              height="480"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>

          {/* ABOUT IMAGE */}
          <div className="absolute top-32 sm:-top-32 md:-top-30 right-0 w-32 sm:w-40 md:w-50 z-20 -mt-30 md:mt-8 mr-4 md:mr-12">
            <img
              src="/images/about-pic-400.webp"
              srcSet="
                /images/about-pic-200.webp 200w,
                /images/about-pic-400.webp 400w
              "
              sizes="(max-width: 768px) 128px, 200px"
              alt="Professional meeting"
              loading="lazy"
              decoding="async"
              width="200"
              height="300"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAmbitrove;
