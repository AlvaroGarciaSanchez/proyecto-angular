const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


function prueba(){
    console.log("hola");
}


registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('hidden');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('hidden');
});