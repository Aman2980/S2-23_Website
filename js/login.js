const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent form submission

    const usernameInput = document.querySelector('#username');
    const passwordInput = document.querySelector('#password');
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Check if the username and password are not empty
    if (!username || !password) {
        alert('Please enter both username and password.');
        return;
    }

    // Check if the password is the reverse of the username
    if (password !== username.split('').reverse().join('')) {
        // alert('Incorrect password. Please try again.');
        passwordInput.classList.remove('correct');
        passwordInput.classList.add('incorrect');
        const errorMessage = document.querySelector('.errorMessage')
        errorMessage.innerHTML = ('Incorrect password');
        errorMessage.style.color=('white');
        console.log("error");
    }
    // Login successful, update the legend h2 with the username
    else {
        const legend = document.querySelector('legend h2');
        legend.textContent = `WELCOME ${username}`.toUpperCase();
        // alert('Login successful!');
        passwordInput.classList.remove('incorrect');
        passwordInput.classList.add('correct');
        const errorMessage = document.querySelector('.errorMessage')
        if (errorMessage) {
            errorMessage.remove();
        }
        // window.location.href= '../index.html';
    }
});
