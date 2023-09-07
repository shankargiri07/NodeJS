var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shankargiri.sl2000@gmail.com',
    pass: 'baidilfovcyoaboq'
  }
});

var mailOptions = {
  from: 'shankargiri.sl2000@gmail.com',
  to: 'mr.shankar67@gmail.com',
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