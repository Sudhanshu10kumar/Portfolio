/* ==========================================
   PORTFOLIO JAVASCRIPT
========================================== */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 700);
    }
});

/* ==========================================
   AOS
========================================== */

if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
}

/* ==========================================
   Typed JS
========================================== */

if (typeof Typed !== "undefined") {
    new Typed("#typing", {
        strings: [
            "ASP.NET Core",
            "Data Scientist",
            "Java Backend Developer",
            "Spring Boot Developer",
            "Problem Solver",
            "Full Stack Learner",
            "Open Source Enthusiast"
        ],
        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 1500,
        loop: true
    });
}

/* ==========================================
   Sticky Header
========================================== */

const header = document.getElementById("header");

if (header) {
    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }

    });
}

/* ==========================================
   Mobile Menu
========================================== */

const menu = document.getElementById("menu");
const nav = document.querySelector("nav");

if (menu && nav) {

    menu.addEventListener("click", () => {

        nav.classList.toggle("showMenu");

    });

}

/* ==========================================
   Close Mobile Menu
========================================== */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (nav) {

            nav.classList.remove("showMenu");

        }

    });

});

/* ==========================================
   Smooth Scroll
========================================== */

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/* ==========================================
   Active Navigation
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ==========================================
   Dark Mode
========================================== */

const themeBtn = document.getElementById("theme-btn");

if (themeBtn) {

    if (localStorage.getItem("theme") === "light") {

        document.body.classList.add("light-mode");

        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            localStorage.setItem("theme", "light");

            themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

        } else {

            localStorage.setItem("theme", "dark");

            themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

        }

    });

}

/* ==========================================
   Back To Top
========================================== */

const topBtn = document.createElement("button");

topBtn.id = "topBtn";

topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.classList.add("showTop");

    } else {

        topBtn.classList.remove("showTop");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================================
   Progress Bar
========================================== */

const progressBar = document.createElement("div");

progressBar.id = "progressBar";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (window.pageYOffset / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});

/* ==========================================
   Counter Animation
========================================== */

const counterSection = document.querySelector(".counter-container");

if (counterSection) {

    const counters = document.querySelectorAll(".counter");

    const observer = new IntersectionObserver(entries => {

        if (entries[0].isIntersecting) {

            counters.forEach(counter => {

                const target = +counter.dataset.target;

                let count = 0;

                const update = () => {

                    const increment = Math.ceil(target / 100);

                    count += increment;

                    if (count >= target) {

                        counter.innerText = target;

                    } else {

                        counter.innerText = count;

                        requestAnimationFrame(update);

                    }

                };

                update();

            });

            observer.disconnect();

        }

    });

    observer.observe(counterSection);

}

/* ==========================================
   Project Hover
========================================== */

document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        card.style.setProperty("--x", (e.clientX - rect.left) + "px");

        card.style.setProperty("--y", (e.clientY - rect.top) + "px");

    });

});

/* ==========================================
   Particles
========================================== */

if (typeof particlesJS !== "undefined") {

    particlesJS("particles-js", {

        particles: {

            number: {
                value: 70
            },

            color: {
                value: "#38bdf8"
            },

            shape: {
                type: "circle"
            },

            opacity: {
                value: 0.5
            },

            size: {
                value: 4
            },

            line_linked: {

                enable: true,

                distance: 150,

                color: "#38bdf8",

                opacity: 0.4,

                width: 1

            },

            move: {

                enable: true,

                speed: 2

            }

        }

    });

}