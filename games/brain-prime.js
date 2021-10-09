"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var cli_1 = require("../src/cli");
var random_values_1 = require("../src/random-values");
var isPrime = function (num) {
    var iter = 2;
    while (iter < num) {
        if (num % iter === 0) {
            return false;
        }
        iter += 1;
    }
    return true;
};
var brainPrime = function (correctAnswerCount) {
    if (correctAnswerCount === void 0) { correctAnswerCount = 1; }
    if (correctAnswerCount > 3) {
        return;
    }
    var question = (0, random_values_1["default"])(0, 100);
    console.log("\u0412\u043E\u043F\u0440\u043E\u0441: " + question);
    var correctAnswer;
    if (isPrime(question)) {
        correctAnswer = "да";
    }
    else {
        correctAnswer = "нет";
    }
    var userAnswer = readlineSync.question("Ваш ответ: ");
    if ((0, cli_1.checkAnswer)(userAnswer, correctAnswer, correctAnswerCount)) {
        brainPrime(correctAnswerCount + 1);
    }
};
exports["default"] = brainPrime;
