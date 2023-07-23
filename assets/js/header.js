function hide_canvas() {
    const sidebar_canvas_overlay = document.getElementById("sidebar_canvas_overlay");
    sidebar_canvas_overlay.classList.add("hidden");
}

function show_canvas() {
    const sidebar_canvas_overlay = document.getElementById("sidebar_canvas_overlay");
    sidebar_canvas_overlay.classList.remove("hidden");
}

function hide_sidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.add("close");
}

function show_sidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("close");
}

window.addEventListener("DOMContentLoaded", function() {
    const sidebar_btn = document.getElementById("sidebar_btn");
    sidebar_btn.addEventListener("click", function() {
        show_canvas();
        show_sidebar();
    });

    const sidebar_canvas_overlay = document.getElementById("sidebar_canvas_overlay");
    sidebar_canvas_overlay.addEventListener("click", function() {
        hide_canvas();
        hide_sidebar();
    });

    const dark_mode_btn = document.getElementById("dark_mode_btn");
    const light_mode_btn = document.getElementById("light_mode_btn");

    dark_mode_btn.addEventListener('click', function() {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.theme = 'dark';
    });

    light_mode_btn.addEventListener('click', function() {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.theme = 'light';
    });
});
