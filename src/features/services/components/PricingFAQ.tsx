import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FEATURESFAQ } from "@/constants/data";

export const PricingFAQ = () => {
  const navigate = useNavigate();

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    gsap.from(".faq-section", {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".faq-container",
        start: "top 75%",
      },
    });
  }, []);

  return (
    <section className="faq-container py-16 px-6 md:px-12 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 faq-section">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-blue-500 to-purple-500 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-grotesk text-white mb-4 ">
            Your Questions Answered
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about our pricing, packages, and
            services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="faq-section">
          <Accordion type="single" collapsible className="space-y-4">
            {FEATURESFAQ.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-700 transition-colors">
                <AccordionTrigger className="px-6 py-5 text-left hover:bg-neutral-800/50">
                  <span className="text-white font-semibold font-inter pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-gray-300 leading-relaxed border-t border-neutral-800 pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center faq-section">
          <div className="bg-linear-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-3 font-inter">
              Still have questions?
            </h3>
            <p className="text-gray-400 mb-6">
              Our team is here to help you understand which package and services
              are right for your business.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all font-inter">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
