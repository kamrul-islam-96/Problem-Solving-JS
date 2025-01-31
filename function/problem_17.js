function getPasswordCharacter (password) {
    if (password.length > 8) {
        console.log('Password is more than 8 character');
    }

    else {
        console.log('Password is not more than 8 character');
    }
}

getPasswordCharacter ('12345672');