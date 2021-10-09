import readlineSync = require("readline-sync");
import { checkAnswer } from "../src/cli";
import getRandomIntInclusive from "../src/random-values";

const getGreatestCommonDivisor = (
  firstNumber: number,
  secondNumber: number
): number => {
  let divisor = 1;
  let iter = 1;
  while (iter <= firstNumber && iter <= secondNumber) {
    if (firstNumber % iter === 0 && secondNumber % iter === 0) {
      divisor = iter;
    }
    iter += 1;
  }
  return divisor;
};

const brainGCD = (correctAnswerCount = 1): void => {
  if (correctAnswerCount > 3) {
    return;
  }

  const firstNumber: number = getRandomIntInclusive(0, 100);
  const secondNumber: number = getRandomIntInclusive(0, 100);
  const correctAnswer = String(
    getGreatestCommonDivisor(firstNumber, secondNumber)
  );

  console.log(`Вопрос: ${firstNumber} ${secondNumber}`);

  const userAnswer: string = readlineSync.question("Ответ: ");
  if (checkAnswer(userAnswer, correctAnswer, correctAnswerCount)) {
    brainGCD(correctAnswerCount + 1);
  }
};

export default brainGCD;
