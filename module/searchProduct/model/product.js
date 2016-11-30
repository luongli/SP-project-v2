'use strict'

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    SALT_WORK_FACTOR = 10,
    bcrypt = require('bcrypt'),
    autoIncrement = require('./db');

var ProductSchema = new Schema({
    _id: Number,
    name: {
        type: String
    },
    category: [{ type: Number, ref: 'Person' }]
});

ProductSchema.plugin(autoIncrement.plugin, 'Product');

module.exports = mongoose.model('Product', ProductSchema);