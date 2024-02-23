

const carouselEl = document.querySelector(".carousel-container");

const imgsEl = document.querySelectorAll("img");

const iconBackwardEl = document.querySelector(".icon-backward");
const iconforwardEl = document.querySelector(".icon-forward");

let currentImg = 1;

let timeout;

updateImage();

iconBackwardEl.addEventListener("click", () => {
    console.log("backward");
    currentImg--
    clearTimeout(timeout)
    updateImage();
});

iconforwardEl.addEventListener("click", () => {
    console.log("forward");    
    currentImg++
    clearTimeout(timeout)
    updateImage();
})





function updateImage(){
    if(currentImg > imgsEl.length){
        currentImg = 1;
    }else if(currentImg < 1){
        currentImg = imgsEl.length;
    }
    carouselEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;


    timeout = setTimeout(()=>{
        currentImg++
        updateImage();
    }, 3000)
}