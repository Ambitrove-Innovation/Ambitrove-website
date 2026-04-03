import AboutAmbitrove from "./components/AboutAmbitrove";
import AmbitroveMeaning from "./components/AmbitroveMeaning";
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
