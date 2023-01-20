const kits = ["crash", "kick", "snare", "tom"];

const sectionDrumEl = document.querySelector(".section-drum");




kits.forEach(kit=>{
    const btnEl = document.createElement("button");
    sectionDrumEl.appendChild(btnEl);
    btnEl.classList.add("drum-kit");
    btnEl.innerText = kit;
    btnEl.style.backgroundImage = "url(image/" + kit + ".png)"
    const audioEl = document.createElement("audio");
    audioEl.src = "sounds/" + kit + ".mp3"
    sectionDrumEl.appendChild(audioEl);
    btnEl.addEventListener("click", ()=>{
        audioEl.play();
    });
    window.addEventListener("keydown", (event)=>{
        if(event.key === kit.slice(0,1)){
            audioEl.play();
            btnEl.style.transform = "scale(.9)";
            setTimeout(()=>{
                btnEl.style.transform = "scale(1)"
            }, 100)
        };
    });

});