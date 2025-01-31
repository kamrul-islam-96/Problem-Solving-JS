let unknownNumber = 150;

if (unknownNumber > 1 && unknownNumber < 100) {
    if (unknownNumber % 3 === 0 && unknownNumber % 5 === 0) {
        console.log('FizzBuzz');
    }

    else if (unknownNumber % 3 === 0) {
        console.log('Fizz');
    }

    else if (unknownNumber % 5 === 0) {
        console.log('Buzz');
    }

    else {
        console.log(unknownNumber);
    }
}


else {
    console.log(unknownNumber);
}