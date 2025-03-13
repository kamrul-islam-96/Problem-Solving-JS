var count = document.getElementById ('count');
var increaseDecreaseCount = Number (count.innerHTML);
var notice = document.getElementById ('notice');
var basePrice = 300;
var showPrice = document.getElementById ('total-price');


function updatePrice () {
    var totalPrice = increaseDecreaseCount * basePrice;
    showPrice.innerHTML = totalPrice + ' tk';
}

function increaseCount () {
    if (increaseDecreaseCount === 5) {
        notice.innerHTML = 'You can not buy more than 5 items';
        setTimeout (clearNotice, 2000);
        return;
    }
    increaseDecreaseCount++;
    count.innerHTML = increaseDecreaseCount;
    clearNotice ();
    updatePrice ();
}


function decreaseCount () {
    if (increaseDecreaseCount === 1) {
        notice.innerHTML = 'At least you have to buy 1 item';
        setTimeout (clearNotice, 2000);
        return;
    }
    increaseDecreaseCount--;
    count.innerHTML = increaseDecreaseCount;
    clearNotice ();
    updatePrice ();
}

function clearNotice () {
    notice.innerHTML = '';
}

updatePrice ();