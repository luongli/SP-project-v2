/**
 * Created by samhv on 11/30/16.
 */
'use strict'

var SearchProductStrategy = function () {
    this.searchAlgorithm = undefined;
    
    this.setSearchAlgorithm = function (algorithm) {
        this.searchAlgorithm = algorithm;
    };
    
    this.search = function (name, callback) {
        return this.searchAlgorithm.search(name, callback);
    };
};

module.exports = SearchProductStrategy;