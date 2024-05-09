import nodemailer from 'nodemailer';

export default async function handler(req , res ) {
  if (req.method === 'GET') {
	console.log('sending email...')
    const { name, email, message ,theme} = req.query;

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
        to: 'florence.luneau@outlook.fr', // list of receivers
        //to: 'samuelnihoul@gmail.com',
        subject:theme, // Subject line
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // plain text body
      });

  const successPageHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Form Submitted Successfully</title>
    </head>
    <body>
      <h1>Form Submitted Successfully!</h1>
      <p>Your form has been successfully submitted.</p>
      <button onclick="goBack()">Go Back to Contact Page</button>
      <script>
        function goBack() {
          window.location.href = '/contact'; // Redirect to the contact page
        }
      </script>
    </body>
    </html>
  `;

  // Set the content type to HTML
  res.setHeader('Content-Type', 'text/html');
  
  // Send the HTML success page as the response
  res.status(200).send(successPageHtml);
    } catch (err) {
      console.error(err);
      res.status(500).json({ status: 'Error', message: 'There was a problem sending the email.' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

