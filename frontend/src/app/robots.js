export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: [
          '/private/',
          '/api/',
          '/admin/',
          '/*.json$',
          '/*.xml$',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: ['/private/'],
      },
      {
        userAgent: 'Yandexbot',
        allow: ['/'],
        disallow: ['/private/'],
      }
    ],
    sitemap: 'https://new.elordaecosystem.kz/sitemap.xml',
    host: 'https://new.elordaecosystem.kz',
  };
}
