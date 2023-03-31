/* eslint-disable import/no-anonymous-default-export */

const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Namn: ${body.name}\r\n
    Telefon: ${body.tel}\r\n
    E-post: ${body.email}\r\n
    Meddelande: ${body.message}
  `;


  await mail.send({
    to: 'info@ostanahemservice.se',
    from: 'info@ostanahemservice.se',
    subject: 'yey...ett Nytt jobb!!!',
    text: message,

    html: message.replace(/\r\n/g, '<br>'),
  });
  res.status(200).json({ message: 'Ok' });

}



