import { readdirSync } from "fs";
import { resolve, extname } from "path";
import { cwd } from "process";

interface gameDescription {
  even: string;
  calc: string;
  gcd: string;
  progression: string;
  prime: string;
}

const gameDescription: gameDescription = {
  even: "Determining an even number",
  calc: "Arithmetic expressions that need to be calculated",
  gcd: "Determining the greatest common divisor",
  progression: "Finding missing numbers in a sequence of numbers",
  prime: "Definition of a prime number",
};

const getAbsolutePath = (file: string): string => resolve(cwd(), file);

const getExtension = (file: string): string => extname(file);

export const gameList = (): string[] => {
  const gameArray: string[] = [];

  readdirSync(getAbsolutePath("./games/")).forEach((file) => {
    gameArray.push(file);
  });

  return gameArray
    .filter((file) => getExtension(file) === ".ts")
    .map((file) => file.split("-").slice(-1).join().split(".")[0]);
};

const gameListWithDescription = (): string[] => {
  return gameList().map((gameName) => {
    if (gameDescription[gameName]) {
      return `${gameName}: ${gameDescription[gameName]}`;
    }
    return `${gameName}: Description comming soon`;
  });
};

export default gameListWithDescription;
