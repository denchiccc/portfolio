const humburger = document.querySelector('.humburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');


humburger.addEventListener('click', () => {
    menu.classList.add('active');
});
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percents = document.querySelectorAll('.techno__great-percent'),
    lines = document.querySelectorAll('.techno__scale-min');

percents.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});