window.addEventListener("DOMContentLoaded", function () {
    const translation_menu = document.getElementById("translation_menu");
    const translation_btn = document.getElementById("translation_btn");
    const translation_wrapper = translation_menu.parentNode;

    translation_btn.addEventListener("touchend", function () {
        if (translation_menu.classList.contains("hidden")) {
            translation_menu.classList.remove("hidden");
        } else {
            translation_menu.classList.add("hidden");
        }
    });

    translation_wrapper.addEventListener("mouseenter", function () {
        translation_menu.classList.remove("hidden");
    });

    translation_wrapper.addEventListener("mouseleave", function () {
        translation_menu.classList.add("hidden");
    });
});
