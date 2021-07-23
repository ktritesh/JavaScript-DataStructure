let MAXCOUNT = 10;
let count = 0;
let temp = 0;
const num = [];

while ( count < MAXCOUNT ) {
    num[count] = Math.floor(Math.random() * 900 ) + 100;
    count++;
}

for ( i = 0; i < MAXCOUNT ; i++ ) {
    for ( j = i; j < MAXCOUNT; j++ ) {
        if ( num[i]  > num[j] ) {
            temp = num[i];
            num[i] = num[j];
            num[j] = temp;
        }
    }
}


for ( i = 0; i < num.length; i++ ) {
    console.log("Second minimum: " +num[i+1]);
    console.log("Second maximum: " +num[num.length - 2]);
    break;
}