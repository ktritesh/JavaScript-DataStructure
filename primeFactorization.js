const prompt = require('prompt-sync')();

let count = 0;
let isPrime = 0;
let result = [];
let number = parseInt(prompt("Enter the number for prime factors: "));

for ( i = 2; i <= number; i++ ) {
    let a = number % i;
    if ( a == 0) {
        isPrime = 1;
        for ( j = 2; j <= i / 2; j++) {
            let b = i % j;
            if ( b == 0) {
                isPrime = 0;
                break;
            }
        }
        if ( isPrime == 1 ) {
            result [count] = i;
            count++;
        }
    }
}
if ( isPrime == 0 || isPrime == 1 ) {
    console.log(result);
}