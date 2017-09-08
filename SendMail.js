var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rahulrkumar7@gmail.com',
    pass: 'Rahul@8976898022'
  }
});

var mailOptions = {
  from: 'rahulrkumar7@gmail.com',
  to: 'rahulrkumar7@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
