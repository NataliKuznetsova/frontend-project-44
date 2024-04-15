import appGames from '../index.js';
import getRandom from '../helper.js';

const runGame = () => {
  let m = getRandom(1, 20);
  let n = getRandom(1, 20);
  const expression = `${m} ${n}`;

  while (m !== 0 && n !== 0) {
    if (m > n) {
      m %= n;
    } else {
      n %= m;
    }
  }

  return [expression, (m + n).toString()];
};

export default () => {
  appGames('Find the greatest common divisor of given numbers.', runGame);
};
