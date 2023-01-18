const hamburger = document.querySelector(".hamburger-icon");
const navMenu = document.querySelector(".nav-menu");
const btnfeatures = document.querySelector(".dropdown-features");
const btnCompany = document.querySelector(".dropdown-company");

btnfeatures.addEventListener('click', () =>{
    btnfeatures.classList.toggle('active');
} )

btnCompany.addEventListener('click', () => {
    btnCompany.classList.toggle('active');
})




hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
})

