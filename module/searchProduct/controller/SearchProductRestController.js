/**
 * Created by samhv on 11/30/16.
 */
'use strict'

var express = require('express');

var SearchProductController = express.Router()

var searchProductByCategory = function (req, res) {
    // TODO
}

SearchProductController.post('/category', searchProductByCategory)

module.exports = SearchProductController;