import { PricingHero } from "./components/PricingHero";
import { PricingPackages } from "./components/PricingPackages";
import { ServiceCarePlans } from "./components/ServiceCarePlans";
import { AddOnsSection } from "./components/AddOnsSection";
import { PricingFAQ } from "./components/PricingFAQ";
import SEO from "@/components/SEO";

const ServicesPage = () => {
  return (
    <>
      <SEO 
        title="Services & Pricing"
        description="Affordable website development packages in South Africa. From R8,000. SEO, responsive design, e-commerce, hosting, and maintenance included."
        url="/services"
        keywords="website development pricing, South Africa web design, affordable websites, e-commerce development, SaaS pricing"
      />
      <PricingHero />
      <PricingPackages />
      <ServiceCarePlans />
      <AddOnsSection />
      <PricingFAQ />
    </>
  );
};

export default ServicesPage;
