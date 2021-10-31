#!/usr/bin/env node

import userWelcome from "../src/cli";
import brainEven from "../games/brain-even";
import brainCalc from "../games/brain-calc";
import brainGCD from "../games/brain-gcd";
import brainProgression from "../games/brain-progression";
import brainPrime from "../games/brain-prime";

const { createCommand } = require('commander');
const program = createCommand();

program
  .version('version: 0.0.3', '-v, --version', 'output the current version')
  .helpOption('-h, --help', 'read more information')
  .description('A set of CLI arithmetic games')
  .option('-e, --even', 'Determining an even number')
  .option('-c, --calc', 'Arithmetic expressions that need to be calculated')
  .option('-g, --gcd', 'Determining the greatest common divisor')
  .option('-pg, --progression', 'Finding missing numbers in a sequence of numbers')
  .option('-pm, --prime', 'Definition of a prime number')
  .parse();

// const gameWelcome = (): void => {
//   console.log("Добро пожаловать в Игры Разума!");
//   switch (userWelcome()) {
//     case 1:
//       console.log(
//         'Ответьте "да", если число четное, в противном случае ответьте "нет".'
//       );
//       brainEven();
//       break;
//     case 2:
//       console.log("Что является результатом выражения?");
//       brainCalc();
//       break;
//     case 3:
//       console.log("Найдите наибольший общий делитель заданных чисел.");
//       brainGCD();
//       break;
//     case 4:
//       console.log("Какое число отсутствует в прогрессии?");
//       brainProgression();
//       break;
//     case 5:
//       console.log(
//         'Ответьте "да", если данное число является простым. В противном случае ответьте "нет".'
//       );
//       brainPrime();
//       break;
//     default:
//       gameWelcome();
//   }
// };
//
// gameWelcome();
