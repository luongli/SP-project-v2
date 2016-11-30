/**
 * Created by samhv on 11/28/16.
 */

'use strict'

var express = require('express');
var User = require('../model/user');

var day = new Date("");

var UsersRestController = express.Router();

var addUser = function (req, res) {
    // Create new user
    var newUser = new User();
    newUser.name = req.body.name;

    newUser.email = req.body.email;

    newUser.password = req.body.password;

    if (req.body.password != undefined) {
        newUser.admin = req.body.admin;
    }

    newUser.save(function (err) {
        if (err) {
            res.status(404).send(err);
            return;
        }

        res.status(201).json({message: 'User created!'});

    });

};

var getUserById = function (req, res) {
    // get user by id
    User.findById(req.params.id, function (err, user) {
        if (err) {
            res.status(404).send(err);
            return;
        }
        res.json(user);

    });
};

var editUserById = function (req, res) {
    // remove user by id
    User.findById(req.params.id, function (err, user) {

        if (err) {
            res.end(err);
        }

        user.name = req.body.name;

        user.email = req.body.email;

        user.password = req.body.password;

        // save the bear
        user.save(function (err) {
            if (err) {
                res.status(404).send(err);
                return;
            }

            res.status(200).json({message: 'User update!'});

        });

    });
};

var removeUserById = function (req, res) {
    // remove user by id
    User.remove({
        _id: req.params.id
    }, function (err, user) {
        if (err) {
            res.status(404).send(err);
            return;
        }

        res.json({message: 'User Successfully deleted'});

    });
};

var getAllUser = function (req, res) {
    // get all user
    User.find(function (err, users) {
        if (err) {
            res.status(404).send(err);
            return;
        }
        res.json(users);

    });
};

UsersRestController.post('/user', addUser);

UsersRestController.get('/user/:id', getUserById);

UsersRestController.put('/user/:id', editUserById);

UsersRestController.delete('/user/:id', removeUserById);

UsersRestController.get('/users', getAllUser);

module.exports = UsersRestController;