/* eslint-disable no-console */
const form = document.getElementById('auth');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Проверяем, что email введен корректно
    if (!isValidEmail(emailInput.value)) {
        alert('Введите корректный email!');
        emailInput.focus();
        return;
    }

    // Проверяем, что пароль введен корректно
    if (!isValidPassword(passwordInput.value)) {
        alert('Введите корректный пароль! Пароль должен содержать минимум 6 символов.');
        passwordInput.focus();
        return;
    }

    window.location.href = 'home.html';
});

// Функция для проверки корректности email
function isValidEmail(email) {
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegExp.test(email);
}

// Функция для проверки корректности пароля
function isValidPassword(password) {
    return password.length >= 6;
}
