import { PricingHero } from "./components/PricingHero";
import { PricingPackages } from "./components/PricingPackages";
import { ServiceCarePlans } from "./components/ServiceCarePlans";
import { AddOnsSection } from "./components/AddOnsSection";
import { PricingFAQ } from "./components/PricingFAQ";
import SEO from "@/components/SEO";

const ServicesPage = () => {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Website & Software Development",
    provider: {
      "@type": "Organization",
      name: "Ambitrove Innovation",
      url: "https://ambitrove.com",
    },
    areaServed: {
      "@type": "Country",
      name: "South Africa",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Website Packages & Care Plans",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Starter Package",
            description: "Essential static website for individuals and small portfolios.",
          },
          price: "1500",
          priceCurrency: "ZAR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Standard Package",
            description: "Multi-page responsive website with animations and contact forms.",
          },
          price: "2500",
          priceCurrency: "ZAR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Premium Package",
            description: "E-commerce and full-scale business digital solutions with AI integrations.",
          },
          price: "5000",
          priceCurrency: "ZAR",
        },
      ],
    },
  };

  return (
    <>
      <SEO 
        title="Services & Pricing"
        description="Affordable website development packages in South Africa. From R8,000. SEO, responsive design, e-commerce, hosting, and maintenance included."
        url="/services"
        image="/images/marketingImages/ambitroveService.webp"
        keywords="website development pricing, South Africa web design, affordable websites, e-commerce development, SaaS pricing"
        schema={servicesSchema}
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
