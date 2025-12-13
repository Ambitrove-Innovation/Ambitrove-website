import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "49",
      description: "Perfect for small teams getting started with AI automation",
      features: [
        "Up to 5 AI agents",
        "10,000 tasks/month",
        "Basic analytics",
        "Email support",
        "API access",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "199",
      description: "For growing businesses scaling their operations",
      features: [
        "Unlimited AI agents",
        "100,000 tasks/month",
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
        "Multi-agent orchestration",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For organizations with complex automation needs",
      features: [
        "Unlimited everything",
        "Dedicated infrastructure",
        "24/7 phone support",
        "Custom AI training",
        "SLA guarantee",
        "White-label options",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium">Pricing Plans</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Start free, scale as you grow. All plans include a 14-day free trial
            with no credit card required.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`relative bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl ${
                plan.popular
                  ? "ring-2 ring-blue-600 shadow-2xl scale-105"
                  : "shadow-lg"
              }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900 dark:text-white">
                  {plan.price === "Custom" ? plan.price : `${plan.price}`}
                </span>
                {plan.price !== "Custom" && (
                  <span className="text-gray-600 dark:text-gray-400">
                    /month
                  </span>
                )}
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30"
                    : "bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400"
                }`}>
                {plan.cta}
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
