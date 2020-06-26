const mongoose = require('mongoose');
const mongoKeys = require('../config/mongo');

//Map global promises
mongoose.Promise = global.Promise;

//Connect to database using mongoose
mongoose.connect(`mongodb://${mongoKeys.dbuser}:${mongoKeys.dbpassword}@ds155268.mlab.com:${mongoKeys.port}/${mongoKeys.db}`).then( () => console.log('MongoDB Connected')).catch( err => console.log(err));
