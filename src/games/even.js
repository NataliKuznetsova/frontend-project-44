import appGames from '../index.js';
import getRandom from '../helper.js';

const runGame = () => {
  const num = getRandom(1, 100);
  return [num, num % 2 === 0 ? 'yes' : 'no'];
};

export default () => {
  appGames('Answer "yes" if the number is even, otherwise answer "no".', runGame);
};
