import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/v1/', '/v2/', '/v3/', '/v4/', '/v5/', '/v6/', '/v7/', '/v8/', '/v9/', '/v10/', '/v11/', '/v12/'],
    },
    sitemap: 'https://weid-immobilien.de/sitemap.xml',
  };
}
