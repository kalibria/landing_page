document.querySelector('.form').addEventListener('submit', function (e) {
    e.preventDefault();
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const agreeCheckbox = document.getElementById('agree');

    let isValid = true;

    // Очистка предыдущих ошибок
    clearErrors();

    // Валидация имени
    if (nameInput.value.trim() === '') {
        showError('name', 'Пожалуйста, введите ваше имя.');
        isValid = false;
    }

    // Валидация email
    if (!validateEmail(emailInput.value)) {
        showError('email', 'Введите корректный email.');
        isValid = false;
    }

    // Валидация сообщения
    if (messageInput.value.trim() === '') {
        showError('message', 'Сообщение не должно быть пустым.');
        isValid = false;
    }

    // Валидация согласия с политикой
    if (!agreeCheckbox.checked) {
        showError('agree', 'Вы должны согласиться с политикой конфиденциальности.');
        isValid = false;
    }

    if (isValid) {
        // Пример запроса на сервер
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value,
        };

        // Используем Fake JSON API
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                alert('Форма успешно отправлена!');
                console.log(data);

                nameInput.value = "";
                emailInput.value = "";
                messageInput.value = "";
                agreeCheckbox.checked = false;
            })
            .catch((error) => {
                alert('Ошибка отправки формы.');
                console.error(error);
            });
    }
});

function showError(inputId, message) {
    const errorElement = document.getElementById(`${inputId}-error`);
    const inputElement = document.getElementById(inputId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    if (inputElement) {
        inputElement.classList.add('invalid');
    }
}

function clearErrors() {
    document.querySelectorAll('.error-message').forEach((error) => {
        error.textContent = '';
        error.style.display = 'none';
    });
    document.querySelectorAll('.input').forEach((input) => {
        input.classList.remove('invalid');
    });
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
