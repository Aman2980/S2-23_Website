window.onload = function () {
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
            alert('Incorrect password. Please try again.');
            console.log("error")

        }
        // Login successful, redirect to a home page
        else {
            alert('Login successful!');
            window.location.href= '../index.html';
        }
    });
}
