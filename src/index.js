const navButton = document.querySelector('#navButton');
const navMenu = document.querySelector('#navMenu');
const navButtonBar_1 = navButton.querySelector('span:first-child');
const navButtonBar_2 = navButton.querySelector('span:nth-child(2)');
const navButtonBar_3 = navButton.querySelector('span:last-child');
const navItem = navMenu.querySelectorAll('button')

// 메뉴 선택시 점 생성
navItem.forEach((item) =>
    item.addEventListener('click', (e) => {
            toggleActive(e)
        }
    )
)

function toggleActive(e) {
    navItem.forEach(item => {
        item.classList.remove('active')
        e.target.classList.add('active')
    })
}

// 열고 닫기
function toggleNavMenu() {
    navMenu.classList.toggle('-translate-x-[200px]');
    navMenu.classList.toggle('translate-x-0');
    navMenu.classList.toggle('active');
    // navButton.classList.toggle('justify-between');
    // navButton.classList.toggle('justify-center');
    // if (navMenu.classList.contains('active')) {
    //     navButtonActive();
    // } else {
    //     navButtonInactive();
    // }
}

function navButtonActive() {
    navButtonBar_1.classList.add('rotate-45', 'translate-y-full', 'translate-x-[-1px]');
    navButtonBar_2.classList.add('opacity-0');
    navButtonBar_3.classList.add('rotate-[-45deg]', 'translate-y-[-100%]', 'translate-x-[-1px]');
}

function navButtonInactive() {
    navButtonBar_1.classList.remove('rotate-45', 'translate-y-full', 'translate-x-[-1px]');
    navButtonBar_2.classList.remove('opacity-0');
    navButtonBar_3.classList.remove('rotate-[-45deg]', 'translate-y-[-100%]', 'translate-x-[-1px]');
}

// 헤더 배경색 변경
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

const carousel = document.querySelector('#carousel')
const carouselItems = carousel.querySelectorAll('li')
const prevButton = document.querySelector('#prevButton')
const nextButton = document.querySelector('#nextButton')
prevButton.addEventListener('click', () => {
    carouselItems.forEach(item => {
        if (item.classList.contains('active')) {
            const prevItem = item.previousElementSibling
            if (prevItem) {
                item.classList.remove('active')
                prevItem.classList.add('active')
            } else {
                item.classList.remove('active')
                carouselItems[carouselItems.length - 1].classList.add('active')
            }
        }
    })
})
nextButton.addEventListener('click', () => {
    carouselItems.forEach(item => {
        if (item.classList.contains('active')) {
            const nextItem = item.nextElementSibling
            console.log(item)
            if (nextItem) {
                item.classList.remove('active')
                nextItem.classList.add('active')
            } else {
                item.classList.remove('active')
                carouselItems[carouselItems.length - 1].classList.add('active')
            }
        }
    })
})
