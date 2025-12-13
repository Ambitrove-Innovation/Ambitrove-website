import { motion } from "framer-motion";

// ==================== LOGOS SECTION ====================
const LogoSection = () => {
  const companies = [
    "TechCorp",
    "InnovateLabs",
    "DataStream",
    "CloudNine",
    "NexGen",
    "FutureStack",
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 dark:text-gray-400 mb-8 font-medium">
          Trusted by innovative companies worldwide
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-12">
          {companies.map((company, i) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-2xl font-bold text-gray-400 dark:text-gray-600 hover:text-gray-900 dark:hover:text-gray-300 transition-colors">
              {company}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
