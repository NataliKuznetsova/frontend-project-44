import readlineSync from 'readline-sync';

const countRounds = 3;

export default (task, runGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(task);
  for (let i = 0; i < countRounds; i += 1) {
    const [question, result] = runGame();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (result === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
