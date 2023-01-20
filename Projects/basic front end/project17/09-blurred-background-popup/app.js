const btnSignEl = document.querySelector(".main-btn");
const btnNewsJoinEl = document.querySelector(".popup-btn");

const closeIconEl = document.querySelector(".close-icon");

const popupEl = document.querySelector(".popup-section")
const bodyBackgroundImgEl = document.querySelector(".body-background-img")
const mainSectionEl = document.querySelector(".main-section")



btnSignEl.addEventListener("click", ()=>{
    popupEl.classList.add("active");
    bodyBackgroundImgEl.classList.add("active");
    mainSectionEl.classList.add("active");
    

});

closeIconEl.addEventListener("click", ()=>{
    popupEl.classList.remove("active");
    bodyBackgroundImgEl.classList.remove("active");
    mainSectionEl.classList.remove("active");
});