// install express
const express = require('express');
// get port from environment variables
const port = process.env.PORT;
// instantiate express and assign it to app variable
const app = express();
// access db exported from mongoose.js
const db = require('./config/mongoose');

// using passport and passport-jwt to authenticate requests
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy');

// use express.urlencoded() as middleware to parse data from request body
app.use(express.urlencoded());

// access router exported from routes/index.js
app.use('/', require('./routes'));

// start the server and listen to requests on the defined port
app.listen(port,function(err){
    if(err){
        console.log(`Error : ${err}`);
        return;
    }

    console.log(`Server is up and running on port : ${port}`);
});