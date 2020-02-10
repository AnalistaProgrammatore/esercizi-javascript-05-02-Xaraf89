/**
* Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
* For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
* When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5
* (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

/*ciclo numero 1-100 senza numeri divisibili per 3 e 5 (fizz;buzz;fizzbuzz)*/

for ( number = 1; number <= 100; number++) {
    if(number % 3==0 && number % 5 ==0) {
        console.log("fizzbuzz")
        } else if(number % 3==0) {
            console.log("fizz")
        } else if(number % 5==0 ) {
            console.log("buzz")
        } else {
            console.log(number)
        }
}  