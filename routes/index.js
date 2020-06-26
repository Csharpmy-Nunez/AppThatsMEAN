const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const request = require('request');
const keys = require('../config/keys');




const User = require('../models/User');


//----------------------- VIEW ROUTES -------------------------------------
//Index route
router.get('/', (req, res) => {
  res.render('index');
});

router.get('/about', (req, res) => {
  res.render('about');
});
//------------------------------------------------------------------------


//Get all Users
router.get('/api/users', (req, res) => {
  User.find().then( users => res.json({success: true, users: users}));
});


//Get single user
router.get('/api/user/:id', (req, res) => {
  User.findOne({_id: req.params.id}, (err, user) => {
    if(err){
      throw err;
    }
    //console.log(`Value of id: ${req.params.id}`);
    res.json({user: user});
  });
});


router.post('/', (req, res) => {
  //Save to the database
  const newUser = {
    "name": req.body.name,
    "email": req.body.email,
    "age": req.body.age,
    "gender": req.body.gender,
    "phone": req.body.phone,
    "address": req.body.address,
    "country": req.body.country
  }

  //The .then gives the user that we added to the database
  new User(newUser).save().then(user => {
    return res.json({success: true, message: 'new user added to the database'});
  });

});

router.post('/send', (req, res) => {

  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;

        const output = `
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>  
          <li>Name: ${name}</li>
          <li>Email: ${email}</li>
        </ul>
        <h3>Message</h3>
        <p>${message}</p>
        `;

  //create reusable transporter object using the default SMTP transport

      let transporter = nodemailer.createTransport({
          host: keys.host,
          port: keys.port,
          secure: false, // true for 465, false for other ports
          auth: {
              user: keys.email, // generated ethereal user
              pass: keys.password  // generated ethereal password
          },
          tls:{
            rejectUnauthorized:false
          }
        });

          // setup email data with unicode symbols
          let mailOptions = {
            from: `"From Angular Client" <${keys.email}>`, // sender address
            to: keys.email, // list of receivers
            subject: subject, // Subject line
            text: 'Hello world?', // plain text body
            html: output // html body
        };
        
          // send mail with defined transport object
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);   
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

            res.json({msg:'Your message has been sent'});

            //console.log(output);
        });




});


//Export router
module.exports = router;