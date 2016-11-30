'use strict'

var express = require('express')


var ViewsController = express.Router();

ViewsController.get('/home', function (req, res) {
    res.render('home/index.jade',
        {title: 'Home'}
    )
    //res.end('ok');
});

ViewsController.get('/login', function (req, res) {
    res.render('login/login.jade',
        {title: 'Login'}
    );
});


module.exports = ViewsController;
