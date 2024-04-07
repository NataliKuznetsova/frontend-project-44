import AppGames from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

export default function PlayGame() {
  const expressions = [];
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const num = Math.floor(Math.random() * 5) + 2;
    expressions.push(num);
    result.push(isPrime(num));
  }
  AppGames('Answer "yes" if given number is prime. Otherwise answer "no".', expressions, result);
}
