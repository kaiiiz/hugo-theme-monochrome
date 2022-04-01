import Zooming from '../lib/js/zooming-v2.1.1.min.js';

document.addEventListener('DOMContentLoaded', function () {
    let bgColor;
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        bgColor = '#333';
    } else {
        bgColor = '#fff';
    }

    zooming = new Zooming({
        transitionDuration: 0.2,
        bgColor: bgColor,
    });
    zooming.listen('#content img');

    const dark_mode_btn = document.getElementById("dark_mode_btn");
    const light_mode_btn = document.getElementById("light_mode_btn");

    dark_mode_btn.addEventListener('click', function () {
        zooming.config({bgColor: '#333'});
    });

    light_mode_btn.addEventListener('click', function () {
        zooming.config({bgColor: '#fff'});
    });
});
