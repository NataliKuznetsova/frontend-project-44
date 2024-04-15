import appGames from '../index.js';
import getRandom from '../helper.js';

const calculateResult = (numOne, numTwo, operator) => {
  switch (operator) {
    case '*':
      return (numOne * numTwo).toString();
    case '+':
      return (numOne + numTwo).toString();
    case '-':
      return (numOne - numTwo).toString();
    default:
      return (0).toString();
  }
};

const runGame = () => {
  const numOne = getRandom(1, 10);
  const numTwo = getRandom(1, 10);
  const op = ['*', '+', '-'][getRandom(0, 3)];
  return [`${numOne} ${op} ${numTwo}`, calculateResult(numOne, numTwo, op)];
};

export default () => {
  appGames('What is the result of the expression?', runGame);
};
