import HeroSection from "./components/HeroSection";
import ProjectShowCase from "./components/ProjectShowCase";
import ServiceCardOffers from "./components/ServiceCardOffers";
import WhyChoose from "./components/WhyChoose";
import SEO from "@/components/SEO";

const HomePage = () => {
  return (
    <>
      <SEO 
        title="Home" 
        description="Ambitrove Innovation is a South African technology company building scalable software, SaaS products, and digital solutions for the evolving world."
        keywords="Ambitrove, Software Development, South Africa, SaaS, Web3"
      />
      <HeroSection />
      <WhyChoose />
      <ServiceCardOffers />
      <ProjectShowCase />
    </>
  );
};

export default HomePage;
