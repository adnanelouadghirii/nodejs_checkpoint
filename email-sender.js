var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'email@gmail.com',
    pass: 'app_specific_password'
  }
});

var mailOptions = {
  from: 'email@gmail.com',
  to: 'email@mail.com',
  subject: 'First email through node',
  text: 'This is your email'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});