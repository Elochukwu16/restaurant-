// ============================
// MOBILE MENU
// ============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("show");

    });

}

const video = document.getElementById("myVideo");

video.playbackRate = 0.5;


// Close menu when link is clicked

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});


// ============================
// SCROLL TO TOP
// ============================

const scrollTop = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTop.style.display = "block";

    } else {

        scrollTop.style.display = "none";

    }

});


if (scrollTop) {

    scrollTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ============================
// FADE-IN ANIMATION
// ============================

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.15
    }

);


document.querySelectorAll(".food-card, .feature, .intro-content").forEach(element => {

    element.classList.add("fade-element");

    observer.observe(element);

});


// ============================
// BOOKING FORM
// ============================

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const date = document.getElementById("date").value;

        if (name === "" || date === "") {

            alert("Please fill in all required fields.");

            return;

        }

        alert(
            `Thank you ${name}! Your table request for ${date} has been received.`
        );

        bookingForm.reset();

    });

}