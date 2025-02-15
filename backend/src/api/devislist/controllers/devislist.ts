import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::devislist.devislist', ({ strapi }) => ({
  async create(ctx) {
    // Call the default create method to save the data
    const response = await super.create(ctx);

    const { FullName, phone, email, serviceOption, description } = ctx.request.body.data;

    // Send email notification using Strapi's email service
    try {
      const emailService = strapi.plugin('email').service('email');
      
      // Sending email in HTML format for better presentation
      const htmlContent = `
        <h2>New Devis Request</h2>
        <p><strong>Full Name:</strong> ${FullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service Option:</strong> ${serviceOption}</p>
        <p><strong>Description:</strong> ${description}</p>
      `;

      // Sending email
      await emailService.send({
        to: 'contact@mhconcept.tn',  // Recipient email
        subject: 'New Devis Request', // Subject of the email
        html: htmlContent,  // HTML body for better readability
        text: `
          You have received a new devis request!

          Full Name: ${FullName}
          Phone: ${phone}
          Email: ${email}
          Service Option: ${serviceOption}
          Description: ${description}
        `, // Plain text body (fallback)
        from: 'contact@mhconcept.tn', // Sender email
      });

      // Log the success
      strapi.log.info('Email sent successfully');

    } catch (error) {
      // Log detailed error message if something goes wrong
      strapi.log.error('Error sending email:', error.message || error);
      // Optionally, you can also throw an error here to notify the user
      throw new Error('Error sending email notification');
    }

    // Return the response after email has been sent
    return response;
  }
}));
