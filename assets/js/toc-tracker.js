window.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(entries => {
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