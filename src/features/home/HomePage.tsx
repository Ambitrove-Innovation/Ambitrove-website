import HeroSection from "./components/HeroSection";
import ProjectShowCase from "./components/ProjectShowCase";
import ServiceCardOffers from "./components/ServiceCardOffers";
import WhyChoose from "./components/WhyChoose";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WhyChoose />
      <ServiceCardOffers />
      <ProjectShowCase />
    </>
  );
};

export default HomePage;
