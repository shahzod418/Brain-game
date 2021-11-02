import userWelcome, { checkAnswer } from "../src/cli";

test("Correct answer", () => {
  expect(checkAnswer("yes", "yes", 2)).toBeTruthy();
  expect(checkAnswer("4", "5", 2)).toBeFalsy();
  expect(checkAnswer("4", "5", 3)).not.toBeTruthy();
  expect(checkAnswer("5", "5", 3)).toBeTruthy();
});

test("User welcome", () => {
  expect(userWelcome("")).toBeUndefined();
});
