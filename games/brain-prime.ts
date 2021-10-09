import readlineSync = require("readline-sync");
import { checkAnswer } from "../src/cli";
import getRandomIntInclusive from "../src/random-values";

const isPrime = (num: number): boolean => {
  let iter = 2;
  while (iter < num) {
    if (num % iter === 0) {
      return false;
    }
    iter += 1;
  }
  return true;
};

const brainPrime = (correctAnswerCount = 1): void => {
  if (correctAnswerCount > 3) {
    return;
  }

  const question: number = getRandomIntInclusive(0, 100);
  console.log(`Вопрос: ${question}`);

  let correctAnswer: string;
  if (isPrime(question)) {
    correctAnswer = "да";
  } else {
    correctAnswer = "нет";
  }

  const userAnswer: string = readlineSync.question("Ваш ответ: ");
  if (checkAnswer(userAnswer, correctAnswer, correctAnswerCount)) {
    brainPrime(correctAnswerCount + 1);
  }
};

export default brainPrime;
