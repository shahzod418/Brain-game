import readlineSync = require("readline-sync");
import { checkAnswer } from "../src/cli";
import getRandomIntInclusive from "../src/random-values";

const getProgressionLine = (
  progressionStart: number,
  progressionDifference: number
): string[] => {
  const result: string[] = [];
  let iter: number = progressionStart;
  while (result.length < 10) {
    result.push(String(iter));
    iter += progressionDifference;
  }
  return result;
};

const brainProgression = (correctAnswerCount = 1): void => {
  if (correctAnswerCount > 3) {
    return;
  }

  const progressionStart: number = getRandomIntInclusive(0, 100);
  const progressionDifference: number = getRandomIntInclusive(0, 100);
  const progressionLine: string[] = getProgressionLine(
    progressionStart,
    progressionDifference
  );
  const questionIndex: number = getRandomIntInclusive(0, 10);

  const correctAnswer: string = progressionLine[questionIndex];

  const question: string[] = progressionLine.slice(0);
  question[questionIndex] = "..";

  console.log(`Вопрос: ${question.join(" ")}`);

  const userAnswer: string = readlineSync.question("Ваш ответ: ");
  if (checkAnswer(userAnswer, correctAnswer, correctAnswerCount)) {
    brainProgression(correctAnswerCount + 1);
  }
};

export default brainProgression;
