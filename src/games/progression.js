import AppGames from '../index.js';

export default function PlayGame() 
{   
    let expressions = [];
    let result = [];
    for(let i = 0; i < 3; i++)
    {
        let start = Math.floor(Math.random() * 20) + 1;
        let step = Math.floor(Math.random() * 5) + 1;
        let nap = Math.floor(Math.random() * 10) + 1;
        let exp = '';
        let actual = start;

        for(let i = 0; i < 10; i++)
        {  
            if(i === nap)
            {
                result.push(actual.toString())
                exp = exp + '.. ';
            }
            else
            {
                exp += actual + ' ';  
            }
            actual += step;   
        }
        expressions.push(exp);
    }   

    AppGames('What number is missing in the progression?', expressions, result);
}
