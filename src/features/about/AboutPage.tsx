import AboutAmbitrove from "./components/AboutAmbitrove";
import AmbitroveMeaning from "./components/AmbitroveMeaning";
import LeadershipTeam from "./components/LeadershipTeam";
import OurJourney from "./components/OurJourney";
import CompanyCulture from "./components/CompanyCulture";
import CodeOfConduct from "./components/CodeOfConduct";
import SEO from "@/components/SEO";

const AboutPage = () => {
  return (
    <>
      <SEO 
        title="About Us"
        description="Learn more about Ambitrove Innovation — a South African-born tech company driving the continent’s digital future through innovation and scalable software solutions."
        url="/about"
        keywords="Ambitrove, Ambitrove Innovation, About Ambitrove, South Africa Tech, Digital Innovation, Software Engineering, Leadership Team"
      />
      <AboutAmbitrove />
      <OurJourney />
      <AmbitroveMeaning />
      <LeadershipTeam />
      <CompanyCulture />
      <CodeOfConduct />
    </>
  );
};

export default AboutPage;
