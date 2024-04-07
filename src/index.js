import readlineSync from 'readline-sync';

export default function AppGames(question, expression, rightAnswer)
{
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log("Hello, " + name);
    console.log(question);
    let countCorrectAnswer = 0;
    for(let i = 0; i < 3; i++)
    {
        console.log("Question, " + expression[i]);
        const answer = readlineSync.question('Your answer: ');
        if(rightAnswer[i] === answer)
        {
            countCorrectAnswer++;
            console.log("Correct!");
        }
        else
        {
            console.log(answer + " is wrong answer ;(. Correct answer was " + rightAnswer[i] + '.');
            console.log(`Let's try again, ${name}`);
            break;
        }
    }

        if (countCorrectAnswer === 3)
        {
            console.log(`Congratulations, ${name}!`);
        }
}