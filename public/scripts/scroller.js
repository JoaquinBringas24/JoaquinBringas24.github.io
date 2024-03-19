document.addEventListener('DOMContentLoaded', function() {

const nav = document.querySelector('#nav');
const topOfNav = nav.offsetTop;

function fixNav(e) {
    if (window.scrollY >= topOfNav + 30) {

        document.body.style.paddingTop = nav.offsetHeight + 30 + 'px';

        document.body.classList.add('fixed-nav');

    } else {

        document.body.style.paddingTop = 0 + 'px';

        document.body.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', fixNav);

})