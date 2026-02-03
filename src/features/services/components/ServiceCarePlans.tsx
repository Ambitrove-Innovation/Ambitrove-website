import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { CAREPLANS, SERVICESFEATURES } from "@/constants/data";
import gsap from "gsap";
import { Check, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ServiceCarePlans = () => {
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    gsap.from(".care-table", {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".care-section",
        start: "top 75%",
      },
    });
  }, []);

  const handleToggle = () => {
    const newCycle = billingCycle === "monthly" ? "yearly" : "monthly";

    // Animate price change
    gsap.to(".price-value", {
      opacity: 0,
      y: -5,
      duration: 0.15,
      onComplete: () => {
        setBillingCycle(newCycle);
        gsap.to(".price-value", {
          opacity: 1,
          y: 0,
          duration: 0.2,
        });
      },
    });
  };

  const getPrice = (plan: ServiceCarePlan) => {
    return billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
  };

  return (
    <section className="care-section py-16 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Website Service Care Plans
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            See at a glance what each service care plan costs and what you get
            for your money.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 px-8 py-3 bg-neutral-900 border border-white rounded-full">
            <span
              className={`font-medium transition-colors ${
                billingCycle === "monthly" ? "text-white" : "text-gray-500"
              }`}>
              Monthly
            </span>

            <button
              onClick={handleToggle}
              className=" relative w-14 h-7 bg-linear-to-r from-pink-700 to-purple-500 shadow-md shadow-white rounded-full transition-colors focus:outline-none focus:ring-1 focus:ring-white"
              aria-label="Toggle billing cycle">
              <span
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                  billingCycle === "yearly" ? "translate-x-7" : ""
                }`}
              />
            </button>

            <span
              className={`font-medium transition-colors ${
                billingCycle === "yearly" ? "text-white" : "text-gray-500"
              }`}>
              Yearly
            </span>
          </div>

          {billingCycle === "yearly" && (
            <div className="mt-3 text-sm text-teal-400 font-medium">
              Save up to 15% with annual billing
            </div>
          )}
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block care-table overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-neutral-800">
                <th className="text-left py-4 px-6 text-white font-semibold">
                  Top Services & Add-ons
                </th>
                <th className="text-center py-4 px-6 text-white font-semibold">
                  Price/fee
                </th>
                {CAREPLANS.map((plan) => (
                  <th
                    key={plan.name}
                    className="text-center py-4 px-6 text-white font-semibold">
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Price Row */}
              <tr className="border-b border-neutral-800 bg-neutral-900/30">
                <td className="py-4 px-6"></td>
                <td className="py-4 px-6"></td>
                {CAREPLANS.map((plan) => (
                  <td
                    key={plan.name}
                    className="text-center py-4 px-6 price-value">
                    <div className="text-2xl font-bold text-white">
                      {getPrice(plan)}
                    </div>
                    <div className="text-xs text-gray-500">
                      {plan.monthlyPrice === "Custom"
                        ? "Contact us"
                        : `per ${billingCycle === "monthly" ? "month" : "year"}`}
                    </div>
                  </td>
                ))}
              </tr>

              {/* Feature Rows */}
              {SERVICESFEATURES.map((feature, index) => (
                <tr
                  key={feature.name}
                  className={`border-b border-neutral-800 ${
                    index % 2 === 0 ? "bg-neutral-900/20" : ""
                  }`}>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium">
                        {feature.name}
                      </span>
                      <button
                        className="text-gray-500 hover:text-gray-300 transition-colors group relative"
                        aria-label={`Info about ${feature.name}`}>
                        <Info className="w-4 h-4" />
                        <div className="absolute left-0 bottom-full mb-2 hidden group-hover:block bg-neutral-800 text-white text-xs rounded-lg p-3 w-64 shadow-lg z-10">
                          {feature.tooltip}
                        </div>
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-6"></td>
                  {CAREPLANS.map((plan) => (
                    <td key={plan.name} className="text-center py-4 px-6">
                      {plan.features[feature.name] ? (
                        <Check className="w-6 h-6 text-white mx-auto" />
                      ) : (
                        <span className="text-gray-600">-</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View - Cards */}
        <div className="lg:hidden space-y-6 care-table">
          {CAREPLANS.map((plan) => (
            <div
              key={plan.name}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-white mb-1 price-value">
                {getPrice(plan)}
              </div>
              <div className="text-sm text-gray-500 mb-6">
                {plan.monthlyPrice === "Custom"
                  ? "Contact us for pricing"
                  : `per ${billingCycle === "monthly" ? "month" : "year"}`}
              </div>

              <div className="space-y-3">
                {SERVICESFEATURES.map((feature) => (
                  <div
                    key={feature.name}
                    className="flex items-center justify-between py-2 border-b border-neutral-800">
                    <span className="text-gray-300">{feature.name}</span>
                    {plan.features[feature.name] ? (
                      <Check className="w-5 h-5 text-white" />
                    ) : (
                      <span className="text-gray-600">-</span>
                    )}
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate("/contact")}
                className="w-full mt-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all">
                Select Plan
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Need a custom plan? Let's discuss your specific requirements.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};
