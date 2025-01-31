function isPersonWeight (weight) {
    if (weight === 50) {
        console.log('The person weight is 50 Kg');
    }

    else if (weight > 50) {
        console.log('The person weight is more than 50 kg');
    }

    else {
        console.log('The prrson weight is not 50 kg or more than that');
    }
}

isPersonWeight (60);
isPersonWeight (50);
isPersonWeight (40);
isPersonWeight (100);