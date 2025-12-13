import { motion } from "framer-motion";
import { TrendingUp, Clock, Target } from "lucide-react";

// ==================== PROBLEM SECTION ====================
const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Manual Processes Killing Productivity",
      description:
        "Teams spend 60% of their time on repetitive tasks that could be automated, draining resources and delaying innovation.",
    },
    {
      icon: TrendingUp,
      title: "Scaling Challenges",
      description:
        "Traditional systems can't keep up with growth. Every new customer requires proportional increases in headcount and costs.",
    },
    {
      icon: Target,
      title: "Inconsistent Decision Making",
      description:
        "Human error and inconsistency lead to missed opportunities and poor customer experiences across touchpoints.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <div className="inline-block bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium">The Challenge</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Businesses Are Drowning in Operational Complexity
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Traditional approaches to business operations are broken.
              Companies are stuck in a cycle of hiring more people to handle
              more work, creating unsustainable cost structures and bottlenecks.
            </p>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-l-4 border-red-500">
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                "We were spending $500K annually on repetitive data entry and
                customer support tasks. Our team was exhausted, and we couldn't
                scale."
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                — CTO, Enterprise SaaS Company
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6">
            {problems.map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <problem.icon className="w-10 h-10 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {problem.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
