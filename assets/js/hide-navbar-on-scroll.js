const header = document.getElementsByTagName("header")[0];
const threshold = 100;

let lastScrollY = window.scrollY;
let isScrollHide = false;
let headerHeight = (header !== undefined) ? header.offsetHeight : 0;

function updateNavbarVisibility() {
    if (isMouseNearTop || !isScrollHide) {
        header.classList.remove('hide');
    } else {
        header.classList.add('hide');
    }
}

function throttle(fn, wait) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= wait) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}

window.addEventListener("scroll", throttle(() => {
    if (!header) {
        return;
    }

    const currentScrollY = window.scrollY;

    if (Math.abs(currentScrollY - lastScrollY) < threshold) {
        return;
    }

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        isScrollHide = true;
    } else {
        isScrollHide = false;
    }

    lastScrollY = currentScrollY;
    updateNavbarVisibility();
}, 50));

window.addEventListener('resize', () => {
    headerHeight = header.offsetHeight;
    console.log("Resizing window, updating header height", headerHeight);
});

window.addEventListener('mousemove', throttle((e) => {
  isMouseNearTop = e.clientY <= headerHeight;
  updateNavbarVisibility();
}, 50));
