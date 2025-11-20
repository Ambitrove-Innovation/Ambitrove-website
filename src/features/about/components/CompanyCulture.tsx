import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  Heart,
  Lightbulb,
  Award,
  Users,
  Target,
  Handshake,
} from "lucide-react";

const CompanyCulture = () => {
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    gsap.from(".culture-fade-in", {
      opacity: 0,
      y: 60,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".culture-section",
        start: "top 80%",
      },
    });
  }, []);

  const coreValues = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Integrity",
      description:
        "We act honestly and with transparency in everything we do. Trust is the foundation of every relationship we build.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description:
        "We strive for creative solutions, learning, and forward-thinking that pushes boundaries and challenges the status quo.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description:
        "We deliver the highest quality work and consistently improve, never settling for 'good enough' when we can achieve greatness.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Respect",
      description:
        "We treat others with dignity, empathy, and fairness, valuing diverse perspectives and creating an inclusive environment.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Accountability",
      description:
        "We take responsibility for our actions and outcomes, owning both our successes and our opportunities to learn.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Collaboration",
      description:
        "We believe in teamwork, shared success, and open communication that brings out the best in everyone.",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section
      className="culture-section py-16 px-6 md:px-12 bg-gradient-to-br from-neutral-900 via-black to-neutral-900"
      id="culture">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 culture-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Culture & Values
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At Ambitrove, our culture is built on six core values that guide
            every decision, every project, and every interaction. These
            principles define who we are and how we work.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="culture-fade-in bg-neutral-900 p-8 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
              {/* Icon with Gradient Background */}
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-white">{value.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Section - Culture Statement */}
        <div className="mt-16 culture-fade-in">
          <div className="bg-gradient-to-r from-teal-500/10 via-green-500/10 to-blue-500/10 p-8 md:p-12 rounded-2xl border border-teal-500/20">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">
              Why Our Culture Matters
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-gray-300">
              <div>
                <p className="leading-relaxed mb-4">
                  Our culture isn't just words on a page—it's the heartbeat of
                  Ambitrove. Every team member embodies these values, creating
                  an environment where innovation thrives, creativity is
                  celebrated, and excellence is the standard.
                </p>
                <p className="leading-relaxed">
                  We believe that great technology comes from great people
                  working together with shared purpose and mutual respect.
                </p>
              </div>
              <div>
                <p className="leading-relaxed mb-4">
                  Whether we're building a SaaS platform, consulting on digital
                  transformation, or collaborating with clients across
                  continents, our values guide us to deliver not just quality
                  solutions, but meaningful partnerships.
                </p>
                <p className="leading-relaxed">
                  This is how we're building South Africa's tech future—one
                  project, one relationship, one value at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyCulture;
