/*
Palindrome
Programmet tar in ett tal och kollar om det är en palindrom eller inte.
notes för mig själv -->
dvs ett tal som man kan skriva baklängs och det kommer vara det samma
ex 121, 44, 545 etc
*/

var ps = require("prompt-sync");
var prompt = ps();

let rest = 0;
let summary = 0;
let number = parseInt(prompt(">"));
let temporaryNumber = number;

while(number>0){
    rest = number%10;
    number = parseInt(number/10);
    summary = (summary*10)+rest;
};
if(summary==temporaryNumber){
    console.log("Palindrome");
}
else{
    console.log("Not palindrome");
};