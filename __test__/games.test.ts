import brainEven from "../games/brain-even";
import brainCalc from "../games/brain-calc";
import brainGCD from "../games/brain-gcd";
import brainProgression from "../games/brain-progression";
import brainPrime from "../games/brain-prime";

test("Games return undefined", () => {
  expect(brainEven(4)).toBeUndefined();
  expect(brainCalc(4)).toBeUndefined();
  expect(brainGCD(4)).toBeUndefined();
  expect(brainProgression(4)).toBeUndefined();
  expect(brainPrime(4)).toBeUndefined();
});
