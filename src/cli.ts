import readlineSync = require("readline-sync");
import brainEven from "../games/brain-even";
import brainCalc from "../games/brain-calc";
import brainGCD from "../games/brain-gcd";
import brainProgression from "../games/brain-progression";
import brainPrime from "../games/brain-prime";

const gameList: string[] = ["even", "calc", "gcd", "progression", "prime"];
//
// const gameDescription = {
//   even: 'Determining an even number',
//   calc: 'Arithmetic expressions that need to be calculated',
//   gcd: 'Determining the greatest common divisor',
//   progression: 'Finding missing numbers in a sequence of numbers',
//   prime: 'Definition of a prime number',
// };

let userName = "";

const userWelcome = (gamename: string): void => {
  if (!gameList.includes(gamename)) {
    return console.log(
      "Не выбрана игра из списка.\nВоспользуйтесь опцией --list для просмотра списка игр"
    );
  }
  
  console.log("Добро пожаловать в Игры Разума!");

  userName = readlineSync.question("Могу я узнать ваше имя? ");

  console.log(`Здравствуйте, ${userName}!`);

  switch (gamename) {
    case "even":
      console.log(
        "Ответьте 'да', если число четное, в противном случае ответьте 'нет'."
      );
      brainEven();
      break;
    case "calc":
      console.log("Что является результатом выражения?");
      brainCalc();
      break;
    case "gcd":
      console.log("Найдите наибольший общий делитель заданных чисел.");
      brainGCD();
      break;
    case "progression":
      console.log("Какое число отсутствует в прогрессии?");
      brainProgression();
      break;
    case "prime":
      console.log(
        "Ответьте 'да', если данное число является простым. В противном случае ответьте 'нет'."
      );
      brainPrime();
      break;
    default:
  }
  return console.log(`Давайте попробуем еще раз, ${userName}!`);
};

export const checkAnswer = (
  userAnswer: string,
  correctAnswer: string,
  correctAnswerCount: number
): boolean => {
  if (correctAnswer === userAnswer) {
    console.log("Правильно!");
    if (correctAnswerCount === 3) {
      console.log(`Поздравляем, ${userName}!`);
    }
    return true;
  }
  console.log(
    `'${userAnswer}' неправильный ответ ;(. Правильный ответ был '${correctAnswer}'.`
  );
  return false;
};

export default userWelcome;
