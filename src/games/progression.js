import appGames from '../index.js';
import getRandom from '../helper.js';

const runGame = () => {
  const start = getRandom(1, 20);
  const step = getRandom(1, 6);
  const gap = getRandom(1, 9);
  const exp = [];
  let actual = start;
  let result = '';

  for (let i = 0; i < 10; i += 1) {
    if (i === gap) {
      result = actual.toString();
      exp.push('..');
    } else {
      exp.push(actual);
    }

    actual += step;
  }

  return [exp.join(' '), result];
};

export default () => {
  appGames('What number is missing in the progression?', runGame);
};
