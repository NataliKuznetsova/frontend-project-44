import AppGames from '../index.js';

export default function Calc() {
  const expressions = [];
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    const op = ['*', '+', '-'][Math.floor(Math.random() * 3)];
    expressions.push(`${a} ${op} ${b}`);
    switch (op) {
      case '*':
        result.push((a * b).toString());
        break;
      case '+':
        result.push((a + b).toString());
        break;
      case '-':
        result.push((a - b).toString());
        break;
      default:
        result.push((0).toString());
    }
  }

  AppGames('What is the result of the expression?', expressions, result);
}
