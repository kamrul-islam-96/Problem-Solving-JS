let shop = document.getElementById('shop');
let productAdd = document.querySelector('.cartAmount')

let shoppingData = [
    {
        id: 'abc1',
        name: 'Casual Shirt',
        price: 45,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: './assets/casual shirt.jpg',
    },
    {
        id: 'abc2',
        name: 'Mens Suit',
        price: 100,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: './assets/men suit.jpg',
    },
    {
        id: 'abc3',
        name: 'T-shirt',
        price: 55,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: './assets/t shirt.jpg',
    },
    {
        id: 'abc4',
        name: 'Panjabi',
        price: 45,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: './assets/panjabi.jpeg',
    },
]

let basket = JSON.parse(localStorage.getItem('cart')) || [];


let generateShop = () => {
    shop.innerHTML = shoppingData.map((product) => {
        return `
        <div class="item">
            <img src="${product.img}" alt="${product.name}" width="220" height="200">
            <div class="details">
                <h3>${product.name}</h3>
                <p>${product.desc}</p>
                <div class="price-quantity">
                    <h2>$ ${product.price}</h2>
                    <button onclick="addToCart('${product.id}')" class="add-to-cart-btn">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>`;
    }).join("");
};


window.addToCart = (id) => {
    let existingItem = basket.find(item => item.id === id);
    let product = shoppingData.find(p => p.id === id);
    

    if (!existingItem) {
        basket.push({
            ...product,
            quantity: 1 
        });
        
        localStorage.setItem('cart', JSON.stringify(basket));
        updateCartIcon();
        generateShop(); 
    }
};

let updateCartIcon = () => {
    let totalItems = basket.reduce((total, item) => total + item.quantity, 0);
    productAdd.textContent = totalItems;
};

generateShop();
updateCartIcon();










