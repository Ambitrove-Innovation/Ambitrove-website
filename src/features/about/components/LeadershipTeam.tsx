import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Linkedin, VerifiedIcon } from "lucide-react";
import TeamMemberModal from "./TeamMemberModal";

interface LeadershipCard {
  image: string;
  alt: string;
  name: string;
  position: string;
  linkedInUrl: string;
  bio: string;
}

const LeadershipTeam = () => {
  const [selectedMember, setSelectedMember] = useState<LeadershipCard | null>(
    null
  );

  useGSAP(() => {
    gsap.fromTo(
      ".slide-right",
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", stagger: 0.2 }
    );
  }, []);

  const teamMembers: LeadershipCard[] = [
    {
      image: "/images/Team/Kamogelo-mogasoa.webp",
      alt: "Portrait of Kamogelo Mogasoa, Founder & CEO",
      name: "Kamogelo Mogasoa",
      position: "Founder & CEO",
      linkedInUrl: "https://www.linkedin.com/in/kamogelo-mogasoa-5021a52b1/",
      bio: `Kamogelo Mogasoa is a 22-year-old visionary and entrepreneur. He passed Matric with a Bachelor’s pass, pursued I.T at RichField Graduate Institute of Technology, and obtained a Higher Certificate with four distinctions graduated 29th May 2025. Although he paused studies due to financial reasons, his passion led him to software engineering. After joining the FNB App Academy in 2025, Kamogelo founded Ambitrove Innovation (Pty) Ltd a company focused on building innovative digital solutions and empowering young tech talent.`,
    },
    {
      image: "/images/Team/Dean.png",
      alt: "Portrait of Dean Meyer, Co-founder",
      name: "Dean Meyer",
      position: "Co-Founder & CTO",
      linkedInUrl: "https://www.linkedin.com/in/dean-meyer-385342247/",
      bio: `Dean Meyer is a passionate software engineer and technical innovator dedicated to building intelligent, scalable, and user-focused digital systems. He began his journey in software development during high school, where his early curiosity for coding and problem-solving quickly grew into a lifelong pursuit. After matriculating, Dean enrolled at university to study Application Development, where he built a strong foundation in Java, Python, web technologies, and mobile app development. His commitment to mastering both backend and frontend technologies, combined with his drive for excellence, set him apart as a self-taught achiever with professional discipline.`,
    },
    {
      image: "/images/Team/Emmanuel-Ambitrove.jpeg.jpg",
      alt: "Portrait of Emmanuel Bediako, CIO & Marketing Lead",
      name: "Emmanuel Bediako",
      position: "CIO & Marketing",
      linkedInUrl: "https://www.linkedin.com/in/emmanuel-bediako-1766b4305/",
      bio: `Emmanuel Bediako oversees Ambitrove’s information and marketing strategies, connecting brand vision with digital execution. His innovative approach bridges business growth and data-driven storytelling.`,
    },
    {
      image: "/images/Team/Phemelo.jpg",
      alt: "Portrait of Phemelo Mokone, Data Analyst",
      name: "Phemelo Mokone",
      position: "Data Analyst",
      linkedInUrl: "N/A",
      bio: `Phemelo Mokone specializes in data analysis and business intelligence, transforming complex datasets into actionable insights for Ambitrove’s strategic and client-focused decisions.`,
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 gradient-Green-bg" id="ourJourney">
      <div className="text-white min-h-screen py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center pop-up">
          {/* Left Text Column */}
          <div className="space-y-6 text-left fade-in">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold">
              Meet Our Leadership Team.
            </h1>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Our team is a dynamic blend of young, ambitious engineers and
                strategists united by a shared passion for innovation.
              </p>
              <p>
                We draw on diverse expertise to turn visions into reality,
                ensuring every project is executed with precision and
                creativity.
              </p>
            </div>
          </div>

          {/* Right Column - Team Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 slide-right">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-black hover:saturate-150 rounded-3xl transition-all hover:scale-105 border border-gray-600 flex flex-col items-center text-center pb-5 duration-300">
                <img
                  className="w-full h-60 rounded-t-3xl object-cover"
                  src={member.image}
                  alt={member.alt}
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1 flex items-center justify-center">
                    {member.name}{" "}
                    <span className="ml-1 text-green-500">
                      <VerifiedIcon size={16} />
                    </span>
                  </h3>
                  <p className="text-sm text-gray-400">{member.position}</p>

                  <div className="flex flex-col items-center mt-3 gap-2">
                    <a
                      href={member.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                      <Linkedin className="w-5 h-5" />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                    <button
                      onClick={() => setSelectedMember(member)}
                      className="mt-2 bg-green-600 text-white px-4 py-1 rounded-full text-sm hover:bg-green-700 transition-all">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <TeamMemberModal
        isOpen={!!selectedMember}
        onClose={() => setSelectedMember(null)}
        member={selectedMember}
      />
    </section>
  );
};

export default LeadershipTeam;
