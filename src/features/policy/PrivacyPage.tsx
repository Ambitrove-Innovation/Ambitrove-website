import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SEO from "@/components/SEO";
import PrivacyHero from "./components/PrivacyHero";
import PrivacySidebar from "./components/PrivacySidebar";
import PolicyAccordion from "./components/PolicyAccordion";
import AdditionalSections from "./components/AdditionalSections";
import PrivacyCTA from "./components/PrivacyCTA";
import { useState } from "react";
import { useEffect } from "react";

const PrivacyPage = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    gsap.from(".fade-in", {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.6,
      ease: "power3.out",
    });
  }, []);

  // Scroll spy for sidebar navigation using IntersectionObserver for better performance
  useEffect(() => {
    const sectionIds = [
      "introduction",
      "information-collect",
      "how-use-data",
      "storage-security",
      "your-rights",
      "contact",
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -80% 0px", // Adjust to trigger when section is near the top
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Read Ambitrove Innovation's Privacy Policy. Learn how we collect, use, and protect your personal information in compliance with POPIA and GDPR."
        url="/privacy"
        keywords="Ambitrove Privacy Policy, POPIA compliance, data protection, South Africa tech company"
      />

      <div className="min-h-screen ">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Sidebar Navigation */}
            <PrivacySidebar
              activeSection={activeSection}
              scrollToSection={scrollToSection}
            />

            {/* Main Content */}
            <main className="lg:col-span-9">
              <div className="space-y-8">
                {/* Header Section */}
                <PrivacyHero />

                {/* Accordion Policy Sections */}
                <PolicyAccordion />

                {/* Additional Sections */}
                <AdditionalSections />

                {/* CTA Support Card */}
                <PrivacyCTA />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPage;
