import userWelcome, { checkAnswer } from "../src/cli";

test("Correct Answer", () => {
  expect(checkAnswer("yes", "yes", 2)).toBeTruthy();
  expect(checkAnswer("4", "5", 2)).toBeFalsy();
  expect(checkAnswer("4", "5", 3)).not.toBeTruthy();
});

test("User Welcome", () => {
  expect(userWelcome("test")).toBeUndefined();
});
