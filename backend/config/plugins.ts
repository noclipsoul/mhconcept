export default () => ({


    seo: {
        enabled: true,
      },
      email: {
        config: {
          provider: 'nodemailer',
          providerOptions: {
            host: 'mail.fidni.tn',
            port: 587,
            secure: false,
            auth: {
              user: 'support@fidni.tn',
              pass: 'QKG6HwXGHN',
            },
          },
          settings: {
            defaultFrom: 'support@fidni.tn',
            defaultReplyTo: 'support@fidni.tn',
          },
        },
      },
});
