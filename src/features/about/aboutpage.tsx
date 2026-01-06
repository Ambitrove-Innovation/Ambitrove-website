import AboutAmbitrove from "./components/AboutAmbitrove";
import Footer from "../../components/Footer";
import LeadershipTeam from "./components/LeadershipTeam";
import OurJourney from "./components/OurJourney";
import CompanyCulture from "./components/CompanyCulture";
import CodeOfConduct from "./components/CodeOfConduct";
import AboutMetaData from "./components/AboutMetaData";

const AboutPage = () => {
  return (
    <>
      {/* 🧠 Page Metadata */}
      <AboutMetaData />

      {/* Actual page sections */}
      <AboutAmbitrove />
      <OurJourney />
      <LeadershipTeam />
      <CompanyCulture />
      <CodeOfConduct />
      <Footer />
    </>
  );
};

export default AboutPage;
