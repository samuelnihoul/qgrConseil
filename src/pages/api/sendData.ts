import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
	console.log('sending email...')
    const { name, email, message ,theme} = req.body;

    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // replace with your SMTP server
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.GMAIL2, // replace with your SMTP username
        pass: process.env.GMAIL, // replace with your SMTP password
      },
    });

    try {
      await transporter.sendMail({
        from: '"harmonia-eko" <samuelnihoul@gmail.com>',
        // to: 'florence.luneau@outlook.fr', // list of receivers
        to: 'samuelnihoul@gmail.com',
        subject:theme, // Subject line
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // plain text body
      });

      res.status(200).json({ status: 'Ok', message: 'Email sent successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ status: 'Error', message: 'There was a problem sending the email.' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

