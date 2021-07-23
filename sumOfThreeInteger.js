const prompt = require('prompt-sync')();

let arrayList = [];
let number = parseInt(prompt("Enter the Total numbers: "));
i = 0;
while ( i < number) {
    arrayList[i] = parseInt(prompt('Enter Element ' + (i+1)+ ": "));
    i++;
}
let found = 0;

for ( i = 0; i <= number - 2 ; i++ ) {
    for ( j = i + 1; j <= number - 1; j++ ) {
        for ( k = j + 1; k < number; k++ ) {
            let a = arrayList[i];
            let b = arrayList[j];
            let c = arrayList[k];
            let sum = a + b + c;
            if ( sum == 0 ) {
                console.log("Numbers found: " +a+ " " +b+ " " +c);
                found = 1;
                return;
            }
            else if ( sum != 0 ) {
                found = 0;
                continue;
            }
        }
    }
}
if ( found == 0 ) {
    console.log("Does not exist!");
}