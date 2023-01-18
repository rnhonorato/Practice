let inputColors = document.getElementById("colors");
const ulElement = document.getElementById("ul-colors")


console.log(inputColors.value)

qntColors = inputColors.value
newBoxes()


inputColors.addEventListener("change", ()=>{
    qntColors = inputColors.value
    newBoxes()
    
    
    
})


function generateColor(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

function newBoxes(){
    ulElement.innerHTML = ""
    for (var i = 0; i < qntColors; i++){
        var li = document.createElement("li");
        li.classList.add("box");
        var span = document.createElement("span");
        span.classList.add("span-box");
        let newColor = "#" + generateColor(); 
        li.style.backgroundColor = newColor
        span.innerHTML = newColor;
        li.appendChild(span);
        ulElement.appendChild(li);
    }
}