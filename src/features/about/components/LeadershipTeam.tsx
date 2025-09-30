import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Linkedin, VerifiedIcon } from "lucide-react"; // using lucide-react icons

interface LeadershipCard {
  image: string;
  alt: string;
  name: string;
  position: string;
  linkedInUrl: string;
}

const LeadershipTeam = () => {
  useGSAP(() => {
  gsap.fromTo(
  "pop-up",{
    opacity: 0,
    y: 20
  },
  {
    opacity: 1, 
    y: 0,
  }
);

  }, []);

  const teamMembers: LeadershipCard[] = [
    {
      image: "/images/Team/Kamogelo-mogasoa.webp",
      alt: "Kamogelo Mogasoa Founder of Ambitrove",
      name: "Kamogelo Mogasoa",
      position: "Founder & CEO",
      linkedInUrl: "https://www.linkedin.com/in/kamogelo-mogasoa-5021a52b1/"
    },
    {
      image: "/images/Team/Dean.png",
      alt: "Dean Meyer Co-founder",
      name: "Dean Meyer",
      position: "Co-Founder & CTO",
      linkedInUrl: "https://www.linkedin.com/in/dean-meyer-385342247/"
    },
    {
      image: "/images/Team/Emmanuel.jpg",
      alt: "Emmanuel Bediako CIO and Marketing lead",
      name: "Emmanuel Bediako",
      position: "CIO & Marketing",
      linkedInUrl: "https://www.linkedin.com/in/emmanuel-bediako-1766b4305/" 
    },
    {
      image: "/images/Team/Phemelo.jpg",
      alt: "Phemelo Mokone Data analyst",
      name: "Phemelo Mokone",
      position: "Data Analyst",
      linkedInUrl: "N/A"
    }
  ];


  return (
    <section className="py-16 px-6 md:px-12 gradient-Green-bg" id="ourJourney">
      <div className="text-white min-h-screen py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center pop-up">
          
          {/* Left Column - Text Content */}
          <div className="space-y-6 text-left">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold">Meet Our Leadership Team.</h1>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Our team is a dynamic blend of young, ambitious engineers and strategists 
                united by a shared passion for innovation.
              </p>
              <p>
                We draw on diverse expertise to turn visions into reality, ensuring every 
                project is executed with precision and creativity.
              </p>
            </div>
          </div>

          {/* Right Column - Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-black hover:saturate-150 rounded-3xl transition-all hover:scale-110 delay-300  pb-5 border-1 border-solid border-gray-500 flex flex-col items-center text-center hover:transform duration-300 pop-up"
              >
                <div className="w-fit h-full rounded overflow-hidden mb-4">
                  <img className="w-full h-full rounded-t-3xl object-cover" src={member.image} alt={member.alt} loading="lazy"/>
                </div>
                <h3 className="text-lg font-semibold mb-1 flex items-center justify-center">{member.name} <span className="ml-1 text-green-500"><VerifiedIcon size={16} /></span></h3>
                <p className="text-sm text-gray-400">{member.position}</p>
                <a
                  href={member.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a> 
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
