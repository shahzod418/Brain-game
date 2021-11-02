import getRandomIntInclusive, {
  getRandomTransactions,
} from "../src/random-values";

test("Random value", () => {
  expect(getRandomIntInclusive(0, 100)).toBeLessThan(101);
  expect(getRandomIntInclusive(0, 10)).not.toBeGreaterThan(11);
  expect(getRandomTransactions(["*"])).toEqual("*");
});
