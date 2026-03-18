import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AmbitroveMeaning = () => {
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    gsap.from(".meaning-fade-in", {
      opacity: 0,
      y: 70,
      stagger: 0.3,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".meaning-section",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section
      className="meaning-section py-16 px-6 md:px-12 scroll-mt-24"
      id="our-identity"
      aria-labelledby="meaning-heading">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 meaning-fade-in">
          <h2
            id="meaning-heading"
            className="text-3xl md:text-4xl font-inter font-bold text-white mb-4">
            The Ambitrove Story
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Understanding the foundation of our name and mission
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN - Executive Team Image */}
          <div className="meaning-fade-in">
            <div className="relative overflow-hidden rounded-xl shadow-2xl border border-neutral-800 hover:border-white/50 transition-all duration-300">
              <img
                src="/images/Team/Executive_Group_Portrait.webp"
                alt="Ambitrove Innovation Executive Team - Leadership group photo showcasing our founders and key stakeholders"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width="600"
                height="400"
              />
              {/* Optional Overlay for Professional Look */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* RIGHT COLUMN - Text Content */}
          <div className="space-y-6 meaning-fade-in text-left">
            {/* Headline */}
            <h3 className="text-2xl md:text-3xl font-inter font-bold text-white text-left">
              The Slogan of Ambitrove
            </h3>

            {/* Sub-headline */}
            <p className="text-xl md:text-2xl font-inter font-medium italic text text-gradient bg-clip-text text-transparent bg-linear-to-r from-black via-white to-teal-500 max-w-3xl leading-snug sm:leading-tight">
              Where Ambition Meets Innovation
            </p>

            {/* Body Text */}
            <div className="space-y-4 text-gray-300 leading-relaxed text-left">
              <p className="text-left ">
                The name
                <span className="font-semibold text-white p-1">Ambitrove</span>
                is a portmanteau of our two founding pillars:
                <span className="font-semibold text-white pl-1">
                  Ambition
                </span>{" "}
                and <span className="font-semibold text-white">Trove</span>.
              </p>

              <p className="text-left">
                Derived from the Old French <em>trover</em> (meaning "to find"),
                a "trove" represents a valuable collection or a discovered
                treasure. When paired with our relentless drive for excellence,
                Ambitrove translates to
                <span className="font-semibold text-white pl-1">
                  "A Valuable Collection of Ambition."
                </span>
              </p>

              <p className="text-left">
                We believe that great digital solutions aren't just built; they
                are found at the intersection of bold vision and technical
                mastery. Our name serves as a promise that within our scope,
                every product we create is a treasure of high-level intent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmbitroveMeaning;
