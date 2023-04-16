const submitButtonClassName = 'auth__form-submit';
const submitButton = document.querySelector(`.${submitButtonClassName}`);

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
});
