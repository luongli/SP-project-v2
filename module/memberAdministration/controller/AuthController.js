'use strict'

var express = require('express'),
    User = require('../model/user'),
    SALT_WORK_FACTOR = 10,
    bcrypt = require('bcrypt');


var DataValidator = require('./Helper/DataValidator');
var DV = new DataValidator();


var AuthController = express.Router();

var loginFunction = function (req, res) {
    var error = {};

    if (DV.emailValidator(req.body.email) == false) {
        error.email = "Invalid Email"
    }

    if (Object.keys(error).length != 0) {

        res.json({
            status: false,
            error: error
        });
        return;
    }


    User.findOne({'email': req.body.email}, function (err, person) {
        if (err || person == null) {
            res.json({
                status: false,
                error: {
                    email: 'Email Not Found'
                }
            });
            return;
        }

        person.comparePassword(req.body.password, function (err, isMatch) {
            if (err) throw err;

            if (isMatch) {
                // generate a salt
                bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
                    if (err) return next(err);

                    // hash the password along with our new salt
                    bcrypt.hash(person.email + person.password, salt, function (err, hash) {
                        if (err) return next(err);

                        // override the cleartext password with the hashed one
                        person.token = hash;
                        person.save();
                    });
                });


                res.json({
                    status: true,
                    account: person.toJSON(),
                    token: person.token
                })
                return;
            }

            res.json({
                status: false,
                error: {
                    password: 'password not match'
                }
            })
        });
    });
};

AuthController.post('/login', loginFunction);

module.exports = AuthController;