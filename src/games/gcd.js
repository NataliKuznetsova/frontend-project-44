import AppGames from '../index.js';

export default function PlayGame() {
  const expressions = [];
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    let m = Math.floor(Math.random() * 20) + 1;
    let n = Math.floor(Math.random() * 20) + 1;
    expressions.push(`${m} ${n}`);

    while (m !== 0 && n !== 0) {
      if (m > n) {
        m %= n;
      } else {
        n %= m;
      }
    }

    result.push((m + n).toString());
  }

  AppGames('Find the greatest common divisor of given numbers.', expressions, result);
}
