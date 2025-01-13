document.querySelector('.form').addEventListener('submit', function (e) {
    e.preventDefault();
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const agreeCheckbox = document.getElementById('agree');

    let isValid = true;

    clearErrors();

    if (nameInput.value.trim() === '') {
        showError('name', 'Пожалуйста, введите ваше имя.');
        isValid = false;
    }

    if (!validateEmail(emailInput.value)) {
        showError('email', 'Введите корректный email.');
        isValid = false;
    }

    if (messageInput.value.trim() === '') {
        showError('message', 'Сообщение не должно быть пустым.');
        isValid = false;
    }

    if (!agreeCheckbox.checked) {
        showError('agree', 'Вы должны согласиться с политикой конфиденциальности.');
        isValid = false;
    }

    if (isValid) {
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value,
        };

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
    document.querySelectorAll('.form__input').forEach((input) => {
        input.classList.remove('invalid');
    });
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
