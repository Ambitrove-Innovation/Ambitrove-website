import { motion } from "framer-motion";
import { ChevronRight, Code, Brain, Workflow } from "lucide-react";

const HowItWorkSection = () => {
  const steps = [
    {
      number: "01",
      icon: Code,
      title: "Define Your Workflow",
      description:
        "Use our intuitive interface or API to describe what you want your AI agent to accomplish. No complex coding required.",
    },
    {
      number: "02",
      icon: Brain,
      title: "AI Training & Optimization",
      description:
        "Our platform automatically trains specialized agents using your data and business rules, optimizing for accuracy and speed.",
    },
    {
      number: "03",
      icon: Workflow,
      title: "Deploy & Monitor",
      description:
        "Launch your agents instantly. Monitor performance in real-time with detailed analytics and automatic improvement suggestions.",
    },
  ];

  return (
    <section className="py-24 bg-linear-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium">Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            From Concept to Production in 3 Steps
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Deploy autonomous AI agents faster than you can hire a new employee.
            Our platform handles all the complexity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.number}
                </div>
              </div>
              <div className="mt-8">
                <step.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ChevronRight className="w-8 h-8 text-blue-300 dark:text-blue-700" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== FEATURES SECTION ====================

export default HowItWorkSection;
