const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'iletisim@ufukcanli.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  });
};

const sendGoodbyeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'iletisim@ufukcanli.com',
    subject: 'Sorry to see you go!',
    text: `We are sorry to see you go ${name}!`
  });
};

module.exports = { sendWelcomeEmail, sendGoodbyeEmail };
