var express = require('express')

var ViewsController = express.Router();

ViewsController.get('/home', function (req, res) {
    res.render('home/index.jade',
  		{ title : 'Home' }
  	)
  	//res.end('ok');
});

module.exports = ViewsController;
