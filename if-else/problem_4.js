let year = 2027;

if (year) {
    if (year % 4 === 0) {
        if (year % 100 !== 0) {
            console.log('Leap year');
        }
    }
    else if (year % 400 === 0) {
        console.log('Leap year');
    }
    else {
        console.log('Not a leap year');
    }
}

else {
    console.log('Please Enter a Year');
}