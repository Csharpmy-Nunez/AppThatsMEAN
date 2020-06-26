const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const User = require('../models/User');


//Get Users
router.get('/users', (req, res) => {
  res.json({message: 'Welcome to the API'});
});


router.post('/api/users', (req, res) => {
  //Save to the database
  const newUser = {
    "name": "Franklin Nunez",
    "age": 29,
    "gender": "Male",
    "phone": "123456789",
    "address": "677 Main St Algona WA",
    "country": "USA"
  }

  //The .then gives the user that we added to the database
  new User(newUser).save().then(user => {
    return res.json({success: true, message: 'new user added to the database'});
  });

});


//Export router
module.exports = router;