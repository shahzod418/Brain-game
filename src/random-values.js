"use strict";
exports.__esModule = true;
exports.getRandomTransactions = void 0;
var getRandomIntInclusive = function (minimum, maximum) {
    var min = Math.ceil(minimum);
    var max = Math.floor(maximum);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var getRandomTransactions = function (transactions) {
    var lastIndex = transactions.length - 1;
    return transactions[getRandomIntInclusive(0, lastIndex)];
};
exports.getRandomTransactions = getRandomTransactions;
exports["default"] = getRandomIntInclusive;
