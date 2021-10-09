"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var cli_1 = require("../src/cli");
var random_values_1 = require("../src/random-values");
var getProgressionLine = function (progressionStart, progressionDifference) {
    var result = [];
    var iter = progressionStart;
    while (result.length < 10) {
        result.push(String(iter));
        iter += progressionDifference;
    }
    return result;
};
var brainProgression = function (correctAnswerCount) {
    if (correctAnswerCount === void 0) { correctAnswerCount = 1; }
    if (correctAnswerCount > 3) {
        return;
    }
    var progressionStart = (0, random_values_1["default"])(0, 100);
    var progressionDifference = (0, random_values_1["default"])(0, 100);
    var progressionLine = getProgressionLine(progressionStart, progressionDifference);
    var questionIndex = (0, random_values_1["default"])(0, 10);
    var correctAnswer = progressionLine[questionIndex];
    var question = progressionLine.slice(0);
    question[questionIndex] = "..";
    console.log("\u0412\u043E\u043F\u0440\u043E\u0441: " + question.join(" "));
    var userAnswer = readlineSync.question("Ваш ответ: ");
    if ((0, cli_1.checkAnswer)(userAnswer, correctAnswer, correctAnswerCount)) {
        brainProgression(correctAnswerCount + 1);
    }
};
exports["default"] = brainProgression;
