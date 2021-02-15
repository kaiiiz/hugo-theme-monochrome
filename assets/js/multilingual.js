window.addEventListener("DOMContentLoaded", function () {
    const translation_menu = document.getElementById("translation_menu");
    const translation_wrapper = translation_menu.parentNode;

    translation_wrapper.addEventListener("mouseenter", function () {
        translation_menu.classList.remove("hidden");
    });

    translation_wrapper.addEventListener("mouseleave", function () {
        translation_menu.classList.add("hidden");
    });
});
