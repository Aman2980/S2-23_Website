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

    // text animation

}

