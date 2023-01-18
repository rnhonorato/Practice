const hamburger = document.querySelector(".hamburger__nav")
const navMenu = document.querySelector(".ul__menu__nav")


hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');    
    navMenu.classList.toggle('active');

} )



