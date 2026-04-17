import { memo } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  type?: string;
  image?: string;
  keywords?: string;
  robots?: string;
}

const SEO = ({ 
  title, 
  description, 
  url = '', 
  type = 'website', 
  image = '/preview-thumbnail.png', // Default image
  keywords,
  robots = 'index, follow'
}: SEOProps) => {
  const siteTitle = "Ambitrove Innovation";
  const defaultDescription = "Ambitrove™ Innovation is a South African technology company delivering innovative digital solutions including SaaS, Web Apps, Mobile Apps, and Web3 products.";
  
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const canonicalUrl = `https://ambitrove.com${url}`;
  const metaDescription = description || defaultDescription;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:image" content={image.startsWith('http') ? image : `https://ambitrove.com${image}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image.startsWith('http') ? image : `https://ambitrove.com${image}`} />

      {/* GEO Tags */}
      <meta name="geo.region" content="ZA-GP" />
      <meta name="geo.placename" content="Pretoria" />
      <meta name="geo.position" content="-25.7479;28.2293" />
      <meta name="ICBM" content="-25.7479, 28.2293" />

      {/* Canonical Link */}
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default memo(SEO);
