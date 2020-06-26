const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const UserSchema = new Schema({
    name:String,
    email:String,
    age: Number,
    gender: String,
    phone: Number,
    address: String,
    country: String 
});


//Create collection and add schema
const User = mongoose.model('User', UserSchema);


//Export it
module.exports = User;