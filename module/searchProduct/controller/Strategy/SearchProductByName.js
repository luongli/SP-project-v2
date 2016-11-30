/**
 * Created by samhv on 11/30/16.
 */
'use strict'

var Product = require('../../model/product')


var SearchProductByName = function () {
    this.search = function (name, callback) {
        // get Product name
        var promise = Product.find({'name': name}).populate('category', 'name').exec();
        promise.then(callback);
    }
}

module.exports = SearchProductByName;