let shop = document.getElementById('shop');

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

let basket = [];

let generateShop = () => {
    return (shop.innerHTML = shoppingData.map ((x) => {
        let {id,name,price,desc,img} = x;
        return `
    <div class="item" id = product-id-${id}>
            <img src="${img}" alt="shirt" width="220" height="200">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h2>$ ${price}</h2>
                    <div class="buttons">
                        <i onclick = "decrement('${id}')" class="fa-solid fa-minus"></i>
                        <div class="quantity" id=${id}>0</div>
                        <i onclick = "increment('${id}')" class="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
        </div>    
    `;
    }).join(""))
};

generateShop ();


let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
  
    if (search === undefined) {
      basket.push({
        id: selectedItem.id,
        item: 1,
      });
    } else {
      search.item += 1;
    }
  
    console.log(basket);
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
  };
  let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
  
    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
      search.item -= 1;
    }
    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0);
    console.log(basket);
    localStorage.setItem("data", JSON.stringify(basket));
  };

  let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
  };