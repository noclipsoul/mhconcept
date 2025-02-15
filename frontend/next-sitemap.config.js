module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://mhconcept.tn',
    generateRobotsTxt: true, // Generates `robots.txt` file
    exclude: ['/api/*', '/admin/*'], // Optional: Exclude specific paths
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
        { userAgent: 'Googlebot', allow: '/' },
      ],
    },
  };
  