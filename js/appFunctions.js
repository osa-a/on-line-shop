'use strict';

//*   MAIN   *//

function insertMain(page) {
    const mainFooter = document.getElementById('main-footer');
    let parentDiv = mainFooter.parentNode;
    parentDiv.insertBefore(page, mainFooter);
}

function switchPage(page, reload) {
    switch (page) {
        case '1':
            cleaner(reload);
            createHomepage();
            break;
        case '2':
            createCategoryPage('Decoration', reload);
            watchPriceRange()
            break;
        case '3':
            createCategoryPage('Furniture', reload);
            watchPriceRange()
            break;
        case '4':
            createCategoryPage('Shop', reload);
            watchPriceRange()
            break;
        case '5':
            createCartPage(reload);
            break;
        case '6':
            сreateItemCardPage(reload);
            // renderingPage(reload);
            break;
        default:
            createHomepage();
            break;
    }
}

function cleaner(reload) {
    if (!reload) {
        const mainContainer = document.querySelector('.main');
        mainContainer.innerHTML = '';
        mainContainer.remove();
    }
}

function changeCss(style) {
    const mainCss = document.querySelector('.style-css-files');
    mainCss.setAttribute('href', `css/${style}/${style}.css`)
}

//*   HOMEPAGE  +  CATEGORY    *// 

function createShopLine(array, start, amount, calssName, page) {
    const section = document.createElement('section');
    section.classList.add(calssName);
    for (let i = start; i < amount; i++) {
        createCard(array, i, section);
    }
    page.appendChild(section);
}

function createCard(items, i, container) {
    const shopCard = document.createElement('div');
    shopCard.classList.add('shop-card');
    const cardImg = document.createElement('img');
    cardImg.classList.add('card-image');
    cardImg.classList.add('another-page');
    cardImg.setAttribute('data-page', '6');
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

function mainPageListener(wrapper, page) {
    wrapper.addEventListener('click', e => {
        const click = e.target.classList.contains('another-page');
        if (!click) {
            return;
        }
        setIdToSession(e, 'page', 'page');
        page = e.target.getAttribute('data-page');
        switchPage(page);
    });
}

function shopCardListener(container, reload) {
    container.addEventListener('click', (e) => {
        let clicked = e.target.getAttribute('data-item');
        if (!clicked) {
            return;
        };
        setIdToStorage(e, 'item', 'item');
        сreateItemCardPage(reload);
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

function filterListener() {
    wrapper.addEventListener('click', (e) => {
        let clicked = e.target.classList.contains('filter-button');
        if(!clicked){
            return;
        }
        filterFormTrigger();
    });
}

//*   LOCAL STORAGE   *//
let setIdToSession = (e, data, item) => {
    let selectedData = e.target.dataset[item];
    sessionStorage.setItem(`Data-${data}`, JSON.stringify(selectedData));
}

let getIdFromSession = (data) => {
    let selectedData = JSON.parse(sessionStorage.getItem(`Data-${data}`));
    return selectedData;
}


let setIdToStorage = (e, data, item) => {
    let selectedData = e.target.dataset[item];
    localStorage.setItem(`Data-${data}`, JSON.stringify(selectedData));
}

let getIdFromStorage = (data) => {
    let selectedData = JSON.parse(localStorage.getItem(`Data-${data}`));
    return selectedData;
}

//*   MODAL CART   *//

function openModalOrder() {
    let cartButton = document.getElementById('cartButton');
    let modalOrder = document.getElementById('modalOrder');
    cartButton.addEventListener('click', () => {
        modalOrder.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        closeOrderCart();
        continueOrder();
        openOrder();
    })
}

function closeOrderCart() {
    let modalOrderClose = document.getElementById('modalOrderClose');
    let modalOrder = document.getElementById('modalOrder');
    modalOrderClose.addEventListener('click', () => {
        modalOrder.style.display = 'none';
    })
}

function continueOrder() {
    let modalOrderContinue = document.getElementById('modalOrderContinue');
    let modalOrder = document.getElementById('modalOrder');
    modalOrderContinue.addEventListener('click', () => {
        modalOrder.style.display = 'none';
    })
}

function openOrder() {
    let modalOrderCheckout = document.getElementById('modalOrderCheckout');
    let modalOrder = document.getElementById('modalOrder');
    modalOrderCheckout.addEventListener('click', () => {
        modalOrderCheckout.classList.add('another-page');
        modalOrderCheckout.setAttribute('data-page', '5');
        modalOrder.style.display = 'none';
    })
}