window.addEventListener("DOMContentLoaded", function () {
    const dark_mode_btn = document.getElementById("dark_mode_btn");
    const light_mode_btn = document.getElementById("light_mode_btn");

    dark_mode_btn.addEventListener('click', function () {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.theme = 'dark';
    });

    light_mode_btn.addEventListener('click', function () {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.theme = 'light';
    });
});
