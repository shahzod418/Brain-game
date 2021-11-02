"use strict";
exports.__esModule = true;
exports.gameList = exports.gameDescription = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
var process_1 = require("process");
var gameDescription = function () { return ({
    even: "Determining an even number",
    calc: "Arithmetic expressions that need to be calculated",
    gcd: "Determining the greatest common divisor",
    progression: "Finding missing numbers in a sequence of numbers",
    prime: "Definition of a prime number"
}); };
exports.gameDescription = gameDescription;
var getAbsolutePath = function (file) { return (0, path_1.resolve)((0, process_1.cwd)(), file); };
var getExtension = function (file) { return (0, path_1.extname)(file); };
var gameList = function (absolutePath) {
    if (absolutePath === void 0) { absolutePath = getAbsolutePath("./games/"); }
    var gameArray = [];
    (0, fs_1.readdirSync)(absolutePath).forEach(function (file) {
        gameArray.push(file);
    });
    return gameArray
        .filter(function (file) { return getExtension(file) === ".ts"; })
        .map(function (file) { return file.split("-").slice(-1).join().split(".")[0]; });
};
exports.gameList = gameList;
var gameListWithDescription = function () {
    return (0, exports.gameList)().map(function (gameName) {
        if ((0, exports.gameDescription)()[gameName]) {
            return gameName + ": " + (0, exports.gameDescription)()[gameName];
        }
        return gameName + ": Description comming soon";
    });
};
exports["default"] = gameListWithDescription;
