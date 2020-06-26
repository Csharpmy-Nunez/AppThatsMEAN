const AUTH_CONFIG = require('./config/keys');
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const cors = require('cors');

//DB config
require('./config/db');

const request = require("request");

const index = require('./routes/index');
const about = require('./routes/about');
const users = require('./routes/user');



//Initialize
const app = express();
//PORT
const port = process.env.PORT || 8080;

//Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Set Static Folder
app.use(express.static(`${__dirname}/public`));



//Enable CORS
app.use(cors());

//Set index route
app.use('/', index);

app.post('/signup', (req, res) => {
  
})


//START SERVER
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});