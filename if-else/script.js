1 
var number = 18;

if (number % 2 === 0) {
    console.log("even")
}
    

else {
    console.log("odd")
}


2 
var number1 = 14;
var number2 = 7;
var number3 = 99;

if ((number1 > number2) && (number1 > number3)) {
    console.log ("Number one is largest")
}

else if ((number2 > number3) && (number2 > number1)){
    console.log ("Number two is largest")
}

else {
    console.log ("number three is largest ")
}




3 
var marks = 50;

if (marks >= 80) {
    console.log("A")
}

else if (marks >= 60) {
    console.log("B")
}

else if (marks >= 40) {
    console.log("C");
}

else {
    console.log("fail");
}




4 
var year = 2020;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("this is leap year");
}

else {
    console.log("this is not leap year");
}


5 
var num = 41;

if (num % 2 === 0 && num % 5 === 0) {
    console.log ("Even and divisible by 5");
}
else {
    console.log ('not both');
}


6 
var marks = 30;

if (marks >= 33) {
    console.log("pass");
}

else {
    console.log("fail");
}



7 
var month = 'february';

if (month === 'february') {
    console.log("28 or 29 days");
}

else {
    console.log("31 days");
}


8 
var personAge = 20;

if (personAge > 18) {
    console.log("Eligible for driving license");
}

else {
    console.log("not eligible");
}


9 
var number = 10;

if (number > 0) {
    console.log("positive");
}

else if (number < 0) {
    console.log("negative");
}

else {
    console.log ("zero");
}

10
var day = 'sunday'

if ((day === 'saturday') || (day === 'sunday')) {
    console.log('Holiday');
}

else {
    console.log('working day');
}


11
var productPrice = 400;
var discount1 = (productPrice * 20) / 100;
var finalPrice1 = (productPrice - discount1)
var discount2 = (productPrice * 10) /100;
var finalPrice2 = (productPrice - discount2)

if (productPrice > 500) {
    console.log(`you got ${discount1} discount and your final price is ${finalPrice1}`);
}

else if (productPrice >= 200) {
    console.log(`you got ${discount2} discount and your final price is ${finalPrice2}`);
}

else {
    console.log(productPrice);
}


12
var password = 'Admin@123';
var userInput = '';



if (userInput === '') {
    console.log('Password can not be emty');
}

else if (password === userInput) {
    console.log('Login successful');
}

else {
    console.log('Incorect Password');
}


13
var balance = 5000;
var withdrawal = 5500;

if (withdrawal < 500) {
    console.log('Minimum withdrawal is 500');
}

else if (balance >= withdrawal) {
    console.log('Transaction Successful');
}

else {
    console.log('Insufficient Balance');
}


14
var userEmail = 'user@example.com';
var userPassword = '123456';
var userEmailInput = 'user@example.com';
var userPasswordInput = '123456';

if ((userEmail === userEmailInput) && (userPassword === userPasswordInput)) {
    console.log('Welcome user');
}

else if (userEmail !== userEmailInput) {
    console.log('Invalid Email');
}

else {
    console.log('Invalid Password');
}


15
var numbers = 50;

if ((numbers % 3 === 0) & (numbers % 5 ===  0)) {
    console.log('FizzBuzz');
}

else if (numbers % 3 === 0) {
    console.log('Fizz');
}

else if (numbers % 5 === 0) {
    console.log('Buzz');
}

else {
    console.log(numbers);
}





