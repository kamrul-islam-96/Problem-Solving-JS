function findMaxNumber (p, q, r) {
    if (p > q && p > r) {
        console.log('Number one is Max');
    }

    else if (q > p && q > r) {
        console.log('Number two is Max');
    }

    else {
        console.log('Number three is Max');
    }
}

findMaxNumber (10, 50, 30);