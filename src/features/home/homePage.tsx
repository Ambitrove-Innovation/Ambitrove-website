import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ProjectShowCase from "./components/ProjectShowCase";
import ServiceCardOffers from "./components/ServiceCardOffers";
import WhyChoose from "./components/WhyChoose";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <WhyChoose />
      <ServiceCardOffers />
      <ProjectShowCase />
      <Footer />
    </>
  );
};

export default Homepage;
