function isNumberPositiveAndEven (number) {
    if (number > 0) {
        if (number % 2 === 0) {
            console.log('The number is Positive Even');
        }
        else {
            console.log ('The Number is not Positive Even');
        }
    }

    else {
        console.log ('The Number is not not Positive Even')
    }
}

isNumberPositiveAndEven (11);