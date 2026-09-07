document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    // Mobile navigation
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("active");
            menuToggle.setAttribute("aria-expanded", isOpen);
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    // Animated skill bars when they enter the screen
    const skillBars = document.querySelectorAll(".skill-row em");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.25 });

        skillBars.forEach(bar => observer.observe(bar));
    }

    // WhatsApp contact form
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", event => {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            const phoneNumber = "254743976279";

            const text =
                `Hello Eli!%0A%0A` +
                `Name: ${encodeURIComponent(name)}%0A` +
                `Email: ${encodeURIComponent(email)}%0A%0A` +
                `Message:%0A${encodeURIComponent(message)}`;

            const whatsappURL =
                `https://wa.me/${phoneNumber}?text=${text}`;

            window.open(whatsappURL, "_blank", "noopener,noreferrer");
        });
    }

    // Current year
    const year = document.getElementById("year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }
});
