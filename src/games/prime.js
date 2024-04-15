import appGames from '../index.js';
import getRandom from '../helper.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const runGame = () => {
  const num = getRandom(2, 5);
  const result = isPrime(num);

  return [String(num), result];
};

export default () => {
  appGames('Answer "yes" if given number is prime. Otherwise answer "no".', runGame);
};
