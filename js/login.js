document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
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
            passwordInput.classList.remove('correct');
            passwordInput.classList.add('incorrect');
            const errorMessage = document.querySelector('.errorMessage')
            errorMessage.innerHTML = ('Incorrect password');
            errorMessage.style.color = ('red');
            errorMessage.style.marginTop = ('5px');
            console.log("error");
        } else {
            const legend = document.querySelector('legend h2');
            if (legend) {
                legend.textContent = `WELCOME ${username}`.toUpperCase();
            }
            passwordInput.classList.remove('incorrect');
            passwordInput.classList.add('correct');
            localStorage.setItem('username', username);
            const loggedInUsername = localStorage.getItem('username');
            if (loggedInUsername) {
                const usernameSpan = document.querySelector('.username');
                usernameSpan.textContent = `Welcome ${loggedInUsername}`.toUpperCase();
            }
            const errorMessage = document.querySelector('.errorMessage')
            if (errorMessage) {
                errorMessage.remove();
            }
            const loading = document.querySelector('.wave')
            loading.style.visibility = 'visible';
            setTimeout(() => {
                loading.style.visibility = 'hidden';
                window.location.href = '../html/Stats.html';
            }, 2000);
        }
    });
});
