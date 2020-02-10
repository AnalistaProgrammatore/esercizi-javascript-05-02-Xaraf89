/**
* Write a loop that makes seven calls to console.log to output the following triangle
*/

/* Scorrimento Array*/
let myArray = ["#", "##", "###", "####", "#####", "######" , "#######"];

for(let i = 0; i < myArray.length; i++){

console.log(myArray[i]);

}
/*loop stringa controllato (triangolo)*/

let result = '';
for (let x = 0; x < 7; x++) {
  result += '#'
  console.log(result)
}