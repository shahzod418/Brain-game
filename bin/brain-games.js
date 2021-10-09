#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var cli_1 = require("../src/cli");
var brain_even_1 = require("../games/brain-even");
var brain_calc_1 = require("../games/brain-calc");
var brain_gcd_1 = require("../games/brain-gcd");
var brain_progression_1 = require("../games/brain-progression");
var brain_prime_1 = require("../games/brain-prime");
var gameWelcome = function () {
    console.log("Добро пожаловать в Игры Разума!");
    switch ((0, cli_1["default"])()) {
        case 1:
            console.log('Ответьте "да", если число четное, в противном случае ответьте "нет".');
            (0, brain_even_1["default"])();
            break;
        case 2:
            console.log("Что является результатом выражения?");
            (0, brain_calc_1["default"])();
            break;
        case 3:
            console.log("Найдите наибольший общий делитель заданных чисел.");
            (0, brain_gcd_1["default"])();
            break;
        case 4:
            console.log("Какое число отсутствует в прогрессии?");
            (0, brain_progression_1["default"])();
            break;
        case 5:
            console.log('Ответьте "да", если данное число является простым. В противном случае ответьте "нет".');
            (0, brain_prime_1["default"])();
            break;
        default:
            gameWelcome();
    }
};
gameWelcome();
