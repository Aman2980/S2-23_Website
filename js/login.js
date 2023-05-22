import {gamesJson} from "../db/db.js";

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
    const username = sessionStorage.getItem('username');
    const loginButton = document.querySelector('button[type="submit"]');
    const logoutButton = document.createElement('button');
    logoutButton.textContent = 'Logout';
    logoutButton.addEventListener('click', handleLogout);
    const statsNavItem = document.querySelector('.nav-link.stats'); // Select the stats navigation item

    if (username) {
        const legend = document.querySelector('legend h2');
        if (legend) {
            legend.textContent = `WELCOME ${username}`.toUpperCase();
        }
        loginButton.replaceWith(logoutButton);
        statsNavItem.style.visibility = 'visible'; // Make the stats navigation item visible
    } else {
        statsNavItem.style.visibility = 'hidden'; // Hide the stats navigation item
    }

});


function handleSubmit(event) {
    event.preventDefault(); // prevent form submission
    const usernameInput = document.querySelector('#username');
    const passwordInput = document.querySelector('#password');
    const username = usernameInput.value;
    const password = passwordInput.value;
    const matchedUser = gamesJson.find(user => user.player_name === username && user.player_name.split('').reverse().join('') === password);

    // Check if the username and password are not empty
    if (!username || !password) {
        alertUser('Please enter both username and password.');
        return;
    }

    if (!matchedUser) {
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
    sessionStorage.setItem('username', username);
    removeErrorMessage();
    const monoMom = document.querySelector('.monoMan');
    monoMom.style.visibility = 'visible';
    showLoadingIndicator();
    const logoutButton = document.createElement('button');
    logoutButton.textContent = 'Logout';
    logoutButton.addEventListener('click', handleLogout);
    const loginButton = document.querySelector('button[type="submit"]');
    loginButton.replaceWith(logoutButton);
    setTimeout(() => {
        hideLoadingIndicator();
        window.location.href = '../html/Stats.html';
    }, 2000);
}


function handleLogout() {
    sessionStorage.removeItem('username');
    location.reload();
    setTimeout(() => {
        showLoadingIndicator();
        window.location.href = '../index.html';
    }, 2000);
    // const formLabel = document.querySelectorAll('.form-group label');
    // formLabel.style.visibility='visible';
    // const formInput = document.querySelectorAll('.form-group input');
    // formInput.style.visibility='visible';
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

