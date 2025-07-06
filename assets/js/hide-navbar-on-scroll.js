let lastScrollY = window.scrollY;
const header = document.getElementsByTagName("header")[0];
const threshold = 100;

window.addEventListener("scroll", () => {
    if (!header) {
        return;
    }

    const currentScrollY = window.scrollY;

    if (Math.abs(currentScrollY - lastScrollY) < threshold) {
        return;
    }

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }

    lastScrollY = currentScrollY;
});
