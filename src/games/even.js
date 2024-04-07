import AppGames from '../index.js';

export default function PlayGame() 
{   
    let expressions = [];
    let result = [];
    for(let i = 0; i < 3; i++)
    {
        let num = Math.floor(Math.random() * 100) + 1;
        expressions.push(num);
        result.push(isEven(num) === true ? 'yes' : 'no');
    }   
    AppGames('Answer "yes" if the number is even, otherwise answer "no".', expressions, result);
}

function isEven(n) {
    return n % 2 === 0;
 }