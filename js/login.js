document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
    const username = sessionStorage.getItem('username');
    const loginButton = document.querySelector('button[type="submit"]');
    const logoutButton = document.createElement('button');
    logoutButton.textContent = 'Logout';
    logoutButton.addEventListener('click', handleLogout);
    if (username) {
        const legend = document.querySelector('legend h2');
        if (legend) {
            legend.textContent = `WELCOME ${username}`.toUpperCase();
        }
        loginButton.replaceWith(logoutButton);
    }
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

// This one finds the adding and updates the innertext to the heading with the username and if it doesnt find it, it creates that element


function handleSuccessfulLogin(username, passwordInput) {
    const legend = document.querySelector('legend h2');
    if (legend) {
        legend.textContent = `WELCOME ${username}`.toUpperCase();
    }
    passwordInput.classList.remove('incorrect');
    passwordInput.classList.add('correct');
    sessionStorage.setItem('username', username);
    removeErrorMessage();
    showLoadingIndicator();
    const logoutButton = document.createElement('button');
    logoutButton.textContent = 'Logout';
    logoutButton.addEventListener('click', handleLogout);
    const loginButton = document.querySelector('button[type="submit"]');
    loginButton.replaceWith(logoutButton);
    setTimeout(() => {
        hideLoadingIndicator();
        window.location.href = '../html/Stats.html';
        if (username) {
            const headingWelcome = document.querySelector('.headingWelcome');
            if (!headingWelcome) {
                const main = document.querySelector('main');
                const newHeadingWelcome = document.createElement('h2');
                newHeadingWelcome.classList.add('headingWelcome');
                newHeadingWelcome.textContent = `WELCOME ${username}`;
                main.insertBefore(newHeadingWelcome, main.firstChild);
            } else {
                headingWelcome.textContent = `WELCOME ${username}`;
            }
        } else {
            console.log("User not found");
        }
    }, 2000);
}
// This one finds the adding and updates the innertext to the heading with the username

// function handleSuccessfulLogin(username, passwordInput) {
//     const legend = document.querySelector('legend h2');
//     if (legend) {
//         legend.textContent = `WELCOME ${username}`.toUpperCase();
//     }
//     passwordInput.classList.remove('incorrect');
//     passwordInput.classList.add('correct');
//     sessionStorage.setItem('username', username);
//     removeErrorMessage();
//     showLoadingIndicator();
//     const logoutButton = document.createElement('button');
//     logoutButton.textContent = 'Logout';
//     logoutButton.addEventListener('click', handleLogout);
//     const loginButton = document.querySelector('button[type="submit"]');
//     loginButton.replaceWith(logoutButton);
//     setTimeout(() => {
//         hideLoadingIndicator();
//         window.location.href = '../html/Stats.html';
//         if (username) {
//             const headingWelcome = document.querySelector('.headingWelcome')
//             headingWelcome.innerHTML = `WELCOME ${username}`;
//         } else {
//             console.log("User not found");
//         }
//     }, 2000);
// }


function handleLogout() {
    sessionStorage.removeItem('username');
    location.reload();
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
