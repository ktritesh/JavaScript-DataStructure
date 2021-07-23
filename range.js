let x = 0;
let y = 1;
const number = [];

while ( y <= 100 ) {
    if ( y % 11 == 0 ) {
        while ( x < y ) {
            number[x] = y;
            x++;
            break;
        }
    }
    y++
}
console.log("Repeated numbers are: " +number)