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
        host: 'mail.mhconcept.tn',
        port: 587,
        secure: false,
        auth: {
          user: 'contact@mhconcept.tn',
          pass: 'qiENP5ijQL',
        },
      },
      settings: {
        defaultFrom: 'contact@mhconcept.tn',
        defaultReplyTo: 'contact@mhconcept.tn',
      },
    },
  },
});
