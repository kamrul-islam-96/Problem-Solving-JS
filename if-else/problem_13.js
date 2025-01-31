let accountBalance = 5000;
let withdrawalBalance = 490;

if (withdrawalBalance >= 500 && withdrawalBalance <= accountBalance) {
    console.log('Transition Successful');
}

else if (withdrawalBalance > accountBalance) {
    console.log('Insufficient Balance');
}

else {
    console.log('Minimum withdrawal is 500');
}