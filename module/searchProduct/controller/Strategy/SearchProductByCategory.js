/**
 * Created by samhv on 11/30/16.
 */
'use strict'

var Catagory = require('../../model/category')

var searchProductByCategory = function () {

    this.search = function (name, callback) {
        // find category
        Catagory.findOne({'name': name}).populate('products').exec().then(callback);
    }


}

module.exports = searchProductByCategory;