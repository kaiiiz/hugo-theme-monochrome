window.addEventListener("DOMContentLoaded", function () {
    const navbar_sm = document.getElementById("navbar_sm");
    const navbar_btn = document.getElementById('navbar_btn');

    navbar_btn.addEventListener('click', function () {
        if (navbar_sm.classList.contains("hidden")) {
            navbar_sm.classList.remove("hidden");
        } else {
            navbar_sm.classList.add("hidden");
        }
    });

    const dark_mode_btn = document.getElementById("dark_mode_btn");
    const light_mode_btn = document.getElementById("light_mode_btn");

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        light_mode_btn.classList.remove('hidden');
    } else {
        dark_mode_btn.classList.remove('hidden');
    }

    dark_mode_btn.addEventListener('click', function () {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
        dark_mode_btn.classList.add('hidden');
        light_mode_btn.classList.remove('hidden');
    });

    light_mode_btn.addEventListener('click', function () {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
        light_mode_btn.classList.add('hidden');
        dark_mode_btn.classList.remove('hidden');
    });
});
