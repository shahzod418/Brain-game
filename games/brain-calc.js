"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var cli_1 = require("../src/cli");
var random_values_1 = require("../src/random-values");
var transactions = ["+", "-", "*"];
var brainCalc = function (correctAnswerCount) {
    if (correctAnswerCount === void 0) { correctAnswerCount = 1; }
    if (correctAnswerCount > 3) {
        return;
    }
    var transaction = (0, random_values_1.getRandomTransactions)(transactions);
    var firstNumber = (0, random_values_1["default"])(0, 100);
    var secondNumber = (0, random_values_1["default"])(0, 100);
    var correctAnswer;
    switch (transaction) {
        case "+":
            correctAnswer = String(firstNumber + secondNumber);
            break;
        case "-":
            correctAnswer = String(firstNumber - secondNumber);
            break;
        case "*":
            correctAnswer = String(firstNumber * secondNumber);
            break;
        default:
            correctAnswer = "";
    }
    console.log("\u0412\u043E\u043F\u0440\u043E\u0441: " + firstNumber + " " + transaction + " " + secondNumber);
    var userAnswer = readlineSync.question("Ваш ответ: ");
    if ((0, cli_1.checkAnswer)(userAnswer, correctAnswer, correctAnswerCount)) {
        brainCalc(correctAnswerCount + 1);
    }
};
exports["default"] = brainCalc;
