import ServicesMetaData from "./components/ServicesMetaData";
import HeroSection from "./components/HeroSection";
import { PricingCards } from "./components/PricingCards";
import ServicesCTA from "./components/ServicesCTA";
import { AdditionalServices } from "./components/PricingCards";

const ServicesPage = () => {
  return (
    <>
      <ServicesMetaData />
      <HeroSection />
      <PricingCards />
      <AdditionalServices />
      <ServicesCTA />
    </>
  );
};

export default ServicesPage;
