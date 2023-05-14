
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
});

function handleSubmit(event) {
    event.preventDefault(); // prevent form submission
    const usernameInput = document.querySelector('#username');
    const passwordInput = document.querySelector('#password');
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Check if the username and password are not empty
    if (!username || !password) {
        alertUser('Please enter both username and password.');
        return;
    }

    // Check if the password is the reverse of the username
    if (password !== reverseString(username)) {
        displayPasswordError();
    } else {
        handleSuccessfulLogin(username, passwordInput);
    }
}

function alertUser(message) {
    alert(message);
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function displayPasswordError() {
    const passwordInput = document.querySelector('#password');
    passwordInput.classList.remove('correct');
    passwordInput.classList.add('incorrect');
    const errorMessage = document.querySelector('.errorMessage');
    errorMessage.innerHTML = 'Incorrect password';
    errorMessage.style.color = 'red';
    errorMessage.style.marginTop = '5px';
    console.log('error');
}

function handleSuccessfulLogin(username, passwordInput) {
    const legend = document.querySelector('legend h2');
    if (legend) {
        legend.textContent = `WELCOME ${username}`.toUpperCase();
    }
    passwordInput.classList.remove('incorrect');
    passwordInput.classList.add('correct');
    localStorage.setItem('username', username);
    removeErrorMessage();
    showLoadingIndicator();
    setTimeout(() => {
        hideLoadingIndicator();
        window.location.href = '../html/Stats.html';
    }, 2000);
}

function removeErrorMessage() {
    const errorMessage = document.querySelector('.errorMessage');
    if (errorMessage) {
        errorMessage.remove();
    }
}

function showLoadingIndicator() {
    const loading = document.querySelector('.wave');
    loading.style.visibility = 'visible';
}

function hideLoadingIndicator() {
    const loading = document.querySelector('.wave');
    loading.style.visibility = 'hidden';
}
