import { Helmet } from "react-helmet-async";

const ContactMetaData = () => {
  return (
    <Helmet>
      <title>Contact Us</title>
      <meta
        name="description"
        content="Get in touch with Ambitrove Innovation. Reach out for software development, SaaS, or digital solutions. Let's collaborate to build South Africa's tech future."
      />
      <meta
        name="keywords"
        content="Ambitrove contact, tech company South Africa, Ambitrove Innovation, contact form, Kamogelo Mogasoa, Dean Meyer"
      />
      <meta property="og:title" content="Contact | Ambitrove Innovation" />
      <meta
        property="og:description"
        content="Connect with Ambitrove Innovation to discuss your next project or partnership."
      />
      <meta property="og:url" content="https://ambitrove.com/contact" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://ambitrove.com/contact" />
    </Helmet>
  );
};

export default ContactMetaData;
