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
        secure: true,
        auth: {
          user: 'admin@mhconcept.tn',
          pass: 'MpHfxHDgew',
        },
      },
      settings: {
        defaultFrom: 'admin@mhconcept.tn',
        defaultReplyTo: 'admin@mhconcept.tn',
      },
    },
  },
});
