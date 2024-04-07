import AppGames from '../index.js';

export default function PlayGame() 
{   
    let expressions = [];
    let result = [];
    for(let i = 0; i < 3; i++)
    {
        let m = Math.floor(Math.random() * 20) + 1;
        let n = Math.floor(Math.random() * 20) + 1;
        expressions.push(m + ' ' + n);
        
        while(m!= 0 && n!=0)
        {
            if(m > n)
            {
                m = m % n;
            }
            else
            {
                n = n % m;
            }
        }
    
        result.push((m + n).toString());
    }   

    AppGames('Find the greatest common divisor of given numbers.', expressions, result);
}
