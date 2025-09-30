import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const OurJourney = () => {
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
    <section className="py-16 px-6 md:px-12" id="ourJourney">
      <div className="bg-gradient-radial from-green-400 text-white min-h-screen p-8 md:p-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16">
          
          {/*<!-- Left Column - Timeline -->*/}
          <div>
            {/*<!-- Header -->*/}
            <div className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h2 className="text-4xl font-bold">Our Journey</h2>
            </div>

            {/*<!-- Timeline -->*/}
            <div className="relative">
              {/*<!-- Vertical Line -->*/}
              <div className="absolute left-0 top-0 bottom-20 w-0.5 bg-gray-700 ml-4"></div>

              {/*<!-- Timeline Item 1 -->*/}
              <div className="relative flex gap-6 mb-16">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full border-4 border-gray-900 bg-white"></div>
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-semibold mb-1">July 2025</h3>
                  <p className="text-gray-400 mb-3">Ambitrove company initial creation.</p>
                  <p className="text-sm text-gray-400">
                    Writing company<br />documents & legal<br />structure.
                  </p>
                </div>
              </div>

              {/*<!-- Timeline Item 2 -->*/}
              <div className="relative flex gap-6 mb-16">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full border-4 border-gray-900 bg-white"></div>
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-semibold mb-1">Early August 2025</h3>
                  <p className="text-gray-400 mb-3">Building core team and foundational projects.</p>
                  <p className="text-sm text-gray-400">
                    Launched first<br/>Full-stack project.
                  </p>
                </div>
              </div>

              {/*<!-- Timeline Item 3 -->*/}
              <div className="relative flex gap-6 mb-16">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full border-4 border-gray-900 bg-white"></div>
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-semibold mb-1">Mid August 2025</h3>
                  <p className="text-gray-400">Designed Company's official website.</p>
                </div>
              </div>

              {/*<!-- Timeline Item 4 (Future) -->*/}
              <div className="relative flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full border-4 border-gray-900 bg-gray-600"></div>
                </div>
              </div>
            </div>
          </div>

          {/*<!-- Right Column - Mission & Vision -->*/}
          <div className="space-y-8">
            {/*<!-- Mission Section -->*/}
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission.</h2>
              <p className="text-gray-300 leading-relaxed">
                To empower businesses and entrepreneurs by delivering innovative digital products, 
                providing expert consulting services, and fostering a collaborative ecosystem where 
                creativity, technology, and business solutions converge driving impactful software 
                development and sustainable growth in South Africa and globally.
              </p>
            </div>

            {/*<!-- Vision Section -->*/}
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Vision.</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  To establish Ambitrove as a leading South African technology powerhouse, 
                  recognized for pioneering cutting-edge software solutions, advancing the 
                  digital economy, and shaping the future of tech in Africa through 
                  collaboration, excellence, and bold innovation.
                </p>
                <p>
                  We combine agility and affordability with close partnerships, using 
                  open-source technologies like React.js, Python, and cloud platforms 
                  (Netlify, Vercel, Firebase) to deliver high-impact results.
                </p>
                <p>
                  From custom software development and business consulting to ongoing 
                  maintenance and collaborative product building, we're here to help you 
                  scale while building lasting value.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurJourney;