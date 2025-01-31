let number1 = 10;
let number2 = 50;
let number3 = 31;

if (number1 > number2) {
    if (number1 > number3) {
        console.log(`Number one ${number1} is largest`);
    }
    else {
        console.log(`Number three ${number3} is largest`);
    }
}
else if (number2 > number1) {
    if (number2 > number3) {
        console.log(`Number two ${number2} is largest`);
    }
    else {
        console.log(`Number three ${number3} is largest`);
    }
}
else {
    console.log(`Number three ${number3} is largest`);
}