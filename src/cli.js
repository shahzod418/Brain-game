"use strict";
exports.__esModule = true;
exports.checkAnswer = void 0;
var readlineSync = require("readline-sync");
var userName = readlineSync.question("Могу я узнать ваше имя? ");
var userWelcome = function () {
    console.log("\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, " + userName + "!");
    console.log("Выберите игру из списка:");
    console.log("1. Проверка на чётность");
    console.log("2. Калькулятор");
    console.log("3. НОД");
    console.log("4. Арифметическая прогрессия");
    console.log("5. Простое ли число?");
    return Number(readlineSync.question("Номер игры: "));
};
var checkAnswer = function (userAnswer, correctAnswer, correctAnswerCount) {
    if (correctAnswer === userAnswer) {
        console.log("Правильно!");
        if (correctAnswerCount === 3) {
            console.log("\u041F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u044F\u0435\u043C, " + userName + "!");
        }
        return true;
    }
    console.log("'" + userAnswer + "' \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442 ;(. \u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442 \u0431\u044B\u043B '" + correctAnswer + "'.");
    console.log("\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0435\u043C \u0435\u0449\u0435 \u0440\u0430\u0437, " + userName + "!");
    return false;
};
exports.checkAnswer = checkAnswer;
exports["default"] = userWelcome;
