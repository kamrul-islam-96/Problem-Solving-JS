let number = 50;

if (number) {
    if (number % 2 === 0) {
        if (number % 5 === 0) {
            console.log('Even and divisible by 5');
        }
        else {
            console.log('Not both');
        }
    }
    else {
        console.log('Not both');
    }
}
else {
    console.log('Pleace Enter a Number');
}