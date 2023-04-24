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

    // color changing code
    // const scrollColor = document.querySelector('.scroll-color');
    // const sectionHeight = scrollColor.offsetHeight / 19 ;
    //
    // window.addEventListener('scroll', () => {
    //     let scrollPosition = window.scrollY;
    //     if (scrollPosition > sectionHeight && scrollPosition <= sectionHeight * 2) {
    //         scrollColor.classList.add('active');
    //     } else if (scrollPosition <= sectionHeight) {
    //         scrollColor.classList.remove('active');
    //     }
    //
    // });


    // text animation

}

