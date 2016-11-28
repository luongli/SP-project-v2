/**
 * Created by samhv on 11/28/16.
 */
// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var db = require('./model/db');



// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var port = process.env.PORT || 8000;        // set our port


// add Restful Controller
app.use('/api/', require('./controller/UsersRestController'));


// start
app.listen(port);
console.log('Magic happens on port ' + port);
