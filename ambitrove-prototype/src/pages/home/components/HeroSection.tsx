import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-linear-to-br from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">
              AI-Powered Automation Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Transform Your Business with{" "}
            <span className="text-blue-600">Intelligent AI Agents</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto">
            Deploy autonomous AI agents that understand, learn, and execute
            complex workflows. Reduce operational costs by 80% while scaling
            your business infinitely.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 flex items-center space-x-2 font-semibold">
              <span>Start Building Agents</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 transition-colors font-semibold">
              Watch Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-16 relative">
            <div className="absolute inset-0 p-12 dark:from-gray-900 to-transparent h-32 bottom-0 z-10"></div>
            <div className="rounded-2xl border-2 border-blue-500 shadow-2xl">
              <div className="bg-gray-900 rounded-xl p-6 min-h-100 flex items-center justify-center">
                <div className="text-left w-full max-w-2xl">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <pre className="text-gray-500 text-sm font-mono ">
                    {`// Initialize Sytic-AI Agent
const agent = new SyticAI({
  model: "gpt-4-turbo",
  capabilities: ["analysis", "automation"],
  autonomy: "high"
});

// Deploy intelligent workflow
await agent.execute({
  task: "analyze_customer_data",
  optimize: true,
  notify: ["slack", "email"]
});`}
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
