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
        comments = { ...res.comments };
        createData();
        page = getIdFromSession('page');
        switchPage(page, true);
        mainPageListener(wrapper, page);
    });

openDropDownOrder();