import BlogSection from "./components/BlogSection";
import CTASection from "./components/CtaSection";
import FAQSection from "./components/FAQSection";
import FeatureSection from "./components/FeatureSection";
import FooterSection from "./components/FooterSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowItWorkSection from "./components/HowItWorkSection";
import LogoSection from "./components/LogoSection";
import PricingSection from "./components/PricingSection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import TestimonialHighlightSection from "./components/TestimonialHighlightSection";

const Homepage = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <HeroSection />
      <LogoSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorkSection />
      <TestimonialHighlightSection />
      <FeatureSection />
      <PricingSection />
      <FAQSection />
      <BlogSection />
      <CTASection />
      <FooterSection />
    </main>
  );
};

export default Homepage;
