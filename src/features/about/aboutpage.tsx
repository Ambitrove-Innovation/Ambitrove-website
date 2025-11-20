import AboutAmbitrove from "./components/AboutAmbitrove";
import Footer from "../../components/Footer";
import LeadershipTeam from "./components/LeadershipTeam";
import OurJourney from "./components/OurJourney";
import CompanyCulture from "./components/CompanyCulture";
import CodeOfConduct from "./components/CodeOfConduct";

const AboutPage = () => {
  return (
    <>
      {/* 🧠 Page Metadata */}
      <title>About Ambitrove</title>
      <meta
        name="description"
        content="Learn more about Ambitrove Innovation — a South African-born tech company driving the continent’s digital future through innovation and scalable software solutions."
      />

      <meta
        name="keywords"
        content="Ambitrove, Ambitrove Innovation, About Ambitrove, South Africa Tech, Digital Innovation, Software Engineering, Leadership Team"
      />
      <meta property="og:title" content="About Ambitrove Innovation" />
      <meta
        property="og:description"
        content="Meet the team pioneering South Africa’s tech future with innovative digital products."
      />
      <meta
        property="og:image"
        content="https://ambitrove.com/preview-thumbnail.png"
      />
      <link rel="canonical" href="https://ambitrove.com/about" />

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
