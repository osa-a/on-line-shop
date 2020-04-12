'use strict'
// RENGERING HTML

let createElement = (element, setclass, classOfParent) => {
    let item = document.createElement(element);
    let parent = document.querySelector(classOfParent);
    item.classList.add(setclass);
    parent.append(item);
};

let createReviewElement = (element, setClass1, setClass2, classOfParent) => {
    let item = document.createElement(element);
    let parent = document.querySelector(classOfParent);
    item.classList.add(setClass1, setClass2);
    parent.append(item);
};

let createImg = (setclass, alt, width, height, classOfParent) => {
    let img = document.createElement('img');
    let parent = document.querySelector(classOfParent);
    img.classList.add(setclass);
    img.setAttribute('alt', alt);
    img.setAttribute('width', width);
    img.setAttribute('height', height);
    parent.append(img);
};

let createInput = (name, type, id, placeholder, classOfParent) => {
    let input = document.createElement('input');
    let parent = document.querySelector(classOfParent);
    input.setAttribute('name', name);
    input.setAttribute('type', type);
    input.setAttribute('id', id);
    input.setAttribute('placeholder', placeholder)
    parent.append(input);
};

let createReviewForm = () => {
    let form = document.createElement('form');
    let parent = document.querySelector('.wrapper');
    form.classList.add('review-form');
    form.setAttribute('name', 'review-form');
    parent.append(form);
};

let createTextareaReview = () => {
    let textarea = document.createElement('textarea');
    let parent = document.querySelector('.review-info');
    textarea.setAttribute('name', 'review-field');
    textarea.setAttribute('type', type);
    textarea.setAttribute('id', 'review-field-id');
    textarea.setAttribute('cols', '30');
    textarea.setAttribute('rows', '10');
    textarea.setAttribute('placeholder', 'Write your review')
    parent.append(textarea);
};

let mnemonFunc = () => {
    let mnemon = '&rarr;';
    let htmlDecode = value => $('<div/>').html(value).text();
    mnemon = htmlDecode(mnemon);
    return mnemon;
};

let createSubmitButtonReview = () => {
    let input = document.createElement('input');
    let parent = document.querySelector('.review-info');
    input.setAttribute('type', 'submit');
    input.setAttribute('value', `Submit ${mnemonFunc()}`);
    parent.append(input);
};

let createSectionCategoryHead = () => {
    createElement('section', 'category-head', '.main');
    createElement('div', 'page-head', '.category-head');
    createElement('div', 'cart-title', '.page-head');
    document.querySelector('.cart-title').innerText = 'Shop';

    createItemCardSection();

};

let createItemCardSection = () => {
    // create wrapper
    createElement('div', 'wrapper', '.main');

    // create section - item-card
    createElement('section', 'item-card', '.wrapper');
    createElement('div', 'item-card__mini-reviewer', '.item-card');

    for (let i = 1; i < 5; i++) {
        createImg(`mini-pic-${i}`, i, '108', '118', '.item-card__mini-reviewer');
    }

    createElement('div', 'item-card__max-reviewer', '.item-card');
    createImg('main-pic', 'big', 'auto', 'auto', '.item-card__max-reviewer');

    createElement('div', 'item-card__info-of-good', '.item-card');
    createElement('h3', 'item-card__info-of-good--title', '.item-card__info-of-good');
    createElement('h4', 'item-card__info-of-good--price', '.item-card__info-of-good');
    createElement('div', 'product-rating', '.item-card__info-of-good');

    createElement('p', 'item-card__info-of-good--description', '.item-card__info-of-good');
    createElement('div', 'buy-block', '.item-card__info-of-good');

    createElement('div', 'buy-block__button', '.buy-block');
    createElement('button', 'item-card-btn', '.buy-block__button');
    document.querySelector('.item-card-btn').innerText = "BUY";
    document.querySelector('.item-card-btn').setAttribute('type', 'button');

    createElement('div', 'item-card__info-of-good--id', '.item-card__info-of-good');
    createElement('p', 'id-of-good', '.item-card__info-of-good--id');
    createElement('p', 'category-of-good', '.item-card__info-of-good--id');
};

let createSwitchesSection = () => {
    createElement('section', 'switches', '.wrapper');
    createElement('button', 'description-window__btn', '.switches');
    createElement('button', 'review-window__btn', '.switches');

    document.querySelector('.description-window__btn').innerText = 'Description';
    document.querySelector('.review-window__btn').classList.add('non-active');
    document.querySelector('.review-window__btn').innerText = 'Reviews';
};

let createDescriptionBlock = () => {
    createElement('section', 'description-section', '.wrapper');

    createElement('div', 'description-block__info', '.description-section');
    createImg('description-pic-1', 'description-block__info-pic', '300', '375', '.description-block__info');
    createElement('div', 'description-block__info--content', '.description-block__info');

    createElement('div', 'features-of-good', '.description-block__info--content');
    createElement('p', 'features-of-good__type', '.features-of-good');
    createElement('p', 'features-of-good__material', '.features-of-good');

    createElement('div', 'description-block__portfolio', '.description-section');
    createImg('description-pic-2', 'description-block__portfolio', '400', '530', '.description-block__portfolio');


};

let createReviewSection = () => {
    createElement('section', 'review-block', '.wrapper');

    createUserReview();
};

let createReviewFormSection = () => {
    createReviewForm();

    createElement('div', 'review-info', '.review-form');
    createElement('p', 'review-info__add-review', '.review-info');
    createElement('p', 'review-info__sub-info', '.review-info');
    createElement('p', 'review-info__rating', '.review-info');

    document.querySelector('.review-info__add-review').innerText = "Add a review";
    document.querySelector('.review-info__sub-info').innerText = "Your email address will not be published. Required fields are marked *";
    document.querySelector('.review-info__rating').innerText = "Choose rating";

    createElement('div', 'chose-rating', '.review-info');

    $('<div>', {
        class: 'br-wrapper br-theme-fontawesome-stars',
        html:
            `<select id="rating-scale">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>`
    }).appendTo(document.querySelector('.chose-rating'));
    $('select').barrating('show');
    $('#rating-scale').barrating('show', { // еще разбираюсь как эта хрень работает
        theme: 'my-awesome-theme',
        onSelect: function (value, event) {
            if (typeof (event) !== 'undefined') {
                // rating was selected by a user
                console.log(event.target);
            }
        }
    });

    // сюда запилить рейтинг звездочками

    createInput('name-field', 'text', 'name-field-id', 'Your name', '.review-info');
    createInput('email-field', 'text', 'email-field-id', 'Your email', '.review-info');

    createTextareaReview();
    createSubmitButtonReview();
};

// RENDER

let renderingProductCard = () => {
    let selectedId = getIdFromStorage('item');
    const productName = document.querySelector('.item-card__info-of-good--title');
    const productPrice = document.querySelector('.item-card__info-of-good--price');
    const productDescription = document.querySelector('.item-card__info-of-good--description');
    const productId = document.querySelector('.id-of-good');
    const buyButton = document.querySelector('.item-card-btn');
    const productCategory = document.querySelector('.category-of-good');
    const productType = document.querySelector('.features-of-good__type');
    const productMaterial = document.querySelector('.features-of-good__material');

    let arrayOfElem = document.querySelectorAll('.review-item'); // создаем массив, чтоб узнать сколько у нас комментариев

    let id = arrayOfElem.length;

    items.forEach(element => {
        if (element.id === selectedId) {
            let amount = element.comments.length;

            // какое количество в стораже, сначала создаются все существующие блоки, а только потом туда добавляется информация
            for (let i = 0; i < amount; i++) {

                const commentUserName = document.querySelector(`.user-name-${i}`); 
                const commentUserText = document.querySelector(`.review-content-${i}`); 
                const commentUserDate = document.querySelector(`.review-date-${i}`);

                items.forEach(element => {
                    if (element.id === selectedId) {
                        productName.innerText = element.name;
                        productPrice.innerText = `${element.price}$`;
                        productDescription.innerText = element.description;
                        productId.innerText = `ID: ${element.id}`;
                        productCategory.innerText = `Category: ${element.category}`;
                        productType.innerText = `Type: ${element.type}`;
                        productMaterial.innerText = `Material: ${element.material}`;
                        commentUserName.innerText = element.comments[i].name;
                        commentUserText.innerText = element.comments[i].comment;
                        commentUserDate.innerText = element.comments[i].date;
                        buyButton.setAttribute('data-cart', element.id);
                        addRatingToComment(`.user-rating-${i}`, element.comments[i].rate, i);
                    }
                });  
            }
        }
    });
    addRatingToCard();
};

let renderingPics = () => {
    let selectedId = getIdFromStorage('item');
    const mainPic = document.querySelector('.main-pic');
    const miniPic1 = document.querySelector('.mini-pic-1');
    const miniPic2 = document.querySelector('.mini-pic-2');
    const miniPic3 = document.querySelector('.mini-pic-3');
    const miniPic4 = document.querySelector('.mini-pic-4');
    const descPic1 = document.querySelector('.description-pic-1');
    const descPic2 = document.querySelector('.description-pic-2');

    for (let value in smallImg) {
        if (value === selectedId) {
            mainPic.setAttribute('src', `../img/category-shop-cards/smallImg/${value}-1.png`);
            miniPic1.setAttribute('src', `../img/category-shop-cards/smallImg/${value}-1.png`);
            miniPic2.setAttribute('src', `../img/category-shop-cards/smallImg/${value}-2.png`);
            miniPic3.setAttribute('src', `../img/category-shop-cards/smallImg/${value}-3.png`);
            miniPic4.setAttribute('src', `../img/category-shop-cards/smallImg/${value}-4.png`);
            descPic1.setAttribute('src', `../img/category-shop-cards/descr/${value}-1.jpg`);
            descPic2.setAttribute('src', `../img/category-shop-cards/descr/${value}-2.jpg`);
        }
    }

    items.forEach(element => {
        if (element.id === selectedId) {
            let amount = element.comments.length;

            for (let i = 0; i < amount; i++) {
                const userAvatar = document.querySelector(`.user-avatar-photo-${i}`);
                userAvatar.setAttribute('src', `img/product_card/avatars/${element.comments[i].avatar}`);
            }
        }
    });
};

// SWITCHES LISTENERS


let hideBlock = () => {
    let block = document.querySelector('.review-block');
    let form = document.forms['review-form'];
    form.classList.toggle('hidden');
    block.classList.toggle('hidden');
};

let addlistenerToSwitches = () => {

    let reviewBlock = document.querySelector('.review-block');
    let descrBlock = document.querySelector('.description-section');
    let form = document.forms['review-form'];

    document.querySelector('.switches').addEventListener('click', function (e) {

        if (e.target.classList.contains('review-window__btn')) {
            form.classList.remove('hidden');
            reviewBlock.classList.remove('hidden');
            descrBlock.classList.add('hidden');
            document.querySelector('.review-window__btn').classList.remove('non-active');
            document.querySelector('.description-window__btn').classList.add('non-active');
        } else if (e.target.classList.contains('description-window__btn')) {
            form.classList.add('hidden');
            reviewBlock.classList.add('hidden');
            descrBlock.classList.remove('hidden');
            document.querySelector('.review-window__btn').classList.add('non-active');
            document.querySelector('.description-window__btn').classList.remove('non-active');
        }
    });
};

// CHANGE MAIN PIC

let addListenerToChangeMainPic = () => {
    let selectedId = getIdFromStorage('item');
    const miniPicBlock = document.querySelector('.item-card__mini-reviewer');
    const mainPic = document.querySelector('.main-pic');

    miniPicBlock.addEventListener('mouseover', (e) => {
        for (let i = 1; i < 5; i++) {
            if (e.target.classList.contains(`mini-pic-${i}`)) {
                mainPic.setAttribute('src', `../img/category-shop-cards/smallImg/${selectedId}-${i}.png`)
            }
        }
    });
};

// ADD RATING 

let addRatingToCard = () => {
    const selectedId = getIdFromStorage('item');
  
    items.forEach(element => {
        if (element.id === selectedId) {
           let averageSum = element.rating;
           addRatingToComment('.product-rating', averageSum, selectedId);
        }
    }); 
};

let addRatingToComment = (parent, rating, id) => {
    let selectedId = getIdFromStorage('item');

    items.forEach(element => {
        if (element.id === selectedId) {
            for (let i = 1; i < 6; i++) {
                createImg(`rate-star-${i}-${id}`, 'star', '25', '25', parent);
                document.querySelector(`.rate-star-${i}-${id}`).setAttribute('src', '../img/product_card/empty_star.png');
            }

            for (let i = 1; i <= parseInt(rating); i++) {
                document.querySelector(`.rate-star-${i}-${id}`).setAttribute('src', '../img/product_card/full_star.png');
            }
        }
    });
};

// ADD USER-REVIEW

let createUserReview = () => {                             // Самый страшный костыль проекта 
    let id = getIdFromStorage('item');

    items.forEach(element => {
        if (element.id === id) {
            let amount = element.comments.length; // находим сколько всего комментов в этом товаре 

            for (let i = 0; i < amount; i++) { // создаем колличество блоков для комментов

                let arrayOfElem = document.querySelectorAll('.review-item'); // создаем массив, чтоб узнать сколько у нас комментариев

                let reviewAmount = arrayOfElem.length; // записываем колличество комментариев в переменную

                id = reviewAmount; // указываем номер комментария и присваеваем к элементам
                createReviewElement('div', `review-${id}`, `review-item`, '.review-block'); // добавление общего класса всем комментариям, чтоб понимать какое количество этих элементов


                createReviewElement('div', `user-avatar-${id}`, 'user-avatar', `.review-${id}`);
                createImg(`user-avatar-photo-${id}`, 'avatar', '110', '110', `.user-avatar-${id}`)

                createReviewElement('div', `user-review-${id}`, 'user-review', `.review-${id}`);

                createReviewElement('div', `review-title-${id}`, 'review-title', `.user-review-${id}`);
                createReviewElement('h5', `user-name-${id}`, 'user-name', `.review-title-${id}`);
                createReviewElement('div', `user-rating-${id}`, 'user-rating', `.review-title-${id}`);
                
                createReviewElement('div', `review-date-${id}`, 'review-date', `.user-review-${id}`);
                createReviewElement('div', `review-content-${id}`, 'review-content', `.user-review-${id}`);
            }
        }
    });
};

let addEventListenetToReviewSubmit = () => {

    document.querySelector('input[type=submit]').addEventListener('click', (e) => {
        e.preventDefault();
        createUserReview();
    })
};