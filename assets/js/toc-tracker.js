window.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('article :is(h1, h2, h3, h4, h5, h6)[id]');

    const observer = new IntersectionObserver(entries => {
        sections.forEach((section) => {
            section.classList.remove('active');
        });

        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const activeLink = document.querySelector(`#TableOfContents li a[href="#${id}"]`);
            if (!activeLink) return;

            if (entry.intersectionRatio > 0) {
                activeLink.parentElement.classList.add('active');
            } else {
                activeLink.parentElement.classList.remove('active');
            }
        });
    });

    sections.forEach((section) => {
        observer.observe(section);
    });
});