function isNumberDivisibleByLargerNumber(a, b) {
    let number = a * b;
    let largerNumber = Math.max(a, b);

    if (number % largerNumber === 0) {
        console.log('Yes, the product is divisible by the larger number.');
    } else {
        console.log('No, the product is not divisible by the larger number.');
    }
}


isNumberDivisibleByLargerNumber(4, 2);  
