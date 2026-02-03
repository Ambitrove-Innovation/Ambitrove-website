import { useGSAP } from "@gsap/react";
import { PACKAGES } from "@/constants/data";
import gsap from "gsap";
import { Check, Star, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const PricingPackages = () => {
  const navigate = useNavigate();

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    gsap.from(".pricing-card", {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".pricing-section",
        start: "top 75%",
      },
    });
  }, []);

  const getThemeClasses = (theme: string, highlighted?: boolean) => {
    const themes = {
      dark: {
        card: "bg-neutral-900 border-neutral-800",
        badge: "",
        button: "bg-white text-black hover:bg-gray-100",
        accent: "text-gray-300",
        price: "text-white",
      },
      blue: {
        card: "bg-blue-950 border-blue-900",
        badge: "",
        button: "bg-white text-blue-950 hover:bg-gray-100",
        accent: "text-blue-300",
        price: "text-white",
      },
      green: {
        card: highlighted
          ? "bg-gradient-to-b from-green-950 to-green-900 border-lime-500"
          : "bg-green-950 border-green-900",
        badge: "bg-lime-400 text-black",
        button: "bg-white text-green-950 hover:bg-gray-100",
        accent: "text-green-300",
        price: "text-white",
      },
      purple: {
        card: highlighted
          ? "bg-gradient-to-b from-purple-950 to-fuchsia-900 border-fuchsia-500"
          : "bg-purple-950 border-purple-900",
        badge: "bg-fuchsia-500 text-white",
        button: "bg-white text-purple-950 hover:bg-gray-100",
        accent: "text-purple-300",
        price: "text-fuchsia-400",
      },
    };
    return themes[theme as keyof typeof themes] || themes.dark;
  };

  return (
    <section className=" py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-grotesk text-white mb-4 uppercase tracking-wide">
            PICK YOUR PACKAGE PLAN
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            High-end digital solutions for modern businesses. Choose your build
            path and scale your expand with our service care plans
          </p>
        </div>

        {/* Pricing Container */}
        <div className="relative border border-neutral-700 rounded-3xl p-6 md:p-8 mb-12">
          {/* Section Label */}
          <div className="text-center mb-8">
            <h3 className="text-xl text-white font-medium inline-flex items-center gap-2 px-4 py-2 bg-gray-500/10 border border-gray-500/20 rounded-full mb-6 ">
              One-time investment package deals.
            </h3>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PACKAGES.map((pkg, index) => {
              const theme = getThemeClasses(pkg.theme, pkg.highlighted);
              return (
                <div
                  key={pkg.id}
                  className={` relative rounded-3xl border-2 ${theme.card} overflow-hidden transition-all duration-300 hover:scale-105 flex flex-col`}
                  style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Highlight Badge */}
                  {pkg.highlighted && pkg.highlightLabel && (
                    <div
                      className={`absolute top-0 right-0 ${theme.badge} px-6 py-2 rounded-bl-2xl rounded-tr-2xl font-bold text-sm flex items-center gap-1 shadow-lg`}>
                      <Star className="w-4 h-4 fill-current" />
                      {pkg.highlightLabel}
                    </div>
                  )}

                  <div className="p-6 flex flex-col grow">
                    {/* Package Name */}
                    <h3 className="text-2xl font-bold text-white mb-2 mt-8">
                      {pkg.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-400 mb-4">
                      {pkg.description}
                    </p>

                    {/* Price */}
                    <div className="mb-6">
                      <div className={`text-3xl font-bold ${theme.price}`}>
                        {pkg.price}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {pkg.priceNote}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() =>
                        pkg.id === "enterprise"
                          ? navigate("/contact")
                          : navigate("/contact")
                      }
                      className={`w-full py-3 rounded-lg font-semibold mb-6 transition-all ${theme.button} flex items-center justify-center gap-2`}>
                      {pkg.ctaLabel}
                    </button>

                    {/* Features List */}
                    <div className="space-y-2 mb-6 grow">
                      {pkg.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          {feature.included ? (
                            <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                          )}
                          <span
                            className={
                              feature.included
                                ? "text-gray-300"
                                : "text-gray-600"
                            }>
                            {feature.text}
                          </span>
                          {feature.badge && (
                            <span className="ml-auto px-2 py-0.5 bg-lime-400 text-black text-xs font-bold rounded-full">
                              {feature.badge}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Trial Access Section */}
                    <div className="border-t border-neutral-700 pt-4 mt-auto">
                      <div className="text-xs font-bold text-gray-400 mb-3">
                        {pkg.trialAccess.label}
                      </div>
                      <div className="space-y-2">
                        {pkg.trialAccess.items.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between text-xs">
                            <span className="text-gray-400">
                              + {item.service}
                            </span>
                            <span
                              className={`px-2 py-1 rounded-full font-medium ${
                                item.highlight
                                  ? "bg-lime-400 text-black"
                                  : "bg-neutral-800 text-gray-300"
                              }`}>
                              {item.duration}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
