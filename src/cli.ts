import readlineSync = require("readline-sync");

const userName: string = readlineSync.question("Могу я узнать ваше имя? ");

const userWelcome = (): number => {
  console.log(`Здравствуйте, ${userName}!`);
  console.log("Выберите игру из списка:");
  console.log("1. Проверка на чётность");
  console.log("2. Калькулятор");
  console.log("3. НОД");
  console.log("4. Арифметическая прогрессия");
  console.log("5. Простое ли число?");
  return Number(readlineSync.question("Номер игры: "));
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
  console.log(`Давайте попробуем еще раз, ${userName}!`);
  return false;
};

export default userWelcome;
