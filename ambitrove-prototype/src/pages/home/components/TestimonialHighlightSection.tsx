import { motion } from "framer-motion";
import { Quote } from "lucide-react";


const TestimonialHighlightSection = () => {
  return (
    <section className="py-24 bg-blue-600 dark:bg-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-blue-700 to-blue-500 dark:from-blue-900 dark:to-blue-700 opacity-50"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center">
          <Quote className="w-16 h-16 text-white/30 mx-auto mb-6" />
          <blockquote className="text-2xl md:text-4xl font-bold text-white mb-8 leading-relaxed">
            "Sytic-AI transformed our operations completely. We reduced customer
            response time from 4 hours to 30 seconds while cutting support costs
            by 75%. This isn't just automation—it's a competitive advantage."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-xl">
              MK
            </div>
            <div className="text-left">
              <p className="text-white font-bold text-lg">Michael Torres</p>
              <p className="text-blue-100">VP of Operations, DataStream Inc.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialHighlightSection;
