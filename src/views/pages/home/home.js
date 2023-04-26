/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line object-curly-spacing
import Swiper, { Navigation, Pagination } from 'swiper';

const getGoodButtonClassName = 'hero__button';
const offerButtonClassName = 'offer__button';

const getGoodButton = document.querySelector(`.${getGoodButtonClassName}`);
const offerButton = document.querySelector(`.${offerButtonClassName}`);

getGoodButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'tariffs.html';
});

offerButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'account.html';
});

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    speed: 400,
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
