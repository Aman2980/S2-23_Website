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
    const buttons = document.querySelector('.download-btn');
    const buttonSound = document.querySelector('#buttonSound');

      buttons.addEventListener('click', () => {
        buttonSound.currentTime = 0;
        buttonSound.play();
      });

      // gameVideo
    const watchTrailerBtn = document.querySelector('.heroBtn:last-of-type');
    const gameVideo = document.getElementById('game-video');

    watchTrailerBtn.addEventListener('click', function() {
        gameVideo.style.display = 'block';
        gameVideo.play();
    });

    const learnMoreBtn = document.querySelector('.heroBtn');
    learnMoreBtn.addEventListener('click', function() {
        window.location.href = 'game.html';
    });
}

