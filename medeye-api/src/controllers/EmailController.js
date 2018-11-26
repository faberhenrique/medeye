const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: "medeyebr@gmail.com",
        pass: "med20182018"
    },
    tls: { rejectUnauthorized: false }
  });

  const mailOptions = {
    from: 'no-reply@medeye.com',
    to: 'breno.hfm@gmail.com',
    subject: 'E-mail enviado usando Node!',
    text: 'Enviado!!! Deu certo'
  };