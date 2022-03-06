Prism.plugins.autoloader.languages_path = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/components/';
highlight();

function highlight() {
    document.querySelectorAll("pre:not(.emgithub-pre)").forEach(e => {
        Prism.highlightAllUnder(e, true, () => {
            requestAnimationFrame(() => {
                e.classList.remove("hide");
            })
        });
    });
}