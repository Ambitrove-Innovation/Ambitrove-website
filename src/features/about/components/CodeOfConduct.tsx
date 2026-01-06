import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  Shield,
  CheckCircle,
  XCircle,
  Users,
  Lock,
  AlertTriangle,
} from "lucide-react";

const CodeOfConduct = () => {
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    gsap.from(".conduct-fade-in", {
      opacity: 0,
      y: 60,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".conduct-section",
        start: "top 80%",
      },
    });
  }, []);

  const expectedBehaviors = [
    "Represent the company professionally in communication and conduct",
    "Be punctual, reliable, and committed to delivering quality results",
    "Maintain confidentiality with all sensitive client or internal information",
    "Encourage constructive feedback, open dialogue, and team collaboration",
    "Comply with all legal and ethical guidelines, including contracts and NDAs",
  ];

  const unacceptableBehaviors = [
    "Discrimination, harassment, or bullying of any kind",
    "Dishonesty, plagiarism, or misrepresentation of skills or results",
    "Misuse of company resources, funds, data, or access credentials",
    "Toxic behaviour, aggression, or failure to collaborate respectfully",
    "Breach of confidentiality or leaking of client/internal information",
  ];

  const clientPrinciples = [
    {
      title: "Transparency & Honesty",
      description:
        "Clear communication in all pricing, proposals, and commitments",
    },
    {
      title: "Quality Delivery",
      description: "Meeting agreed standards and timelines consistently",
    },
    {
      title: "Respect for Privacy",
      description: "Protecting client privacy and intellectual property",
    },
    {
      title: "Proactive Communication",
      description: "Prompt communication and problem-solving",
    },
  ];

  return (
    <section
      className="conduct-section py-16 px-6 md:px-12 bg-black"
      id="conduct">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 conduct-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20  bg-linear-to-r from-blue-500 to-purple-500 rounded-full mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Code of Conduct & Ethics
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our commitment to integrity, professionalism, and ethical excellence
            in every interaction and every project.
          </p>
        </div>

        {/* Expected Behavior Section */}
        <div className="mb-12 conduct-fade-in">
          <div className=" bg-linear-to-r from-green-500/10 to-teal-500/10 p-8 md:p-10 rounded-2xl border border-green-500/20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-green-500" />
              <h3 className="text-3xl font-bold text-white">
                Expected Behaviour
              </h3>
            </div>
            <p className="text-gray-300 mb-6">
              All Ambitrove team members must uphold these professional
              standards:
            </p>
            <ul className="space-y-4">
              {expectedBehaviors.map((behavior, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center gap-3 text-gray-300 leading-relaxed">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                  <span>{behavior}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Unacceptable Behavior Section */}
        <div className="mb-12 conduct-fade-in">
          <div className="bg-linear-to-r from-red-500/10 to-orange-500/10 p-8 md:p-10 rounded-2xl border border-red-500/20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <XCircle className="w-8 h-8 text-red-500" />
              <h3 className="text-3xl font-bold text-white">
                Unacceptable Behaviour
              </h3>
            </div>
            <p className="text-gray-300 mb-6">
              The following behaviors will not be tolerated at Ambitrove:
            </p>
            <ul className="space-y-4">
              {unacceptableBehaviors.map((behavior, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center gap-3 text-gray-300 leading-relaxed">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                  <span>{behavior}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Client & Partner Relations */}
        <div className="mb-12 conduct-fade-in ">
          <div className="bg-neutral-900 p-8 md:p-10 rounded-2xl border border-neutral-800">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users className="w-8 h-8 text-blue-500" />
              <h3 className="text-3xl font-bold text-white">
                Client & Partner Relations
              </h3>
            </div>
            <p className="text-gray-300 mb-8">
              We uphold the highest standards in all client interactions:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {clientPrinciples.map((principle, index) => (
                <div
                  key={index}
                  className="bg-neutral-800/50 p-6 rounded-xl border border-neutral-700 hover:border-blue-500/50 transition-all">
                  <h4 className="text-xl font-bold text-white mb-3">
                    {principle.title}
                  </h4>
                  <p className="text-gray-300">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company Resources */}
        <div className="mb-12 conduct-fade-in">
          <div className="bg-linear-to-r from-purple-500/10 to-pink-500/10 p-8 md:p-10 rounded-2xl border border-purple-500/20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Lock className="w-8 h-8 text-purple-500" />
              <h3 className="text-3xl font-bold text-white">
                Use of Company Resources
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Company-provided tools, email addresses, designs, and platforms
              must only be used for official Ambitrove projects or
              responsibilities.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Misuse for personal gain or unethical activities is strictly
              prohibited and will result in disciplinary action.
            </p>
          </div>
        </div>

        {/* Reporting & Consequences */}
        <div className="grid md:grid-cols-2 gap-8 conduct-fade-in">
          {/* Reporting Violations */}
          <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
            <div className="flex items-center justify-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-yellow-500" />
              <h3 className="text-2xl font-bold text-white">
                Reporting Violations
              </h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 mt-1">•</span>
                <span>
                  Report violations to a co-founder or team lead directly
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 mt-1">•</span>
                <span>
                  All reports handled confidentially without retaliation
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-500 mt-1">•</span>
                <span>
                  Minor issues resolved internally; serious violations reviewed
                  formally
                </span>
              </li>
            </ul>
          </div>

          {/* Consequences */}
          <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-red-500" />
              <h3 className="text-2xl font-bold text-white ">Consequences</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>First offense: Verbal or written warning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>
                  Ongoing issues: Suspension from company tasks and projects
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>
                  Extreme cases: Termination of collaboration or team membership
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-12 conduct-fade-in">
          <div className="bg-linear-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 p-8 md:p-10 rounded-2xl border border-blue-500/20 text-center">
            <p className="text-xl text-gray-300 leading-relaxed">
              By adhering to this Code of Conduct, we create an environment
              where innovation thrives, trust is earned, and excellence is
              delivered. Together, we're not just building great software—we're
              building a company that sets the standard for professionalism and
              integrity in South Africa's tech industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeOfConduct;
