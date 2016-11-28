var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var autoIncrement = require('./db');

var UserSchema = new Schema({
    _id: Number,
    email: {
        type: String,
        unique: true
    },
    name: String,
    password: String
});


UserSchema.plugin(autoIncrement.plugin, 'User');

module.exports = mongoose.model('User', UserSchema);