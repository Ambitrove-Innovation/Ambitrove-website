import { useState } from "react";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "How quickly can I deploy my first AI agent?",
      answer:
        "Most customers have their first agent running in production within 24 hours. Our platform handles all the complexity of model training, deployment, and scaling automatically.",
    },
    {
      question: "Do I need coding experience to use Sytic-AI?",
      answer:
        "No. Our intuitive interface allows business users to create and deploy agents without writing code. However, developers can use our API for advanced customization and integration.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We're SOC 2 Type II certified with enterprise-grade encryption. Your data is isolated, encrypted at rest and in transit, and never used to train models without explicit permission.",
    },
    {
      question: "Can I integrate with my existing tools?",
      answer:
        "Yes. Sytic-AI integrates with hundreds of popular tools including Salesforce, HubSpot, Slack, and more. We also offer a flexible API for custom integrations.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "All plans include email support. Professional and Enterprise plans get priority support with dedicated success managers and 24/7 availability for Enterprise customers.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex((opened) => (opened === i ? 0 : i))}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <span className="text-lg font-bold text-gray-900 dark:text-white pr-8">
                  {faq.question}
                </span>
                <HelpCircle
                  className={`w-6 h-6 text-blue-600 shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-8 pb-6">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
