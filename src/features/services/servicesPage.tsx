import ServicesMetaData from "./components/ServicesMetaData";
import { PricingHero } from "./components/PricingHero";
import { PricingPackages } from "./components/PricingPackages";
import { ServiceCarePlans } from "./components/ServiceCarePlans";
import { AddOnsSection } from "./components/AddOnsSection";
import { PricingFAQ } from "./components/PricingFAQ";

const ServicesPage = () => {
  return (
    <>
      <ServicesMetaData />
      <PricingHero />
      <PricingPackages />
      <ServiceCarePlans />
      <AddOnsSection />
      <PricingFAQ />
    </>
  );
};

export default ServicesPage;
