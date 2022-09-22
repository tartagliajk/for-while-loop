/*
Pattern 2 (använd while-loop)
Programmet tar in  siffra och skriver ut följande mönster. Exempel:

Input: 4
Output:
4 3 2 1
3 2 1
2 1
1
*/

var ps = require("prompt-sync");
var prompt = ps();
let rows = parseInt(prompt("Write your number > "));
while(rows >= 1){
    let j = parseInt(rows);
    while(j >= 1){
        //tydligen kan den inte skriva ut endast variabler utan behöver en sträng innan
        process.stdout.write("" + j);
        j--;
    }
    rows--;
    process.stdout.write("\n");
}