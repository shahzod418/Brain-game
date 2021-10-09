import readlineSync = require("readline-sync");
import { checkAnswer } from "../src/cli";
import getRandomIntInclusive from "../src/random-values";

const brainEven = (correctAnswerCount = 1): void => {
  if (correctAnswerCount > 3) {
    return;
  }
  const question: number = getRandomIntInclusive(0, 100);
  console.log(`Вопрос: ${question}`);

  let correctAnswer: string;
  if (question % 2 === 0) {
    correctAnswer = "да";
  } else {
    correctAnswer = "нет";
  }

  const userAnswer: string = readlineSync.question("Ваш ответ: ");
  if (checkAnswer(userAnswer, correctAnswer, correctAnswerCount)) {
    brainEven(correctAnswerCount + 1);
  }
};

export default brainEven;
