const crypto = require('crypto');

const primeDividers = [2, 3, 5, 7 ]
let fizzBuzzString = "";

for (let i = 1; i <= 100; i++) {
    let isPrime = true;
    for (let num of primeDividers) {
        if ( i % num == 0 && !primeDividers.includes(i)) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        fizzBuzzString += "fizz";
    } else {
        fizzBuzzString += "buzz";
    }
}

const hash = crypto.createHash('sha1');
let outputHexHash = hash.update(fizzBuzzString).digest('hex');
console.log(outputHexHash);