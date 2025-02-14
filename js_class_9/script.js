ONE:
var shoppingCart = [
    'Headphone',
    2000,
    10,
    'Trimar',
    1500,
    15,
    'Earbuds',
    1000,
    8
]

for (var i = 0; i < shoppingCart.length; i = i + 3) {
    console.log(`Product name: ${shoppingCart [i]}`);
    console.log(`Product price: ${shoppingCart [i + 1]}`);
    console.log(`Product discount: ${shoppingCart [i + 2]}%`);
    console.log(`After discount price : ${shoppingCart [i + 1] - (shoppingCart [i + 1] * shoppingCart [i + 2]) / 100}`);
}





TWO:
var shoppingCart = ['Atar', 200, 2, 5, 'Cap', 500, 8, 2, 'Meswaak', 50, 4, 2];
var totalPrice = 0;
var totalQty = 0;

for (x = 0; x < shoppingCart.length; x = x + 4) {
    console.log(`
        | Product Name : ${shoppingCart [x]}
        | Product Price : ${shoppingCart [x + 1]}
        | Product Discount : ${shoppingCart [x + 2]}%
        | Qty : ${shoppingCart [x + 3]}
        | Final Price : ${shoppingCart [x + 1] - (shoppingCart [x + 1] * shoppingCart [x + 2]) / 100}`);

        totalQty = totalQty + shoppingCart [x + 3];
        totalPrice = totalPrice + ((shoppingCart [x + 1] - (shoppingCart [x + 1] * shoppingCart [x + 2]) / 100) *    shoppingCart [x + 3] )
}

console.log(`Total Qty : ${totalQty}`);
console.log(`Total Price ${totalPrice}`);





THREE:
var productOne = {
    productName : 'Atar',
    basePrice : 200,
    productDiscount : 10,
    qty : 10,
}

var productTwo = {
    productName : 'Meswak',
    basePrice : 50,
    productDiscount : 8,
    qty : 12,
}

var productThree = {
    productName : 'Cap',
    basePrice : 250,
    productDiscount : 5,
    qty : 10,
}

var shoppingCart = [productOne, productTwo, productThree];
var totalQty = 0;
var totalPrice = 0;

for (x = 0; x < shoppingCart.length; x = x + 1) {
    console.log(`Product Name : ${shoppingCart [x].productName}
        | Base Price : ${shoppingCart [x].basePrice}
        | Product Discoutn : ${shoppingCart [x].productDiscount}%
        | Procuct Quantity : ${shoppingCart [x].qty}
        | Final Price After Discount : ${shoppingCart [x].basePrice - (shoppingCart [x].basePrice * shoppingCart [x].productDiscount) / 100}
    `);

    totalQty = totalQty + shoppingCart [x].qty;
    totalPrice = totalPrice + (shoppingCart [x].qty * (shoppingCart [x].basePrice - (shoppingCart [x].basePrice * shoppingCart [x].productDiscount) / 100));
}

console.log(`Total Quantity : ${totalQty}`);
console.log(`Total Price : ${totalPrice}`);





FOUR:
var productOne = {
    productName : 'Atar',
    basePrice : 200,
    productDiscount : 10,
    qty : 10,
}

var productTwo = {
    productName : 'Meswak',
    basePrice : 50,
    productDiscount : 8,
    qty : 12,
}

var productThree = {
    productName : 'Cap',
    basePrice : 250,
    productDiscount : 5,
    qty : 10,
}

var shoppingCart = [productOne, productTwo, productThree];
var totalQty = 0;
var totalPrice = 0;

for (x = 0; x < shoppingCart.length; x++) {
    var name = shoppingCart [x].productName;
    var price = shoppingCart [x].basePrice;
    var discount = shoppingCart [x].productDiscount;
    var quantity = shoppingCart [x].qty;
    var finalPrice = price - (price * discount) / 100;

    console.log(`Product Name ; ${name}
        | Product Price : ${price} tk
        | Product Discount : ${discount}%
        | Product Qty : ${quantity}
        | Final Price : ${finalPrice} tk
    `);

    totalQty = totalQty + quantity;
    totalPrice = totalPrice + (finalPrice * quantity);
}

console.log(`Total Quantity : ${totalQty}`);
console.log(`Total Price : ${totalPrice}`);




FIVE:
var productOne = {
    productName : 'Atar',
    basePrice : 200,
    productDiscount : 10,
    qty : 10,
}

var productTwo = {
    productName : 'Meswak',
    basePrice : 50,
    productDiscount : 8,
    qty : 12,
}

var productThree = {
    productName : 'Cap',
    basePrice : 250,
    productDiscount : 5,
    qty : 10,
}

var shoppingCart = [productOne, productTwo, productThree];
var totalQty = 0;
var totalPrice = 0;

for (var item of shoppingCart) {
    finalPrice = item.basePrice - (item.basePrice * item.productDiscount) / 100;
    console.log(`Product Name : ${item.basePrice}
        | Product Price : ${item.basePrice}tk
        | Product Discount : ${item.productDiscount}%
        | Product Quantity : ${item.qty}
        | Final Price : ${finalPrice}
    `);

    totalQty = totalQty + item.qty;
    totalPrice = totalPrice + finalPrice * item.qty;
}

console.log(`Total Quantity : ${totalQty}`);
console.log(`Total Price : ${totalPrice}`);






SIX:
var productOne = {
    productName : 'Atar',
    basePrice : 200,
    productDiscount : 10,
    qty : 10,
}

var productTwo = {
    productName : 'Meswak',
    basePrice : 50,
    productDiscount : 8,
    qty : 12,
}

var productThree = {
    productName : 'Cap',
    basePrice : 250,
    productDiscount : 5,
    qty : 10,
}

var shoppingCart = [productOne, productTwo, productThree];
var totalQty = 0;
var totalPrice = 0;

for (x = 0; x < shoppingCart.length; x++) {
    var {productName,basePrice,productDiscount,qty} = shoppingCart [x];
    var finalPrice = basePrice - (basePrice * productDiscount) / 100;

    console.log(`Product Name ; ${productName}
        | Product Price : ${basePrice} tk
        | Product Discount : ${productDiscount}%
        | Product Qty : ${qty}
        | Final Price : ${finalPrice} tk
    `);

    totalQty = totalQty + qty;
    totalPrice = totalPrice + (finalPrice * qty);
}

console.log(`Total Quantity : ${totalQty}`);
console.log(`Total Price : ${totalPrice}`);