"use strict";
exports.__esModule = true;
exports.checkAnswer = void 0;
var readlineSync = require("readline-sync");
var brain_even_1 = require("../games/brain-even");
var brain_calc_1 = require("../games/brain-calc");
var brain_gcd_1 = require("../games/brain-gcd");
var brain_progression_1 = require("../games/brain-progression");
var brain_prime_1 = require("../games/brain-prime");
var gameList = ["even", "calc", "gcd", "progression", "prime"];
//
// const gameDescription = {
//   even: 'Determining an even number',
//   calc: 'Arithmetic expressions that need to be calculated',
//   gcd: 'Determining the greatest common divisor',
//   progression: 'Finding missing numbers in a sequence of numbers',
//   prime: 'Definition of a prime number',
// };
var userName = "";
var userWelcome = function (gamename) {
    if (!gameList.includes(gamename)) {
        return console.log("Не выбрана игра из списка.\nВоспользуйтесь опцией --list для просмотра списка игр");
    }
    console.log("Добро пожаловать в Игры Разума!");
    userName = readlineSync.question("Могу я узнать ваше имя? ");
    console.log("\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435, " + userName + "!");
    switch (gamename) {
        case "even":
            console.log("Ответьте 'да', если число четное, в противном случае ответьте 'нет'.");
            (0, brain_even_1["default"])();
            break;
        case "calc":
            console.log("Что является результатом выражения?");
            (0, brain_calc_1["default"])();
            break;
        case "gcd":
            console.log("Найдите наибольший общий делитель заданных чисел.");
            (0, brain_gcd_1["default"])();
            break;
        case "progression":
            console.log("Какое число отсутствует в прогрессии?");
            (0, brain_progression_1["default"])();
            break;
        case "prime":
            console.log("Ответьте 'да', если данное число является простым. В противном случае ответьте 'нет'.");
            (0, brain_prime_1["default"])();
            break;
        default:
    }
    return console.log("\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0435\u043C \u0435\u0449\u0435 \u0440\u0430\u0437, " + userName + "!");
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
    return false;
};
exports.checkAnswer = checkAnswer;
exports["default"] = userWelcome;
