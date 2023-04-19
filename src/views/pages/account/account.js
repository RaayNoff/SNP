/* eslint-disable prefer-const */
const getBalanceClassName = 'balance__link';
const Button1500ClassName = 'plans__first';
const Button2000ClassName = 'plans__second';
const Button3000ClassName = 'plans__third';

const getBalance = document.querySelector(`.${getBalanceClassName}`);
const Button1500 = document.querySelector(`.${Button1500ClassName}`);
const Button2000 = document.querySelector(`.${Button2000ClassName}`);
const Button3000 = document.querySelector(`.${Button3000ClassName}`);

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

Button1500.addEventListener('click', (event) => {
    event.preventDefault();
    onClick(yearSub, yearSubLabel);
});

Button2000.addEventListener('click', (event) => {
    event.preventDefault();
    onClick(halfYearSub, halfYearSubLabel);
});

Button3000.addEventListener('click', (event) => {
    event.preventDefault();
    onClick(monthSub, monthSubLabel);
});
