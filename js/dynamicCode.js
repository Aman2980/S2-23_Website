window.onload = function () {
    // responsive navbar
    const hamburgerMenu = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");


    hamburgerMenu.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    //     hamburgerMenu.classList.remove("active");
    //     navMenu.classList.remove("active");
    // }));


    // button sound animation
    const buttons = document.querySelectorAll('.download-btn');
    const buttonSound = document.querySelector('#buttonSound');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttonSound.currentTime = 0;
            buttonSound.play();
        });
    });

    // gameVideo
    const watchTrailerBtn = document.querySelector('.heroBtn:nth-child(2)');
    const gameVideo = document.getElementById('game-video');
    const gameVideoSection = document.querySelector('.gameVideo');

    watchTrailerBtn.addEventListener('click', function () {
        if (gameVideoSection.style.display === 'none') {
            gameVideoSection.style.display = 'block';
            alert("video playing");
            gameVideo.play();
        } else {
            gameVideoSection.style.display = 'none';
            gameVideo.pause();
        }
    });

    const learnMoreBtn = document.querySelector('.heroBtn');
    learnMoreBtn.addEventListener('click', function () {
        window.location.href = 'game.html';
    });
};