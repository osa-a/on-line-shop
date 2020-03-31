'use strict';

//*   MAIN   *//

function insertMain(page) {
    const mainFooter = document.getElementById('main-footer');
    let parentDiv = mainFooter.parentNode;
    parentDiv.insertBefore(page, mainFooter);
}

//*   HOMEPAGE  +  CATEGORY    *// 

function createCard(items, i, container) {
    const shopCard = document.createElement('div');
    shopCard.classList.add('shop-card');
    const cardImg = document.createElement('img');
    cardImg.classList.add('card-image');
    cardImg.setAttribute('data-item', items[i].id);
    cardImg.setAttribute('src', `img/category-shop-cards/${items[i].id}.png`);
    cardImg.setAttribute('alt', 'item');

    const description = document.createElement('div');
    description.classList.add('card-description');
    const itemName = document.createElement('h4');
    itemName.classList.add('card-item-name');
    itemName.innerText = items[i].name;
    const price = document.createElement('p');
    price.classList.add('card-price');
    price.innerText = `${items[i].price}$`;
    const cartBtn = document.createElement('button');
    cartBtn.classList.add('card-cart-button');
    cartBtn.setAttribute('type', 'buton');
    cartBtn.setAttribute('data-cart', items[i].id);

    description.appendChild(itemName);
    description.appendChild(price);
    shopCard.appendChild(cardImg);
    shopCard.appendChild(description);
    shopCard.appendChild(cartBtn);
    container.appendChild(shopCard);
}

//*   LISTENERS   *//

function mainPageListener(wrapper) {
    wrapper.addEventListener('click', e => {
        const click = e.target.classList.contains('another-page');
        if (!click) {
            return;
        }
        const page = e.target.getAttribute('data-page');
        console.log(page);
    });
}

function shopCardListener(container) {
    container.addEventListener('click', (e) => {
        setIdToStorage(e);
        let clicked = e.target.getAttribute('data-item');
        if (!clicked) {
            return;
        };

        renderingPage();
        // document.location.href = "../pages/product_card.html";
        // console.log(clicked);
    })
}

function cartButtonListener(wrapper) {
    wrapper.addEventListener('click', (e) => {
        let clicked = e.target.getAttribute('data-cart');
        if (!clicked) {
            return;
        };
        //функция добавления в корзину 
    })
}

//*   ITEM CARD   *//

let setIdToStorage = (e) => {
    let selectedId = e.target.dataset.item;
    localStorage.setItem('Data-id', JSON.stringify(selectedId));
}


//*   DROPDOWN CART   *//

document.getElementById('dropdownOrder').style.display = 'none';

function openDropDownOrder() {
    let cartButton = document.getElementById('cartButton');
    let dropdownOrder = document.getElementById('dropdownOrder');
    let actions = {
        1: () => {
            dropdownOrder.style.display = 'flex';
            continueOrder();
            openOrder();
        },
        2: () => {
            dropdownOrder.style.display = 'none';
        }
    };
    let counter = 0;
    cartButton.addEventListener('click', () => {
        actions[counter = (counter % 2) + 1]();
    })
}

function continueOrder() {
    let dropdownOrderContinue = document.getElementById('dropdownOrderContinue');
    dropdownOrderContinue.addEventListener('click', () => {
        document.getElementById('dropdownOrder').style.display = 'none';
    })
}

function openOrder() {
    let dropdownOrderCheckout = document.getElementById('dropdownOrderCheckout');
    dropdownOrderCheckout.addEventListener('click', () => {
        document.location.href = "../pages/cart.html";
    })
}