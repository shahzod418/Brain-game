import { openSync, rmSync } from "fs";
import { resolve } from "path";
import { cwd } from "process";
import gameListWithDescription, { gameList } from "../src/game-list";

beforeAll(() => openSync(resolve(cwd(), "games", "brain-test.ts"), "w"));
afterAll(() => rmSync(resolve(cwd(), "games", "brain-test.ts")));

test("Game list with new file", () => {
  expect(gameList()).toEqual([
    "calc",
    "even",
    "gcd",
    "prime",
    "progression",
    "test",
  ]);
});

test("Game description with new file", () => {
  expect(gameListWithDescription()).toEqual([
    "calc: Arithmetic expressions that need to be calculated",
    "even: Determining an even number",
    "gcd: Determining the greatest common divisor",
    "prime: Definition of a prime number",
    "progression: Finding missing numbers in a sequence of numbers",
    "test: Description comming soon",
  ]);
});
