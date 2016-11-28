/**
 * Created by samhv on 11/28/16.
 */
var express = require('express')
var User = require('../model/user')

var day = new Date("");

var UsersRestController = express.Router();

UsersRestController.post('/user', function (req, res) {
    // Create new user
    var newUser = new User();
    newUser.name = req.body.name;

    newUser.email = req.body.email;

    newUser.password = req.body.password;

    bear.save(function (err) {
        if (err)
            res.json(err);

        res.json({message: 'User created!'});
    });

});

UsersRestController.get('/user/:id', function (req, res) {
    // get user by id
    User.findById(req.params.id, function (err, user) {
        if (err)
            res.json(err);
        res.json(user);
    });
});

UsersRestController.get('/users', function (req, res) {
    // get all user
    User.find(function (err, Users) {
        if (err)
            res.json(err);

        res.json(Users);
    });
});

module.exports = UsersRestController;