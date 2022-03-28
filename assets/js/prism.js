function highlight() {
    document.querySelectorAll("pre:not(.emgithub-pre)").forEach(e => {
        Prism.highlightAllUnder(e, false, () => {
            requestAnimationFrame(() => {
                e.classList.remove("hide");
            })
        });
    });
}

Prism.plugins.autoloader.languages_path = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/components/';
window.addEventListener("DOMContentLoaded", () => {
    highlight();
})
