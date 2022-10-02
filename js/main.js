document.addEventListener('DOMContentLoaded', function() {
    "use strict";
    const menu = document.querySelectorAll('.menu-product__link'),
        card = document.querySelectorAll('.card__span'),
        catalog = document.getElementById('catalog-mobile'),
        catalogMenu = document.querySelector('.menu-product'),
        burger = document.querySelector('.burger'),
        menuBurger = document.querySelector('.header__nav');

    menu.forEach(el => {
        el.addEventListener('click', getAddClassActive);
    })
    card.forEach(el => {
        el.addEventListener('click', getClassActive);
    })

    function getAddClassActive(e) {
        const el = document.querySelector('.menu-product__list_active');
        if(el) {
          el.classList.remove('menu-product__list_active');
        }
        e.target.parentElement.classList.add('menu-product__list_active');
    }
    function getClassActive(e) {
        const el = document.querySelector('.active');
        if(el) {
          el.classList.remove('active');
        }
        e.target.classList.add('active');
    }

    // open menu mobile
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menuBurger.classList.toggle('active');
    })
    catalog.addEventListener('click', () => {
        catalogMenu.classList.toggle('active');
    })
});