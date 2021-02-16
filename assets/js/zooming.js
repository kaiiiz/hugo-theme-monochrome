import Zooming from 'zooming';

document.addEventListener('DOMContentLoaded', function () {
    const zooming = new Zooming()
    zooming.listen('#content img')
});
