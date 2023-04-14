const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const greeting = document.querySelector('#greeting');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = input.value.trim();

    if (name === '') {
        alert('Пожалуйста, введите ваше имя');

        input.focus();
    } else {
        greeting.textContent = `Привет, ${name}! Добро Пожаловать на наш сайт!`;
        input.value = '';
    }
})