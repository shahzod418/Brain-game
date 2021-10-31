#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var commander_1 = require("commander");
var cli_1 = require("../src/cli");
var program = (0, commander_1.createCommand)();
program
    .version("version: 0.0.3", "-v, --version", "output the current version")
    .helpOption("-h, --help", "read more information")
    .description("A set of CLI arithmetic games")
    .option("-l, --list", "list of games with description")
    .argument("gamename")
    .action(function (gamename) {
    if (gamename) {
        (0, cli_1["default"])(gamename);
    }
})
    .parse();
