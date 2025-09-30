import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const LeadershipTeam = () => {
  // GSAP animation can be added here if needed
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
      <div className="text-white min-h-screen py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/*<!-- Left Column - Text Content -->*/}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Meet Our Leadership Team.</h1>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Our team is a dynamic blend of young, ambitious engineers and strategists 
                unitedby a shared passion for innovation.
              </p>
              <p>
                We draw on diverse expertise to turn visions into reality, ensuring every 
                project is executed with precision and creativity.
              </p>
            </div>
          </div>

          {/*<!-- Right Column - Team Grid -->*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/*<!-- Team Member 1 -->*/}
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-6 border-2 border-dotted border-gray-600 flex flex-col items-center text-center">
              <div className="w-40 h-40 rounded overflow-hidden mb-4">
                <img src="/images/Team/Kamogelo.jpg" alt="Kamogelo Mogasoa" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Kamogelo Mogasoa</h3>
              <p className="text-sm text-gray-400">Founder & CEO</p>
            </div>

            {/*<!-- Team Member 2 -->*/}
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-6 border-2 border-dotted border-gray-600 flex flex-col items-center text-center">
              <div className="w-40 h-40 rounded overflow-hidden mb-4">
                <img src="/images/Team/Dean.png" alt="Dean Meyer" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Dean Meyer</h3>
              <p className="text-sm text-gray-400">Co-Founder & CTO</p>
            </div>

            {/*<!-- Team Member 3 -->*/}
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-6 border-2 border-dotted border-gray-600 flex flex-col items-center text-center">
              <div className="w-40 h-40 rounded overflow-hidden mb-4">
                <img src="/images/Team/Emmanuel.jpg" alt="Emmanuel Bediako" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Emmanuel Bediako</h3>
              <p className="text-sm text-gray-400">CIO & Marketing</p>
            </div>

            {/*<!-- Team Member 4 -->*/}
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-6 border-2 border-dotted border-gray-600 flex flex-col items-center text-center">
              <div className="w-40 h-40 rounded overflow-hidden mb-4">
                <img src="/images/Team/Phemelo.jpg" alt="Phemelo Mokone" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Phemelo Mokone</h3>
              <p className="text-sm text-gray-400">Data Analyst</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;