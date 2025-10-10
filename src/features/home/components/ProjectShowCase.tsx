import { Link } from "react-router-dom";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

const ProjectShowCase = () => {
//   useGSAP(() => {
//   // H1 from left
//   gsap.from(".showIn-h1", {
//     x: -100,
//     opacity: 0,
//     duration: 1.2,
//     ease: "power3.out",
//   });

//   // H2 from bottom
//   gsap.from(".showIn-h2", {
//     y: 50,
//     opacity: 0,
//     duration: 1.2,
//     ease: "power3.out",
//     delay: 0.2,
//   });

//   // Paragraph from right
//   gsap.from(".showIn-p", {
//     x: 100,
//     opacity: 0,
//     duration: 1.2,
//     ease: "power3.out",
//     delay: 0.4,
//   });

//   // Image slides in from right
//   gsap.fromTo(
//   ".showIn-image",
//   { x: 100, opacity: 0 }, // start
//   { x: 0, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.5 } // end

// );
// }, []);


  return (
    <section className="flex flex-row items-center px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">

          {/* Left Content */}
          
          <div className="lg:col-span-7 xl:col-span-6 text-white space-y-6 sm:space-y-8 md:space-y-6 order-2 lg:order-1 showIn-text">
            <h1 className="showIn-h1 text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-4xl font-bold leading-[1.1] sm:leading-[1.2]">
              Building fully functional modern software applications.
            </h1>

            <div className="space-y-4 sm:space-y-5 md:space-y-2">
              <h2 className="showIn-h2 text-xl sm:text-2xl md:text-2xl lg:text-xl xl:text-2xl font-semibold  ">
                South African Excellence:
              </h2>
              <p className="showIn-p text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl text-gray-300 leading-relaxed max-w-xl xl:max-w-2xl">
                Leveraging our local talent pool, we're building the future of
                tech in Africa while serving global clients with quality and
                collaboration.
              </p>
            </div>

            <div className="pt-2 sm:pt-4">
              <button className="inline-flex items-center px-8 py-4 sm:px-10 sm:py-2 md:px-10 md:py-3 border-2 border-teal-400 text-teal-400 rounded-full font-semibold text-base sm:text-lg hover:bg-teal-400 hover:text-gray-900 hover:shadow-lg hover:shadow-teal-400/25 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-400/30">
                <Link to="https://puter.com/app/ambitrove-ai-resume-analyzer" target="_blank" rel="noopener noreferrer">
                  Explore Our Apps
                </Link>
              </button>
            </div>
          </div>

          {/* Right Content - Project Image */}
          <div className="lg:col-span-5 xl:col-span-6 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
              <div className="relative group py-12">

            <Link to="https://puter.com/app/ambitrove-ai-resume-analyzer" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/Project showcase.webp"
                  alt="ATSResume Review Application"
                  className="relative  w-4xl rounded-xl transform group-hover:scale-[1.02] transition-all duration-500 object-contain showIn-image"
                  loading="lazy"
                /> 
                </Link>
              </div>
               <div className="relative group">
                <Link to="https://mocktail-site.vercel.app/#home" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/images/Fiverr-display.webp"
                    alt="A open bar website design"
                    className="relative  w-4xl rounded-xl transform group-hover:scale-[1.02] transition-all duration-500 object-contain showIn-image"
                    loading="lazy"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowCase;