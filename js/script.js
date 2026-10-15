
document.addEventListener("DOMContentLoaded", function () {

    // Automatically update the copyright year.
    const year = document.getElementById("currentYear");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Highlight the navigation link for the current page.
    const currentFile =
        window.location.pathname.split("/").pop().toLowerCase()
        || "index.html";

    document.querySelectorAll(".site-nav .nav-link").forEach(function (link) {

        const target = (link.getAttribute("href") || "").toLowerCase();

        if (target === currentFile) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });

    // Demo forms: prevent a reload and clearly explain their status.
    document.querySelectorAll(".demo-form").forEach(function (form) {

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const message = form.querySelector(".form-message");

            if (message) {
                message.textContent =
                    "This is a front-end demonstration. " +
                    "Your information has not been sent or saved. " +
                    "Connect a secure form backend before publishing.";
            }
        });
    });

});
