function scrollHandler(target) {
    const leftDistance = target.scrollLeft;
    const rightDistance = target.scrollWidth - leftDistance - target.clientWidth;

    const indicatorWrapper = target.parentNode;
    const rightBtn = indicatorWrapper.getElementsByClassName("overflow-indicator-btn-right")[0];
    const leftBtn = indicatorWrapper.getElementsByClassName("overflow-indicator-btn-left")[0];

    if (rightDistance > 0) {
        rightBtn.classList.add("show");
    } else {
        rightBtn.classList.remove("show");
    }

    if (leftDistance > 0) {
        leftBtn.classList.add("show");
    } else {
        leftBtn.classList.remove("show");
    }
}

function resizeHandler() {
    const layer_items = document.querySelectorAll('.bookcase-layer-items');
    layer_items.forEach(i => scrollHandler(i));
}

function easeInOutQuad(t) { return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t }

function smoothScroll(target, offset) {
    let start = null;
    let startScrollLeft = target.scrollLeft;
    let duration = 0.2; // s
    duration = duration * 1000;
    const step = (timestamp) => {
        if (!start) start = timestamp;
        let progress = timestamp - start;
        let percentage = Math.min(progress / duration, 1);

        target.scrollLeft = easeInOutQuad(percentage) * offset + startScrollLeft;
        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    }
    window.requestAnimationFrame(step);
}

function rightBtnHandler(target) {
    const indicatorWrapper = target.parentNode;
    const content = indicatorWrapper.getElementsByClassName("overflow-indicator-content")[0];
    smoothScroll(content, 202);
}

function leftBtnHandler(target) {
    const indicatorWrapper = target.parentNode;
    const content = indicatorWrapper.getElementsByClassName("overflow-indicator-content")[0];
    smoothScroll(content, -202);
}

function registerListener() {
    window.addEventListener('resize', resizeHandler);
    document.querySelectorAll('.bookcase-layer-items').forEach(i => {
        i.addEventListener('scroll', (e) => scrollHandler(e.target));
    });
    document.querySelectorAll('.overflow-indicator-btn-right').forEach(i => {
        i.addEventListener('click', (e) => rightBtnHandler(e.target));
    });
    document.querySelectorAll('.overflow-indicator-btn-left').forEach(i => {
        i.addEventListener('click', (e) => leftBtnHandler(e.target));
    });
}

registerListener();
resizeHandler();
