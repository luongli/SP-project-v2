'use strict'

var express = require('express');


var ViewsController = express.Router();

ViewsController.get('/home', function (req, res) {
    res.render('home/index.jade',
        {name: 'Home'}
    );
    //res.end('ok');
});

ViewsController.get('/login', function (req, res) {
    var data = {
        name: 'Login',
        next_link: '/signup',
        text_of_link: 'Create new account',
        script: '/static/js/login.js'
    };
    res.render('login/login.jade', data);
});

ViewsController.get('/signup', function (req, res) {

    var data = {
        name: 'Sign up',
        next_link: '/login',
        text_of_link: 'Log in',
        script: '/static/js/signup.js'
    };
    res.render('login/login.jade', data);

});


module.exports = ViewsController;
