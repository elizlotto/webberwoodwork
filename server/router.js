const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    
      }
});


transporter.verify((error, success) => {
  if (error) {
   console.log(error);
  } else {
    console.log('Nodemailer Server is ready to take messages');
  }
});

transporter.on('token', token => {
  console.log('A new access token was generated');
  console.log('User: %s', token.user);
  console.log('Access Token: %s', token.accessToken);
  console.log('Expires: %s', new Date(token.expires));
});

module.exports = {
  sendEmail(req, res, next) {
    console.log('in sendEmail');
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const content = `name: ${name} \n email: ${email} \n message: ${message} `;
    console.log(content);

    const mail = {
      from: name,
      to: 'jwebberwoodwork@gmail.com', // Change to email address that you want to receive messages on
      subject: 'New Message from Contact Form',
      text: content,
    };

  

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail',
        });
      } else {
        res.json({
          status: 'success',
        });

        transporter.sendMail(
          {
            from: '<your email address>',
            to: email,
            subject: 'Submission was successful',
            text: `Thank you for contacting us!\n\nForm details\nName: ${name}\n Email: ${email}\n Message: ${message}`,
          },
          function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log('Message sent: ' + info.response);
            }
          }
        );
      }
    });
    return next();
  },
};
