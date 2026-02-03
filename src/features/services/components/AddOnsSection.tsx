import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Palette, TrendingUp, Shield, Zap, Plug } from "lucide-react";
import type { JSX } from "react";
import { useNavigate } from "react-router-dom";

export const AddOnsSection = () => {
  const navigate = useNavigate();

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    gsap.from(".addon-card", {
      opacity: 0,
      y: 25,
      stagger: 0.08,
      duration: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".addons-section",
        start: "top 45%",
      },
    });
  }, []);

  const addOns: AddOnService[] = [
    {
      id: "logo-design",
      title: "Logo & Brand Identity",
      description:
        "Professional logo design with brand guidelines, color palette, and typography recommendations.",
      pricing: {
        type: "one-time",
        amount: "R2,500 - R8,000",
      },
      complexity: "medium",
      category: "branding",
      features: [
        "3-5 logo concepts",
        "Unlimited revisions",
        "Brand style guide",
        "Multiple file formats",
      ],
    },
    {
      id: "seo-package",
      title: "Advanced SEO Optimization",
      description:
        "Comprehensive SEO strategy including keyword research, on-page optimization, and monthly reporting.",
      pricing: {
        type: "recurring",
        amount: "R3,000/month",
      },
      complexity: "high",
      category: "marketing",
      features: [
        "Keyword research",
        "Technical SEO audit",
        "Content optimization",
        "Monthly analytics reports",
      ],
    },
    {
      id: "content-writing",
      title: "Professional Content Writing",
      description:
        "SEO-optimized content creation for blogs, landing pages, and product descriptions.",
      pricing: {
        type: "recurring",
        amount: "R800/page",
      },
      complexity: "low",
      category: "marketing",
      features: [
        "SEO-optimized copy",
        "Industry research",
        "2 rounds of revisions",
        "Plagiarism-free guarantee",
      ],
    },
    {
      id: "ssl-security",
      title: "Enhanced Security Package",
      description:
        "Advanced security measures including SSL certificates, malware scanning, and DDoS protection.",
      pricing: {
        type: "recurring",
        amount: "R800/month",
      },
      complexity: "medium",
      category: "security",
      features: [
        "SSL certificate setup",
        "Daily malware scans",
        "Firewall configuration",
        "Security monitoring",
      ],
    },
    {
      id: "speed-optimization",
      title: "Performance Optimization",
      description:
        "Technical improvements to boost site speed, including image optimization and caching.",
      pricing: {
        type: "one-time",
        amount: "R3,500",
      },
      complexity: "high",
      category: "performance",
      features: [
        "Image compression",
        "Code minification",
        "Caching setup",
        "CDN integration",
      ],
    },
    {
      id: "email-marketing",
      title: "Email Marketing Integration",
      description:
        "Set up automated email campaigns with newsletter design and mailing list management.",
      pricing: {
        type: "recurring",
        amount: "R2,500/month",
      },
      complexity: "medium",
      category: "marketing",
      features: [
        "Email template design",
        "Automation setup",
        "List management",
        "Analytics tracking",
      ],
    },
    {
      id: "analytics-setup",
      title: "Analytics & Tracking Setup",
      description:
        "Comprehensive analytics implementation with custom dashboards and conversion tracking.",
      pricing: {
        type: "one-time",
        amount: "R2,000",
      },
      complexity: "medium",
      category: "performance",
      features: [
        "Google Analytics 4 setup",
        "Event tracking",
        "Custom dashboards",
        "Goal configuration",
      ],
    },
    {
      id: "api-integration",
      title: "Third-Party API Integration",
      description:
        "Connect your website with external services like payment gateways, CRMs, or social platforms.",
      pricing: {
        type: "custom",
        amount: "From R5,000",
      },
      complexity: "high",
      category: "integration",
      features: [
        "Custom API development",
        "Data synchronization",
        "Error handling",
        "Documentation",
      ],
    },
    {
      id: "photography",
      title: "Professional Photography",
      description:
        "Custom product photography or corporate headshots for your website and marketing materials.",
      pricing: {
        type: "one-time",
        amount: "R3,500/session",
      },
      complexity: "low",
      category: "branding",
      features: [
        "2-hour photo session",
        "20+ edited photos",
        "High-resolution files",
        "Commercial usage rights",
      ],
    },
    {
      id: "database-design",
      title: "Custom Database Design",
      description:
        "Design and implement custom database solutions for complex data management needs.",
      pricing: {
        type: "custom",
        amount: "From R8,000",
      },
      complexity: "high",
      category: "integration",
      features: [
        "Database architecture",
        "Data modeling",
        "Query optimization",
        "Backup solutions",
      ],
    },
  ];

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: JSX.Element } = {
      branding: <Palette className="w-6 h-6" />,
      marketing: <TrendingUp className="w-6 h-6" />,
      security: <Shield className="w-6 h-6" />,
      performance: <Zap className="w-6 h-6" />,
      integration: <Plug className="w-6 h-6" />,
    };
    return icons[category] || <Plug className="w-6 h-6" />;
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      branding: "from-pink-500 to-rose-500",
      marketing: "from-blue-500 to-cyan-500",
      security: "from-green-500 to-emerald-500",
      performance: "from-yellow-500 to-orange-500",
      integration: "from-purple-500 to-indigo-500",
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  const getComplexityBadge = (complexity?: string) => {
    if (!complexity) return null;

    const badges = {
      low: {
        label: "Simple",
        color: "bg-green-500/10 text-green-400 border-green-500/20",
      },
      medium: {
        label: "Moderate",
        color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
      },
      high: {
        label: "Complex",
        color: "bg-red-500/10 text-red-400 border-red-500/20",
      },
    };

    const badge = badges[complexity as keyof typeof badges];
    return (
      <span className={`text-xs px-2 py-1 rounded-full border ${badge.color}`}>
        {badge.label}
      </span>
    );
  };

  return (
    <section className="addons-section py-16 px-6 md:px-12 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className=" md:text-5xl font-bold text-white mb-4">
            Our Special Add-ons plan
          </h2>
          <p className="text-gray-400 text-lg text-center max-w-4xl mx-auto">
            Extend your website's capabilities with our professional add-on
            services. From branding to performance optimization, we've got
            everything you need to grow.
          </p>
        </div>

        {/* Add-ons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {addOns.map((addon) => (
            <div
              key={addon.id}
              className=" bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-700 transition-all duration-300 hover:scale-105 flex flex-col">
              {/* Icon & Category */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-linear-to-br ${getCategoryColor(
                    addon.category,
                  )} flex items-center justify-center text-white`}>
                  {getCategoryIcon(addon.category)}
                </div>
                {getComplexityBadge(addon.complexity)}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2">
                {addon.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 grow">
                {addon.description}
              </p>

              {/* Features */}
              {addon.features && addon.features.length > 0 && (
                <ul className="space-y-2 mb-4">
                  {addon.features.slice(0, 3).map((feature, index) => (
                    <li
                      key={index}
                      className="text-xs text-gray-500 flex items-center gap-2">
                      <span className="w-1 h-1 bg-teal-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              {/* Pricing */}
              <div className="border-t border-neutral-800 pt-4 mt-auto">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-sm text-gray-500 uppercase tracking-wide">
                    {addon.pricing.type === "recurring"
                      ? "Per Month"
                      : addon.pricing.type === "one-time"
                        ? "One-time"
                        : "Custom"}
                  </span>
                  <span className="text-lg font-bold text-white">
                    {addon.pricing.amount}
                  </span>
                </div>

                <button
                  onClick={() => navigate("/contact")}
                  className="w-full py-2 bg-white hover:bg-gray-100 text-black font-semibold rounded-lg transition-all text-sm">
                  Add to Package
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Don't see what you need? We offer custom add-on services tailored to
            your specific requirements.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all">
            Request Custom Add-on
          </button>
        </div>
      </div>
    </section>
  );
};
