let basket = JSON.parse(localStorage.getItem('cart')) || [];


function displayCartItems() {
    const container = document.getElementById('cart-items-container');
    const totalItemsElement = document.getElementById('total-items');
    const totalPriceElement = document.getElementById('total-price');
    
    let totalItems = 0;
    let totalPrice = 0;
    
    if (basket.length === 0) {
        container.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    } else {
        container.innerHTML = basket.map(item => `
            <div class="cart-item">
                <img src="${item.img}" alt="${item.name}">
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p>$${item.price} × ${item.quantity}</p>
                </div>
                <div class="item-controls">
                    <button onclick="changeQuantity('${item.id}', -1)"><i class="fas fa-minus"></i></button>
                    <button onclick="changeQuantity('${item.id}', 1)"><i class="fas fa-plus"></i></button>
                    <button onclick="removeItem('${item.id}')"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `).join('');
        

        basket.forEach(item => {
            totalItems += item.quantity;
            totalPrice += item.price * item.quantity;
        });
    }
    
    totalItemsElement.textContent = totalItems;
    totalPriceElement.textContent = totalPrice.toFixed(2);
}


window.changeQuantity = (id, change) => {
    let item = basket.find(item => item.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            basket = basket.filter(item => item.id !== id);
        }
        localStorage.setItem('cart', JSON.stringify(basket));
        displayCartItems();
    }
};


window.removeItem = (id) => {
    basket = basket.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(basket));
    displayCartItems();
};


document.addEventListener('DOMContentLoaded', displayCartItems);