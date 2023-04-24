/* eslint-disable prefer-const */
const getBalanceClassName = 'balance__link';
const yearButtonClassName = 'plans__first';
const halfYearButtonClassName = 'plans__second';
const monthButtonClassName = 'plans__third';

const getBalance = document.querySelector(`.${getBalanceClassName}`);
const yearButton = document.querySelector(`.${yearButtonClassName}`);
const halfYearButton = document.querySelector(`.${halfYearButtonClassName}`);
const monthButton = document.querySelector(`.${monthButtonClassName}`);

const buttonArray = [yearButton, halfYearButton, monthButton];

let balance = 0;
let currentSub = 'У вас нет активного абонемента';

const balanceElement = document.getElementById('balance');
const currentPlan = document.getElementById('current-plan');

const paycheck = 5000;
const yearSub = 18000;
const halfYearSub = 12000;
const monthSub = 3000;

const yearSubLabel = 'Годовой абонемент';
const halfYearSubLabel = 'Полугодовой абонемент';
const monthSubLabel = 'Месячный абонемент';
const noMoney = 'Не хватает денег на балансе';

currentPlan.innerText = currentSub;
balanceElement.innerText = balance;

getBalance.addEventListener('click', (event) => {
    event.preventDefault();
    balance += paycheck;
    balanceElement.innerText = balance;
});

function onClick(subPrice, subLabel) {
    if (balance >= subPrice) {
        balance -= subPrice;
        currentSub = subLabel;
        balanceElement.innerText = balance;
        currentPlan.innerText = currentSub;
    } else {
        alert(noMoney);
    }
}

yearButton.addEventListener('click', (event) => {
    event.preventDefault();
    onClick(yearSub, yearSubLabel);
});

halfYearButton.addEventListener('click', (event) => {
    event.preventDefault();
    onClick(halfYearSub, halfYearSubLabel);
});

monthButton.addEventListener('click', (event) => {
    event.preventDefault();
    onClick(monthSub, monthSubLabel);
});
