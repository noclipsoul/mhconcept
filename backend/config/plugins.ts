export default () => ({
  seo: {
    enabled: true,
  },
  // Users & Permissions Plugin
  'users-permissions': {
    config: {
      jwtSecret: 'EQWDZxQjIJiGomhhsVWLGg==', // Hardcoded JWT secret
    },
  },

  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'ssl0.ovh.net',
        port: 465,
        secure: true, // Ensure the connection is secure
        auth: {
          user: 'contact@mhconcept.tn',
          pass: 'Uw@aZEjN2wp4KtM', // Ensure this password is correct
        },
        authMethod: 'PLAIN', // Explicitly specify the PLAIN authentication method
        tls: {
          rejectUnauthorized: false, // Set to false to bypass certificate validation issues
        },
      },
      settings: {
        defaultFrom: 'contact@mhconcept.tn', // Sender email address
        defaultReplyTo: 'contact@mhconcept.tn', // Reply-to address
      },
    },
  },
});
