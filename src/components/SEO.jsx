import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.rooksandcastle.co.uk';

export default function SEO({ title, description, image, path }) {
  const fullImage = image
    ? `${SITE_URL}${image}`
    : `${SITE_URL}/og-image.png`;
  const canonical = `${SITE_URL}${path || ''}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
    </Helmet>
  );
}