window.onload = function () {
    // responsive navbar
    const hamburgerMenu = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");


    hamburgerMenu.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburgerMenu.classList.remove("active");
        navMenu.classList.remove("active");
    }));


    // button sound animation
    const button = document.querySelector('.download-btn');
    const buttonSound = document.querySelector('#buttonSound');

    button.addEventListener('click', () => {
        buttonSound.currentTime = 0; // Reset the audio to the beginning
        buttonSound.play();
    });
}

