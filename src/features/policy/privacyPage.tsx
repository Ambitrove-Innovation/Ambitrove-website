import { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import PrivacyMetaData from "./components/PrivacyMetaData";
import PrivacyHero from "./components/PrivacyHero";
import PrivacySidebar from "./components/PrivacySidebar";
import PolicyAccordion from "./components/PolicyAccordion";
import AdditionalSections from "./components/AdditionalSections";
import PrivacyCTA from "./components/PrivacyCTA";

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

  // Scroll spy for sidebar navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "introduction",
        "information-collect",
        "how-use-data",
        "storage-security",
        "your-rights",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      <PrivacyMetaData />

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
