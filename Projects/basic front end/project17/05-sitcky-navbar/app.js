let navbarEl = document.getElementById("navbar");
let headingSectionEl = document.querySelector(".paragraph-section")



window.addEventListener("scroll", () => {
    



    if (window.scrollY > headingSectionEl.offsetTop - navbarEl.offsetHeight - 50){

        navbarEl.classList.add("sticky")
    } else {
        navbarEl.classList.remove("sticky")
    }
})






