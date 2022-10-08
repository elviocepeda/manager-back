import nodemailer from "nodemailer";

export const mailTransport = () => {
  return nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USERNAME,
      pass: process.env.MAILTRAP_PASSWORD,
    },
  });
};

export const emailTemplate = (code) => {
  return code;
};
