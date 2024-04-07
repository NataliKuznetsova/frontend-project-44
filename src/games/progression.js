import AppGames from '../index.js';

export default function PlayGame() {
  const expressions = [];
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const start = Math.floor(Math.random() * 20) + 1;
    const step = Math.floor(Math.random() * 5) + 1;
    const gap = Math.floor(Math.random() * 9) + 1;
    const exp = [];
    let actual = start;

    for (let j = 0; j < 10; j += 1) {
      if (j === gap) {
        result.push(actual.toString());
        exp.push('..');
      } else {
        exp.push(actual);
      }

      actual += step;
    }
    expressions.push(exp.join(' '));
  }

  AppGames('What number is missing in the progression?', expressions, result);
}
