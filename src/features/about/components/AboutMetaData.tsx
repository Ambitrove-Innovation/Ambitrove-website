import { Helmet } from "react-helmet-async";

const AboutMetaData = () => {
  return (
    <Helmet>
      <title>About Us</title>
      <meta
        name="description"
        content="Learn more about Ambitrove Innovation — a South African-born tech company driving the continent’s digital future through innovation and scalable software solutions."
      />
      <meta
        name="keywords"
        content="Ambitrove, Ambitrove Innovation, About Ambitrove, South Africa Tech, Digital Innovation, Software Engineering, Leadership Team"
      />
      <meta property="og:title" content="About | Ambitrove Innovation" />
      <meta
        property="og:description"
        content="Meet the team pioneering South Africa’s tech future with innovative digital products."
      />
      <meta property="og:url" content="https://ambitrove.com/about" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://ambitrove.com/about" />
    </Helmet>
  );
};

export default AboutMetaData;
