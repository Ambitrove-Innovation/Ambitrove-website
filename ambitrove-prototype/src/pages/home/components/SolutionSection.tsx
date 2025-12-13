import { motion } from "framer-motion";
import { Zap, Shield, Brain, CheckCircle2 } from "lucide-react";

// ==================== SOLUTION SECTION ====================
const SolutionSection = () => {
  const solutions = [
    {
      icon: Brain,
      title: "Intelligent Automation",
      description:
        "AI agents that learn your business processes and execute them flawlessly, 24/7 without supervision.",
    },
    {
      icon: Zap,
      title: "Instant Scalability",
      description:
        "Deploy unlimited agents in seconds. Handle 10x the workload without hiring a single person.",
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Reliability",
      description:
        "99.99% uptime with built-in error handling, monitoring, and automatic recovery systems.",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900" id="solutions">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 space-y-6">
            {solutions.map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-linear-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-blue-200 dark:border-blue-900/50 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {solution.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2">
            <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium">The Solution</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Meet Your Autonomous AI Workforce
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              GEN-AI (Sytic-AI) deploys intelligent agents that work alongside
              your team, handling everything from data analysis to customer
              interactions with unprecedented accuracy and speed.
            </p>
            <div className="space-y-4">
              {[
                "Deploy in minutes, not months",
                "80% reduction in operational costs",
                "10x productivity improvement",
                "Zero training required",
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                  <span className="text-lg text-gray-700 dark:text-gray-300">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
