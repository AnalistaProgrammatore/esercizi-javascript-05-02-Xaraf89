/**
* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
* At each position of the grid there is either a space or a "#" character. 
* The characters should form a chessboard.
*/

/*scacchiera 8x8 */

var x = " # " + " # " + " # " + " # ";
var y = " " + " # " + " # " + " # " + " # ";

for ( number = 0; number <= 7; number++) {
    if(number % 2 ==0) {
        console.log(y);
        } else {
            console.log(x)
        }
}    