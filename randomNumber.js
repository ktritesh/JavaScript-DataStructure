let MAXCOUNT = 10;
let count = 0;
const num = [];

while ( count < MAXCOUNT ) {
    num[count] = Math.floor(Math.random() * 900 ) + 100;
    count++;
}

let maximum = secondMax = num[1];
let minimum = secondMin = num[1];

for (i = 0; i < num.length; i++ ) {
    if ( num[i] > maximum ) {
        secondMax = maximum;
        maximum = num[i];
    } else if ( num[i] > secondMax && num[i] != maximum ) {
        secondMax = num[i];
    } if ( num[i] < minimum ) {
        secondMin = minimum;
        minimum = num[i];
    } else if ( num[i] < secondMin && num[i] != minimum ) {
        secondMin = num[i];
    }
}

console.log("Second Maximum is: " +secondMax);
console.log("Second Minimum is: " +secondMin);