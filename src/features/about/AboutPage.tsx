import AboutAmbitrove from "./components/AboutAmbitrove";
import AmbitroveMeaning from "./components/AmbitroveMeaning";
import LeadershipTeam from "./components/LeadershipTeam";
import OurJourney from "./components/OurJourney";
import CompanyCulture from "./components/CompanyCulture";
import CodeOfConduct from "./components/CodeOfConduct";
import SEO from "@/components/SEO";

const AboutPage = () => {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Ambitrove Innovation",
    url: "https://ambitrove.com/about",
    description: "Learn more about Ambitrove Innovation — a South African-born tech company driving the continent’s digital future through innovation and scalable software solutions.",
    mainEntity: {
      "@type": "Organization",
      name: "Ambitrove Innovation",
      url: "https://ambitrove.com",
      founders: [
        { "@type": "Person", name: "Kamogelo Mogasoa", jobTitle: "Chief Executive Officer (CEO)" },
        { "@type": "Person", name: "Dean Meyer", jobTitle: "Chief Technology Officer (CTO)" }
      ],
      employee: [
        { "@type": "Person", name: "Oratile Kgatlhe", jobTitle: "Chief Operating Officer (COO)" }
      ]
    }
  };

  return (
    <>
      <SEO 
        title="About Us"
        description="Learn more about Ambitrove Innovation — a South African-born tech company driving the continent’s digital future through innovation and scalable software solutions."
        url="/about"
        image="/images/About-pic.webp"
        keywords="Ambitrove, Ambitrove Innovation, About Ambitrove, South Africa Tech, Digital Innovation, Software Engineering, Leadership Team"
        schema={aboutSchema}
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
