/* eslint-disable no-console */
const burgerClassName = 'header__burger';
const navigationClassName = 'header__navigation';

const burger = document.querySelector(`.${burgerClassName}`);
const navigation = document.querySelector(`.${navigationClassName}`);

burger.addEventListener('click', () => {
    navigation.classList.toggle(`${navigationClassName}_visible`);
});
