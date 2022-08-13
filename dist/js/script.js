window.addEventListener('DOMContentLoaded', () => {
    // ! Открытие и закрытие меню. 

    const humburger = document.querySelector('.humburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close'),
        menuLink = document.querySelectorAll('.menu__link');

    // открывает меню при нажатии гамбургера.
    humburger.addEventListener('click', () => {
        menu.classList.add('active');
    });
    // закрывает меню при нажатии крестика.
    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    // закрывает меню при нажатии любого элемента меню
    menuLink.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });


    // ! подвязывае скилы в процентах на странице
    const percents = document.querySelectorAll('.techno__great-percent'),
        lines = document.querySelectorAll('.techno__scale-min');
    percents.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    });

    // ! прокрутка скрола pageup
    const pageUp = document.querySelector('.pugeup');

    function showPageupScroll() {
        if (window.pageYOffset > document.documentElement.clientHeight) {
            pageUp.classList.add('show');
            pageUp.classList.remove('hide');
        } else {
            pageUp.classList.add('hide');
            pageUp.classList.remove('show');
        }
    }
    window.addEventListener('scroll', showPageupScroll);
    // при нажатии скролит страницу в начало
    pageUp.addEventListener('click', () => {
        window.scrollTo(0, 0);
    });
});