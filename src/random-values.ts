const getRandomIntInclusive = (minimum: number, maximum: number): number => {
  const min: number = Math.ceil(minimum);
  const max: number = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomTransactions = (transactions: string[]): string => {
  const lastIndex: number = transactions.length - 1;
  return transactions[getRandomIntInclusive(0, lastIndex)];
};

export default getRandomIntInclusive;
