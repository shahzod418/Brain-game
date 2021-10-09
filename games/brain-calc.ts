import readlineSync = require("readline-sync");
import { checkAnswer } from "../src/cli";
import getRandomIntInclusive, {
  getRandomTransactions,
} from "../src/random-values";

const transactions = ["+", "-", "*"];

const brainCalc = (correctAnswerCount = 1): void => {
  if (correctAnswerCount > 3) {
    return;
  }

  const transaction: string = getRandomTransactions(transactions);
  const firstNumber: number = getRandomIntInclusive(0, 100);
  const secondNumber: number = getRandomIntInclusive(0, 100);

  let correctAnswer: string;

  switch (transaction) {
    case "+":
      correctAnswer = String(firstNumber + secondNumber);
      break;
    case "-":
      correctAnswer = String(firstNumber - secondNumber);
      break;
    case "*":
      correctAnswer = String(firstNumber * secondNumber);
      break;
    default:
      correctAnswer = "";
  }

  console.log(`Вопрос: ${firstNumber} ${transaction} ${secondNumber}`);

  const userAnswer: string = readlineSync.question("Ваш ответ: ");
  if (checkAnswer(userAnswer, correctAnswer, correctAnswerCount)) {
    brainCalc(correctAnswerCount + 1);
  }
};

export default brainCalc;
