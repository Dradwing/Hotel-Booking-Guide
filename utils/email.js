const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  //1.create a transporter(service that will send the email)
  const transporter = nodemailer.createTransport({
    service: "Gmail",

    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    }, //and activate less secure app on Gmail app
  });
  //2.Define email options
  const mailOptions = {
    from: "Ashutosh Saini <9058139810ig@gmail.com>",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  //3.Send the email
  await transporter.sendMail(mailOptions);
};
module.exports = sendEmail;
