function highlight() {
    document.querySelectorAll("pre:not(.emgithub-pre)").forEach(e => {
        Prism.highlightAllUnder(e, false, () => {
            requestAnimationFrame(() => {
                e.classList.remove("hide");
            })
        });
    });
}

window.addEventListener("DOMContentLoaded", () => {
    highlight();
})
