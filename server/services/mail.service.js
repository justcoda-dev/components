import nodemailer from "nodemailer";

const SMTP_HOST = "smtp.gmail.com";
const SMTP_PORT = 587;
const SMTP_USER = "koval.develop@gmail.com";
const SMTP_PASSWORD = "60001169qq";
export const mailService = {
  transporter: nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: false,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  }),
  sendActivationMail: async (to, link) => {
    await this.transporter.sendMail({
      from: SMTP_USER,
      to,
      subject: `account activation http://localhost:5000`,
      text: "",
      html: `
      <div>
        <h1>TEXT ACTIVATION</h1>
        <a href="${link}">click to activate</a>
      </div>
`,
    });
  },
};
