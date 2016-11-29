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

    newUser.save(function (err) {
        if (err)
            res.status(404).send(err);
        else {
            res.status(201).json({message: 'User created!'});
        }
    });

});

UsersRestController.get('/user/:id', function (req, res) {
    // get user by id
    User.findById(req.params.id, function (err, user) {
        if (err)
            res.status(404).send(err);
        else {
            res.json(user);
        }
    });
});

UsersRestController.put('/user/:id', function (req, res) {
    // remove user by id
    User.findById(req.params.id, function (err, user) {

        if (err) {
            res.end(err);
        }

        user.name = req.body.name;  // update the bears info

        user.email = req.body.email;

        user.password = req.body.password;

        // save the bear
        user.save(function (err) {
            if (err)
                res.status(404).send(err);
            else {
                res.status(200).json({message: 'User update!'});
            }
        });

    });
});

UsersRestController.delete('/user/:id', function (req, res) {
    // remove user by id
    User.remove({
        _id: req.params.id
    }, function (err, user) {
        if (err)
            res.status(404).send(err);
        else {
            res.json({message: 'User Successfully deleted'});
        }
    });
});

UsersRestController.get('/users', function (req, res) {
    // get all user
    User.find(function (err, users) {
        if (err)
            res.status(404).send(err);
        else {
            res.json(users);
        }
    });
});

module.exports = UsersRestController;