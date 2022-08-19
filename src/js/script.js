const hamburger = document.querySelector('.main__menu'),
    menu_block = document.querySelector('.menu__block'),
    menu_overlay = document.querySelector('.menu__overlay'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu_block.classList.add('active'),
    menu_overlay.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu_block.classList.remove('active'),
    menu_overlay.classList.remove('active');
});

const counters = document.querySelectorAll('.use_scale-persent'),
      lines = document.querySelectorAll('.use__scale-bord');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});