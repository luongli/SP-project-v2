/**
 * Created by samhv on 11/30/16.
 */
'use strict'

var express = require('express');
var Product = require('../model/product')
var Catagory = require('../model/category')

var SearchProductController = express.Router()

var searchProductByCategory = function (req, res) {
    // find category
    Catagory.findOne({'name': req.params.name}).populate('products').exec().then(function (category) {
        if (!category) {
            // not found
            res.json({
                status: false,
                error: "Category " + req.params.name + " not found"
            });
            return;
        }
        // found
        // get product list
        res.json({
            status: true,
            products: category.products
        });
    });

}

var searchProductByName = function (req, res) {
    // get Product name
    var promise = Product.find({'name': req.params.name}).populate('category', 'name').exec();
    promise.then(function (products) {
        console.log(products);
        if (Object.keys(products).length == 0) {

            res.json({
                status: false,
                error: "product " + req.params.name + " not found"
            });
            return;
        }

        res.json({
            status: true,
            products: products
        });
    });

}

SearchProductController.get('/product/:name', searchProductByName)
SearchProductController.get('/category/:name', searchProductByCategory)

module.exports = SearchProductController;