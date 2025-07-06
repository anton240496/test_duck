
const menubtn = document.querySelector('.menu_btn');
const menu = document.querySelector('.menu_mobile');
const body = document.querySelector('.body');
const main = document.querySelector('.main');
const clolse = document.querySelector('.close');
const m_i = document.querySelectorAll('.menu_item');
const h_i = document.querySelectorAll('.h_btn');
const l_i = document.querySelectorAll('.logo');
const fbtn = document.querySelectorAll('.callback');
const form = document.querySelector('.form');
const form_close = document.querySelector('.form_close');

fbtn.forEach(e => {
    e.addEventListener('click', () => {
        form.classList.add('form_open');
        body.classList.add('body_active');
    });
});

form_close.addEventListener('click', () => {
    if (!menu.classList.contains('mobile_open')) {
        body.classList.remove('body_active');
    } 
        form.classList.remove('form_open');
    
});


menubtn.addEventListener('click', () => {
    menu.classList.add('mobile_open');
    body.classList.add('body_active');
});

clolse.addEventListener('click', () => {

    if (!form.classList.contains('form_open')) {
        body.classList.remove('body_active');
    }
    menu.classList.remove('mobile_open')

});

