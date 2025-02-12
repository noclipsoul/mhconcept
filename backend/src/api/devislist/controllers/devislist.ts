/**
 * devislist controller
 */

import { factories } from '@strapi/strapi';
import nodemailer from 'nodemailer';

export default factories.createCoreController('api::devislist.devislist', ({ strapi }) => ({
  async create(ctx) {
    // Call the default create method to save the data
    const response = await super.create(ctx);

    const { FullName, phone, email, serviceOption, description } = ctx.request.body.data;

    // Send email notification using Nodemailer
    try {
      const emailService = strapi.plugin('email').service('email');
      await emailService.send({
        to: 'contact@mhconcept.tn',  // The recipient email
        subject: 'New Devis Request', // Subject of the email
        text: `
          You have received a new devis request!

          Full Name: ${FullName}
          Phone: ${phone}
          Email: ${email}
          Service Option: ${serviceOption}
          Description: ${description}
        `,
        from: 'contact@mhconcept.tn', // Sender email
      });
    } catch (error) {
      strapi.log.error('Error sending email:', error);
    }

    // Return the response after sending the email
    return response;
  }
}));
