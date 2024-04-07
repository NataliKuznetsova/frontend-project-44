import AppGames from '../index.js';

export default function PlayGame() {
  const expressions = [];
  const result = [];
  for (let i = 0; i < 3; i += 1) {
    const num = Math.floor(Math.random() * 100) + 1;
    expressions.push(num);
    result.push(num % 2 === 0 ? 'yes' : 'no');
  }
  AppGames('Answer "yes" if the number is even, otherwise answer "no".', expressions, result);
}
