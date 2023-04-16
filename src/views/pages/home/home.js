/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line object-curly-spacing
import Swiper, { Navigation, Pagination } from 'swiper';

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
