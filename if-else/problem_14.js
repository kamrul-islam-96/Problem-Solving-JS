let userStorageEmail = 'user@example.com'
let userStoragePassword = '123456'

let userInputEmail = 'user@ex'
let userInputPassword = '123456'

if (userStorageEmail === userInputEmail && userStoragePassword === userInputPassword) {
    console.log('Welcome user');
}

else if (userStorageEmail !== userInputEmail && userStoragePassword === userInputPassword) {
    console.log('Invalid Email');
}

else {
    console.log('Invalid Password');
}