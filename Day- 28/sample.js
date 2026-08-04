/* =====================================================
   TASTY BITES FOOD BLOG
===================================================== */


/* =====================================================
   ELEMENTS
===================================================== */

const header = document.querySelector(".header");

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

const slides = document.querySelectorAll(".hero-slide");

const dots = document.querySelectorAll(".dot");

const filterButtons =
    document.querySelectorAll(".filter-btn");

const recipeCards =
    document.querySelectorAll(".recipe-card");

const navSearch =
    document.getElementById("navSearch");

const favorites =
    document.querySelectorAll(".favorite");

const toast =
    document.getElementById("toast");

const toastMessage =
    document.getElementById("toastMessage");


/* =====================================================
   MOBILE MENU
===================================================== */

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("show");

    document.body.classList.toggle("menu-open");

    const icon =
        menuBtn.querySelector("i");

    if (navLinks.classList.contains("show")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* CLOSE MENU AFTER CLICK */

document
    .querySelectorAll(".nav-links a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("show");

            document.body.classList.remove("menu-open");

            const icon =
                menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });


/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =====================================================
   HERO SLIDER
===================================================== */

let currentSlide = 0;

let slideTimer;


function showSlide(index) {

    slides.forEach(function (slide) {

        slide.classList.remove("active");

    });


    dots.forEach(function (dot) {

        dot.classList.remove("active");

    });


    slides[index].classList.add("active");

    dots[index].classList.add("active");

    currentSlide = index;

}


/* NEXT SLIDE */

function nextSlide() {

    let next =
        currentSlide + 1;

    if (next >= slides.length) {

        next = 0;

    }

    showSlide(next);

}


/* AUTO SLIDE */

function startSlider() {

    slideTimer =
        setInterval(nextSlide, 5000);

}

startSlider();


/* DOT CLICK */

dots.forEach(function (dot) {

    dot.addEventListener("click", function () {

        clearInterval(slideTimer);

        const slideNumber =
            Number(
                dot.getAttribute("data-slide")
            );

        showSlide(slideNumber);

        startSlider();

    });

});


/* =====================================================
   RECIPE FILTER
===================================================== */

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        const filter =
            button.getAttribute("data-filter");


        recipeCards.forEach(function (card) {

            const category =
                card.getAttribute("data-category");


            if (
                filter === "all" ||
                category === filter
            ) {

                card.classList.remove("hidden");

                card.animate(
                    [
                        {
                            opacity: 0,
                            transform: "translateY(20px)"
                        },
                        {
                            opacity: 1,
                            transform: "translateY(0)"
                        }
                    ],
                    {
                        duration: 400,
                        easing: "ease"
                    }
                );

            } else {

                card.classList.add("hidden");

            }

        });

    });

});


/* =====================================================
   SEARCH
===================================================== */

navSearch.addEventListener(
    "input",
    function () {

        const searchText =
            navSearch.value
                .toLowerCase()
                .trim();


        recipeCards.forEach(function (card) {

            const title =
                card
                    .querySelector("h3")
                    .textContent
                    .toLowerCase();


            const description =
                card
                    .querySelector(".recipe-body > p")
                    .textContent
                    .toLowerCase();


            const category =
                card
                    .getAttribute("data-category")
                    .toLowerCase();


            if (
                title.includes(searchText) ||
                description.includes(searchText) ||
                category.includes(searchText)
            ) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    }
);


/* =====================================================
   FAVORITE BUTTON
===================================================== */

favorites.forEach(function (button) {

    button.addEventListener("click", function () {

        const icon =
            button.querySelector("i");


        button.classList.toggle("liked");


        if (button.classList.contains("liked")) {

            icon.classList.remove("fa-regular");

            icon.classList.add("fa-solid");

            showToast("Added to your favorites ❤️");

        } else {

            icon.classList.remove("fa-solid");

            icon.classList.add("fa-regular");

            showToast("Removed from favorites");

        }

    });

});


/* =====================================================
   TOAST MESSAGE
===================================================== */

let toastTimer;


function showToast(message) {

    toastMessage.textContent = message;

    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(function () {

            toast.classList.remove("show");

        }, 2500);

}


/* =====================================================
   NEWSLETTER
===================================================== */

const newsletterForm =
    document.getElementById("newsletterForm");


newsletterForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const email =
            document
                .getElementById("newsletterEmail")
                .value
                .trim();


        if (email === "") {

            showToast("Please enter your email");

            return;

        }


        showToast(
            "Successfully subscribed! 🎉"
        );


        newsletterForm.reset();

    }
);


/* =====================================================
   WRITE BLOG
===================================================== */

const writeBtn =
    document.getElementById("writeBtn");


writeBtn.addEventListener(
    "click",
    function () {

        showToast(
            "Blog editor coming soon ✍️"
        );

    }
);


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".recipe-card, .feature-section, .write-section, .newsletter"
    );


revealElements.forEach(function (element) {

    element.classList.add("reveal");

});


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(function (element) {

    observer.observe(element);

});


/* =====================================================
   NAVBAR SEARCH - ENTER
===================================================== */

navSearch.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            document
                .getElementById("recipes")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }

    }
);


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener(
    "scroll",
    function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 150;

            if (
                window.scrollY >= sectionTop
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navigationLinks.forEach(function (link) {

            link.classList.remove("current");

            const href =
                link.getAttribute("href");


            if (
                href === "#" + currentSection
            ) {

                link.classList.add("current");

            }

        });

    }
);