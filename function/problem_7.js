function isEligibleForVote (age) {
    if (age >= 18) {
        console.log('can vote');
    }

    else {
        console.log('can not vote');
    }
}

isEligibleForVote (10);