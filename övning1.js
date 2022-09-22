/*
Summa
Programmet tar in ett heltal och beräknar summan av alla tal från 1 till det givna talet
*/
var ps = require("prompt-sync");
var prompt = ps();

let number = parseInt(prompt("Write your number > "));
let sum = 0;
for (let i = 1; i <= number; i++){
    sum=sum + i
};
console.log(sum);