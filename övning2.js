/*
Pattern 1 (använd while-loop)
Programmet tar in  siffra och skriver ut följande mönster. Exempel:

Input: 5
Output:
#####
#####
#####
#####
#####
*/

var ps = require("prompt-sync");
var prompt = ps();
let number=parseInt(prompt("Write your number > "))
//ändrar antal columns beronde på startnummer
let columns =1;
while(columns<=number)
{
    let row=1;
    while(row<=number)
    {
        //gör så att man kan skriva på samma line
        process.stdout.write("#");
        row++;
    }
    process.stdout.write("\n");
    columns++;
}