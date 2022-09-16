const express = require('express');
const port = process.env.PORT;
const app = express();
const db = require('./config/mongoose');
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy');

app.use(express.urlencoded());

app.use('/', require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`Error : ${err}`);
        return;
    }

    console.log(`Server is up and running on port : ${port}`);
});