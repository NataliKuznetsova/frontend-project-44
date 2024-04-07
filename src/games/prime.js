import AppGames from '../index.js';

export default function PlayGame() 
{   
    let expressions = [];
    let result = [];
    for(let i = 0; i < 3; i++)
    {
        let num = Math.floor(Math.random() * 5) + 2;
        expressions.push(num);
        result.push(isPrime(num));
    }   
    AppGames('Answer "yes" if given number is prime. Otherwise answer "no".', expressions, result);
}

function isPrime(num) 
{
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return "no";
        }
    }
    
    return 'yes';
  }
  