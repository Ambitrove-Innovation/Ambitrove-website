import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BlogSection = () => {
  const posts = [
    {
      title: "10 Ways AI Agents Are Transforming Customer Support",
      excerpt:
        "Discover how leading companies are using autonomous AI agents to deliver 24/7 support with 95% customer satisfaction rates.",
      date: "Dec 10, 2025",
      category: "Case Study",
      readTime: "5 min read",
    },
    {
      title: "The Economics of AI Automation: ROI Analysis",
      excerpt:
        "A deep dive into the actual cost savings and productivity gains companies achieve when deploying intelligent automation.",
      date: "Dec 8, 2025",
      category: "Research",
      readTime: "8 min read",
    },
    {
      title: "Building Your First Multi-Agent System",
      excerpt:
        "A technical guide to orchestrating multiple AI agents that work together to solve complex business problems.",
      date: "Dec 5, 2025",
      category: "Tutorial",
      readTime: "12 min read",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium">Blog & Resources</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Latest Insights
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all group cursor-pointer">
              <div className="h-48 bg-linear-to-br from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4 text-sm">
                  <span className="text-blue-600 font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.date}
                  </span>
                  <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
