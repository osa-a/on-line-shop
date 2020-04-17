'use strict';

const wrapper = document.querySelector('.web-wrapper');
let page;

fetch('data.json')
    .then((res) => res.json())
    .then((res) => {
        categories = [...res.categories];
        material = [...res.material];
        type = [...res.type];
        descriptions = { ...res.descriptions };
        smallImg = { ...res.smallImg };
        slider = [...res.slider];
        createCommentsData();
        createData();
        page = getDataFromSession('page');
        switchPage(page, true);
        mainPageListener(wrapper);
        shopCardListener(wrapper);
        cartButtonListener(wrapper);
        filterListener(wrapper);
        createRatingArray();
        getCartLocal();
    });

openModalOrder();
scrollTop();