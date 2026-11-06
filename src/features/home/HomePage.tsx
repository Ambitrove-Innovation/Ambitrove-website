import HeroSection from "./components/HeroSection";
import ProjectShowCase from "./components/ProjectShowCase";
import ServiceCardOffers from "./components/ServiceCardOffers";
import WhyChoose from "./components/WhyChoose";
import SEO from "@/components/SEO";

const HomePage = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ambitrove Innovation",
    url: "https://ambitrove.com",
    logo: "https://ambitrove.com/images/Ambitrove.png",
    description: "Ambitrove Innovation is a South African technology company building scalable software, SaaS products, and digital solutions.",
    founder: [
      {
        "@type": "Person",
        name: "Kamogelo Mogasoa",
        jobTitle: "Chief Executive Officer (CEO)",
      },
      {
        "@type": "Person",
        name: "Dean Meyer",
        jobTitle: "Chief Technology Officer (CTO)",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pretoria",
      addressRegion: "Gauteng",
      addressCountry: "ZA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support & Sales",
      email: "contact@ambitrove.com",
      areaServed: "ZA",
    },
  };

  return (
    <>
      <SEO 
        title="Home" 
        description="Ambitrove Innovation is a South African technology company building scalable software, SaaS products, and digital solutions for the evolving world."
        image="/images/Project showcase.webp"
        keywords="Ambitrove, Software Development, South Africa, SaaS, Web3"
        schema={organizationSchema}
      />
      <HeroSection />
      <WhyChoose />
      <ServiceCardOffers />
      <ProjectShowCase />
    </>
  );
};

export default HomePage;
