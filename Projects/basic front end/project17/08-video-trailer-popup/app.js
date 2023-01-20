const btnEl = document.querySelector(".content-btn");
const closeIcon = document.querySelector(".close-icon")
const trailerContainerEl = document.querySelector(".video-section")
const videoEl = document.querySelector("video");


btnEl.addEventListener("click", () => {
    trailerContainerEl.classList.remove("active");
});


closeIcon.addEventListener("click", () => {
    trailerContainerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
})