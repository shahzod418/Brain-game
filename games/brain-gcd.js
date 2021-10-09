"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var cli_1 = require("../src/cli");
var random_values_1 = require("../src/random-values");
var getGreatestCommonDivisor = function (firstNumber, secondNumber) {
    var divisor = 1;
    var iter = 1;
    while (iter <= firstNumber && iter <= secondNumber) {
        if (firstNumber % iter === 0 && secondNumber % iter === 0) {
            divisor = iter;
        }
        iter += 1;
    }
    return divisor;
};
var brainGCD = function (correctAnswerCount) {
    if (correctAnswerCount === void 0) { correctAnswerCount = 1; }
    if (correctAnswerCount > 3) {
        return;
    }
    var firstNumber = (0, random_values_1["default"])(0, 100);
    var secondNumber = (0, random_values_1["default"])(0, 100);
    var correctAnswer = String(getGreatestCommonDivisor(firstNumber, secondNumber));
    console.log("\u0412\u043E\u043F\u0440\u043E\u0441: " + firstNumber + " " + secondNumber);
    var userAnswer = readlineSync.question("Ответ: ");
    if ((0, cli_1.checkAnswer)(userAnswer, correctAnswer, correctAnswerCount)) {
        brainGCD(correctAnswerCount + 1);
    }
};
exports["default"] = brainGCD;
