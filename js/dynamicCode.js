document.addEventListener('DOMContentLoaded', function() {
    addResponsiveNavbar();
    addButtonSoundAnimation();
    addGameVideoHandlers();
    addLearnMoreHandler();
});

function addResponsiveNavbar() {
    const hamburgerMenu = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburgerMenu.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
}

function addButtonSoundAnimation() {
    const buttons = document.querySelectorAll('.download-btn');
    const buttonSound = document.querySelector('#buttonSound');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttonSound.currentTime = 0;
            buttonSound.play();
        });
    });
}

function addGameVideoHandlers() {
    const watchTrailerBtn = document.querySelector('.heroBtn:nth-child(2)');
    const gameVideo = document.getElementById('game-video');
    const gameVideoSection = document.querySelector('.gameVideo');

    watchTrailerBtn.addEventListener('click', function () {
        if (gameVideoSection.style.display === 'none') {
            gameVideoSection.style.display = 'block';
            gameVideo.play();
        } else {
            gameVideoSection.style.display = 'none';
            gameVideo.pause();
        }
    });
}

function addLearnMoreHandler() {
    const learnMoreBtn = document.querySelector('.heroBtn');
    learnMoreBtn.addEventListener('click', function () {
        window.location.href = 'game.html';
    });
}

