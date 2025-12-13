import { motion } from "framer-motion";
import { Zap, Shield, Code, Brain, TrendingUp, Workflow } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Natural Language Processing",
      description:
        "Agents understand context, sentiment, and intent with human-level comprehension.",
    },
    {
      icon: Workflow,
      title: "Multi-Agent Orchestration",
      description:
        "Deploy teams of specialized agents that collaborate on complex tasks.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "SOC 2 Type II certified with end-to-end encryption and compliance controls.",
    },
    {
      icon: Zap,
      title: "Real-Time Execution",
      description:
        "Process thousands of tasks simultaneously with sub-second response times.",
    },
    {
      icon: Code,
      title: "Developer-Friendly API",
      description:
        "RESTful API with SDKs for Python, JavaScript, and more. Deploy in minutes.",
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description:
        "Track performance, identify bottlenecks, and optimize workflows continuously.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium">Platform Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Everything You Need to Build Intelligent Automation
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Enterprise-grade AI infrastructure with tools designed for
            developers and business users alike.
          </p>
        </motion.div>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="resources">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-700">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ">
                <feature.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
