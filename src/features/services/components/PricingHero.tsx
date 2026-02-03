import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Zap, Shield, Clock, TrendingUp } from "lucide-react";

export const PricingHero = () => {
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    gsap.from(".hero-content", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
    });

    // gsap.from(".hero-badge", {
    //   opacity: 0,
    //   scale: 0.8,
    //   stagger: 0.1,
    //   delay: 0.3,
    //   duration: 0.6,
    //   ease: "back.out(1.7)",
    // });
  }, []);

  return (
    <section className="py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0  pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main content */}
        <div className="text-center hero-content mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full mb-6">
            <Zap className="w-4 h-4 text-teal-400" />
            <span className="text-teal-400 font-medium text-sm">
              Transparent Pricing
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Affordable, Scalable Solutions
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-green-400">
              for South African Businesses
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Choose the perfect package for your business. From startups to
            enterprises, we've got you covered with transparent pricing and
            premium features.
          </p>

          {/* Value props */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="hero-badge bg-neutral-900 border border-neutral-800 rounded-xl p-4 hover:border-teal-500/50 transition-all">
              <Shield className="w-6 h-6 text-teal-500 mx-auto mb-2" />
              <div className="text-sm font-semibold text-white">
                Secure & Compliant
              </div>
              <div className="text-xs text-gray-500">ADA compliant</div>
            </div>

            <div className="hero-badge bg-neutral-900 border border-neutral-800 rounded-xl p-4 hover:border-teal-500/50 transition-all">
              <Clock className="w-6 h-6 text-teal-500 mx-auto mb-2" />
              <div className="text-sm font-semibold text-white">
                Fast Delivery
              </div>
              <div className="text-xs text-gray-500">3-45 days</div>
            </div>

            <div className="hero-badge bg-neutral-900 border border-neutral-800 rounded-xl p-4 hover:border-teal-500/50 transition-all">
              <Zap className="w-6 h-6 text-teal-500 mx-auto mb-2" />
              <div className="text-sm font-semibold text-white">
                SEO Optimized
              </div>
              <div className="text-xs text-gray-500">Built-in</div>
            </div>

            <div className="hero-badge bg-neutral-900 border border-neutral-800 rounded-xl p-4 hover:border-teal-500/50 transition-all">
              <TrendingUp className="w-6 h-6 text-teal-500 mx-auto mb-2" />
              <div className="text-sm font-semibold text-white">Scalable</div>
              <div className="text-xs text-gray-500">Grow with ease</div>
            </div>
          </div>
        </div>

        {/* Info banner */}
        <div className="bg-linear-to-r 2 bg-teal-500/10 border border-teal-500/20  rounded-2xl p-6 text-center">
          <p className="text-gray-300 text-sm">
            <span className="font-semibold text-white">One-time builds</span>{" "}
            get you launched.{" "}
            <span className="font-semibold text-white">Care plans</span> keep
            you running.{" "}
            <span className="font-semibold text-white">Add-ons</span> help you
            grow.
          </p>
        </div>
      </div>
    </section>
  );
};
