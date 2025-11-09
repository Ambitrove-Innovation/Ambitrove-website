import { Users, Rocket, Heart, TrendingUp } from "lucide-react";

const WhyJoinUs = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Career Growth",
      description: "Continuous learning and advancement opportunities",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Team",
      description: "Work with talented, passionate professionals",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Work-Life Balance",
      description: "Flexible hours and hybrid work options",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Innovative Projects",
      description: "Build cutting-edge tech solutions",
    },
  ];

  return (
    <section className="py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Why Join Ambitrove?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className=" bg-neutral-900 p-6 rounded-xl border border-neutral-800 hover:border-teal-500/50 transition-all">
              <div className="bg-teal-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-teal-500">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
