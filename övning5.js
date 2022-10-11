/*
Primtal
Programmet tar in ett intervall och visar största primtalet inom intervallet
*/

var ps = require("prompt-sync");
var prompt = ps();

let startNumber = parseInt(prompt("Write your start number > "));
let endNumber = parseInt(prompt("Write your ending number > "));
let intervall = [];
let primeNumber = [];
let alert = 0;
for (var i = startNumber; i <= endNumber; i++){
    if (i == 1 || i == 0){
        alert = 1;
    }
}for(var j = 2; j <= i; j++){
    if (i % j === 0){
        push
    }
}