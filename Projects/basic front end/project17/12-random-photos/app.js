const imgSectionEl = document.querySelector(".img-section");

const btnLoadEl = document.querySelector(".btn-load");



btnLoadEl.addEventListener("click", () => {
    imageNumber = 10;
    loadNewImages();    
});
function loadNewImages() {
    for (let i = 0; i < imageNumber; i++) {
        const newImage = document.createElement("img");
        imgSectionEl.appendChild(newImage);
        newImage.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`
    };
};