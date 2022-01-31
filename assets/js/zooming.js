import Zooming from 'zooming';

document.addEventListener('DOMContentLoaded', function () {
    const zooming = new Zooming({
        bgOpacity: 0,
        transitionDuration: 0.2,
    })
    zooming.listen('#content img')
});
