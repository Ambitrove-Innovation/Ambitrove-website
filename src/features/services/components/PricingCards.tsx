import { Check, X, Zap, Shield, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const PricingCards = () => {
  //   const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
  //     "monthly"
  //   );

  const navigate = useNavigate();

  const tiers: PricingTier[] = [
    {
      name: "Basic",
      price: "R1,500",
      period: "one-time",
      description: "Perfect for startups and personal brands",
      cta: "Get Started",
      ctaLink: "/contact",
      features: [
        { name: "Number of Pages", included: true, value: "3-5 pages" },
        { name: "Responsive Design", included: true },
        { name: "SEO Optimization", included: true, value: "Basic on-page" },
        { name: "Speed Optimization", included: true },
        { name: "Social Media Icons", included: true },
        { name: "Contact Form", included: true },
        { name: "Project Delivery", included: true, value: "3-7 days" },
        { name: "E-commerce Functionality", included: false },
        { name: "WhatsApp Integration", included: false },
        { name: "Hosting Setup", included: true, value: "Included" },
        { name: "ADA Compliance", included: false },
        { name: "Ongoing Maintenance", included: false },
      ],
    },
    {
      name: "Standard",
      price: "R2,500",
      period: "one-time",
      description: "Ideal for growing businesses",
      cta: "Most Popular",
      highlighted: true,
      features: [
        { name: "Number of Pages", included: true, value: "6-10 pages" },
        { name: "Responsive Design", included: true },
        { name: "SEO Optimization", included: true, value: "Advanced on-page" },
        { name: "Speed Optimization", included: true },
        { name: "Image Optimization", included: true },
        { name: "Social Media Icons", included: true },
        { name: "WhatsApp Integration", included: true },
        { name: "Payment Integration", included: true },
        { name: "Stock Media Included", included: true, value: "10 images" },
        { name: "Project Delivery", included: true, value: "7-12 days" },
        { name: "E-commerce Functionality", included: false },
        { name: "Hosting Setup", included: true, value: "Free 3 months" },
        { name: "ADA Compliance", included: true },
        { name: "Ongoing Maintenance", included: true, value: "1 month free" },
      ],
    },
    {
      name: "Premium",
      price: "R6,500",
      period: "one-time",
      description: "Complete solution for established companies",
      cta: "Go Premium",
      features: [
        { name: "Number of Pages", included: true, value: "12-20 pages" },
        { name: "Responsive Design", included: true },
        {
          name: "SEO Optimization",
          included: true,
          value: "Full on-page + Technical",
        },
        { name: "Speed Optimization", included: true, value: "Advanced" },
        { name: "Image Optimization", included: true },
        {
          name: "E-commerce Functionality",
          included: true,
          value: "Basic store",
        },
        { name: "Social Media Icons", included: true },
        { name: "WhatsApp Integration", included: true },
        { name: "Payment Integration", included: true },
        { name: "Stock Media Included", included: true, value: "25 images" },
        { name: "YouTube Integration", included: true },
        { name: "Content Updates", included: true, value: "2 per month" },
        { name: "Project Delivery", included: true, value: "21-30 days" },
        { name: "Hosting Setup", included: true, value: "Free 6 months" },
        { name: "ADA Compliance", included: true },
        { name: "Google Business Profile", included: true },
        { name: "Ongoing Maintenance", included: true, value: "3 months free" },
      ],
    },
    {
      name: "Pro",
      price: "R8,000+",
      period: "one-time",
      description: "Enterprise-grade custom solutions",
      cta: "Contact Us",
      features: [
        { name: "Number of Pages", included: true, value: "Unlimited" },
        { name: "Responsive Design", included: true },
        {
          name: "SEO Optimization",
          included: true,
          value: "Full SEO strategy",
        },
        {
          name: "Speed Optimization",
          included: true,
          value: "Enterprise-level",
        },
        { name: "Image Optimization", included: true },
        {
          name: "E-commerce Functionality",
          included: true,
          value: "Advanced store",
        },
        { name: "Social Media Icons", included: true },
        { name: "WhatsApp Integration", included: true },
        {
          name: "Payment Integration",
          included: true,
          value: "Multiple gateways",
        },
        { name: "Stock Media Included", included: true, value: "Unlimited" },
        { name: "YouTube Integration", included: true },
        { name: "Content Updates", included: true, value: "Unlimited" },
        { name: "Project Delivery", included: true, value: "30-45 days" },
        { name: "Hosting Setup", included: true, value: "Free 12 months" },
        { name: "ADA Compliance", included: true },
        { name: "Google Business Profile", included: true },
        { name: "Priority Support", included: true },
        { name: "Ongoing Maintenance", included: true, value: "6 months free" },
        { name: "Custom Integrations", included: true },
        { name: "Dedicated Project Manager", included: true },
      ],
    },
  ];

  return (
    <section className="py-12 px-6 md:px-12">
      {/* extra content info banner like two col grid images */}

      <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left column */}
        <div className="space-y-4 ">
          <h2 className="text-2xl font-bold text-white md:text-4xl leading-tight md:-translate-x-12">
            Transparent Pricing.
            <span className="text-teal-500 mx-1.5">No Surprises.</span>
          </h2>

          <p className="text-gray-400 max-w-xl">
            Choose a package that matches where your business is right now scale
            later without rebuilding everything from scratch. Performance, SEO,
            and clean UI baked into every tier.
          </p>

          <ul className="grid grid-cols-2 gap-3 text-sm text-gray-300 md:translate-x-7 translate-x-1">
            <li className="flex gap-2 items-center">
              <Check className="w-4 h-4 text-teal-500" />
              Mobile-first builds
            </li>
            <li className="flex gap-2 items-center">
              <Check className="w-4 h-4 text-teal-500" />
              SEO-ready launch
            </li>
            <li className="flex gap-2 items-center">
              <Check className="w-4 h-4 text-teal-500" />
              Fast delivery timelines
            </li>
            <li className="flex gap-2 items-center">
              <Check className="w-4 h-4 text-teal-500" />
              Long-term scalability
            </li>
          </ul>
        </div>

        {/* Right column (image / visual placeholder) */}
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
            alt="Web development dashboard"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-linear-to-tr from-black/60 to-transparent" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex items-center gap-2 text-gray-300">
            <Shield className="w-5 h-5 text-teal-500" />
            <span>Secure & ADA Compliant</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Clock className="w-5 h-5 text-teal-500" />
            <span>Fast Turnaround</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Zap className="w-5 h-5 text-teal-500" />
            <span>SEO Optimized</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`bg-neutral-900 rounded-2xl border p-6 transition-all duration-300 hover:scale-105 ${
                tier.highlighted
                  ? "border-teal-500 shadow-lg shadow-teal-500/20"
                  : "border-neutral-800 hover:border-neutral-700"
              }`}>
              {tier.highlighted && (
                <div className="bg-linear-to-r translate-x-25 md:translate-x-18 from-teal-500 to-green-500 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">
                {tier.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{tier.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">
                  {tier.price}
                </span>
                <span className="text-gray-400 text-sm ml-2">
                  {tier.period}
                </span>
              </div>

              <button
                onClick={() => tier.ctaLink && navigate("/contact")}
                className={`w-full py-3 rounded-lg font-semibold transition-all mb-6 ${
                  tier.highlighted
                    ? "bg-teal-600 hover:bg-teal-700 text-white"
                    : "bg-neutral-800 hover:bg-neutral-700 text-white"
                }`}>
                {tier.cta}
              </button>

              <div className="space-y-3">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-gray-600 shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <span
                        className={`text-sm ${
                          feature.included ? "text-gray-300" : "text-gray-600"
                        }`}>
                        {feature.name}
                      </span>
                      {feature.value && (
                        <span className="text-xs text-gray-500 block">
                          {feature.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const AdditionalServices = () => {
  const services = [
    {
      title: "Mobile App Development",
      price: "R20,000 - R80,000+",
      description: "Cross-platform iOS/Android apps with modern UI/UX",
    },
    {
      title: "SaaS Product Development",
      price: "R40,000+",
      description: "Full lifecycle: backend, frontend, cloud integration",
    },
    {
      title: "Web3 Solutions",
      price: "R30,000+",
      description: "DApps, smart contracts, blockchain integration",
    },
    {
      title: "Business Consulting",
      price: "R500/hr or R4,500/day",
      description: "Strategy, digital transformation, system design",
    },
    {
      title: "Ongoing Maintenance",
      price: "R1,500 - R6,000/month",
      description: "Bug fixes, updates, performance optimization",
    },
  ];

  return (
    <section className="py-12 px-6 md:px-12 bg-neutral-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Additional Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 hover:border-teal-500/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-teal-400 font-semibold mb-3">
                {service.price}
              </p>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
