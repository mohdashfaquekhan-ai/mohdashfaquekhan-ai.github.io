document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", function () {

            navLinks.classList.toggle("show");

            const isOpen = navLinks.classList.contains("show");

            menuButton.setAttribute("aria-expanded", isOpen);

        });


        navLinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("show");

                menuButton.setAttribute("aria-expanded", "false");

            });

        });

    }

});
