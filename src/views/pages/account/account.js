/* eslint-disable prefer-const */
const submitLinkClassName = 'balance__link';
const submitLink = document.querySelector(`.${submitLinkClassName}`);
const submit1500PriceButtonClassName = 'plans__first';
const submitButton1500 = document.querySelector(`.${submit1500PriceButtonClassName}`);
const submit2000PriceButtonClassName = 'plans__second';
const submitButton2000 = document.querySelector(`.${submit2000PriceButtonClassName}`);
const submit3000PriceButtonClassName = 'plans__third';
const submitButton3000 = document.querySelector(`.${submit3000PriceButtonClassName}`);

let balance = 0;
let namePlan = 'У вас нет активного абонемента';

document.getElementById('balance').innerText = balance;
document.getElementById('current-plan').innerText = namePlan;

submitLink.addEventListener('click', (event) => {
    event.preventDefault();
    balance += 5000;
    document.getElementById('balance').innerText = balance;
});

submitButton1500.addEventListener('click', (event) => {
    event.preventDefault();
    if (balance >= 18000) {
        balance -= 18000;
        namePlan = 'Годовой абонемент';
        document.getElementById('balance').innerText = balance;
        document.getElementById('current-plan').innerText = namePlan;
    } else {
        alert('Не хватает денег на балансе');
    }
});

submitButton2000.addEventListener('click', (event) => {
    event.preventDefault();
    if (balance >= 12000) {
        balance -= 12000;
        namePlan = 'Полугодовой абонемент';
        document.getElementById('balance').innerText = balance;
        document.getElementById('current-plan').innerText = namePlan;
    } else {
        alert('Не хватает денег на балансе');
    }
});

submitButton3000.addEventListener('click', (event) => {
    event.preventDefault();
    if (balance >= 3000) {
        balance -= 3000;
        namePlan = 'Месячный абонемент';
        document.getElementById('balance').innerText = balance;
        document.getElementById('current-plan').innerText = namePlan;
    } else {
        alert('Не хватает денег на балансе');
    }
});
