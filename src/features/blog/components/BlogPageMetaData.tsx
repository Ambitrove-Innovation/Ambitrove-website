import { Helmet } from "react-helmet-async";

const BlogPageMetaData = () => {
  return (
    <Helmet>
      <title>Blogs </title>
      <meta
        name="description"
        content="Read the latest insights on technology, software development, Web3, and digital innovation from the Ambitrove team."
      />
      <meta
        name="keywords"
        content="Ambitrove blog, tech insights, software development, Web3, South Africa tech"
      />
      <link rel="canonical" href="https://ambitrove.com/blog" />
    </Helmet>
  );
};

export default BlogPageMetaData;
