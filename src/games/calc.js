import AppGames from '../index.js';

export default function Calc() 
{
    let expressions = [];
    let result = [];
    for(let i = 0; i < 3; i++)
    {
        let a = Math.floor(Math.random() * 10) + 1;
        let b = Math.floor(Math.random() * 10) + 1;
        let op = ["*", "+", "-"][Math.floor(Math.random()*3)];
        expressions.push(a + " " + op + " " + b);
        switch (op) {
            case '*':
                result.push((a * b).toString());
                break;
            case '+':
                result.push((a + b).toString());
                break;
            case '-':
                result.push((a - b).toString());
              break;
          }
    }

    AppGames('What is the result of the expression?', expressions, result);       
    
}