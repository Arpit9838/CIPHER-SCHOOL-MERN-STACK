console.log("My console statement");


    var score = 30;
    var result = 50;
    const PI = 3.14;

    console.log(score);
    console.log(result);
    console.log(PI);

let score = 30;                    
let result = "10";               

// BEDMAS 
let finalScore = score + result;    
console.log(finalScore);           

let penality = score - result;      
console.log(penality);              

console.log(typeof (penality));     

let totalGames = 5;
let avgScore = finalScore / totalGames;
console.log(avgScore);
console.log(typeof (avgScore));     



let value = (( finalScore ** 2 )*10/ (penality + totalGames))
console.log(value);           