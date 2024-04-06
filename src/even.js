import readlineSync from 'readline-sync';

export default function PlayGame() 
{
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log("Hello, " + name);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let countCorrectAnswer = 0;

    do
    {
        let number = Math.floor(Math.random() * 100) + 1;
        console.log("Question, " + number);
        const answer = readlineSync.question('Your answer: ');
        if(isEven(number) === (answer === "yes"))
        {
            countCorrectAnswer++;
            console.log("Correct!");
        }
        else
        {
            console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
            console.log(`Let's try again, ${name}`);
            break;
        }
    } while (countCorrectAnswer < 3) 

    if (countCorrectAnswer === 3)
    {
        console.log(`Congratulations, ${name}!`);
    }
}

function isEven(n) {
    return n % 2 == 0;
 }