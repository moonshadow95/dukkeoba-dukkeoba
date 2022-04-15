const navButton = document.querySelector('#navButton');
const navMenu = document.querySelector('#navMenu');
const navButtonBar_1 = navButton.querySelector('span:first-child');
const navButtonBar_2 = navButton.querySelector('span:nth-child(2)');
const navButtonBar_3 = navButton.querySelector('span:last-child');

function toggleNavMenu() {
    navMenu.classList.toggle('-translate-x-[200px]');
    navMenu.classList.toggle('translate-x-0');
    navMenu.classList.toggle('active');
    navButton.classList.toggle('justify-between');
    navButton.classList.toggle('justify-center');
    if (navMenu.classList.contains('active')) {
        navButtonActive();
    } else {
        navButtonInactive();
    }
}

function navButtonActive() {
    navButtonBar_1.classList.add('rotate-45', 'translate-y-full');
    navButtonBar_2.classList.add('opacity-0');
    navButtonBar_3.classList.add('-rotate-45', '-translate-y-full');
}

function navButtonInactive() {
    navButtonBar_1.classList.remove('rotate-45', 'translate-y-full');
    navButtonBar_2.classList.remove('opacity-0');
    navButtonBar_3.classList.remove('-rotate-45', '-translate-y-full');
}

const navbar = document.querySelector('header');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.remove('lg:bg-transparent');
        navbar.classList.add('bg-white');
    } else {
        navbar.classList.remove('bg-white');
        navbar.classList.add('lg:bg-transparent');
    }
});

navButton.addEventListener('click', toggleNavMenu);