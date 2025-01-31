let productPrice = 199;
let discountOne = (productPrice * 10) / 100
let discountOneFinalPrice = (productPrice - discountOne)
let discountTwo = (productPrice * 20) / 100
let discountTwoFinalPrice = (productPrice - discountTwo)

if (productPrice > 500) {
    console.log(`You have got 20 % discount and your final product price is ${discountTwoFinalPrice}`);
}

else if (productPrice >= 200) {
    console.log(`You have got 10 % discount and your final product price is ${discountOneFinalPrice}`);
}

else  {
    console.log(`Your product price is ${productPrice}`);
}
        

 


    
