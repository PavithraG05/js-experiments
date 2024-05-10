let myScores = [92, 98, 84, 76, 89, 99, 100]; 
let yourScores = [82, 98, 94, 88, 92, 100, 100]; 

function getAverage(myScores)
{   let sum = 0;
    for(let i in myScores)
    {
        sum += myScores[i];
    }
    return sum;
}

console.log(`Total: ${getAverage(myScores)}`);
console.log(`Total: ${getAverage(yourScores)}`);
