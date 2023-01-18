let num1 = Math.ceil(Math.random() * 10);
let num2 = Math.ceil(Math.random() * 10);
let score = 0;

let scoreEl = document.getElementById("score");
const num1El = document.getElementById("span-num1");
const num2El = document.getElementById("span-num2");
const inputAnswer = document.getElementById("input");
const formEl = document.getElementById("form");
const previousAnswerEl = document.getElementById("previous");


num1El.innerHTML = num1;
num2El.innerHTML = num2;
scoreEl.innerHTML = score;
previousAnswerEl.innerHTML = 0;




formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    checkMultiply();
    cleanAnswer();
    newNumbers();   
    colorsScore();
})

function checkMultiply() {
    if (+inputAnswer.value === num1 * num2) {
        previousAnswerEl.innerHTML = num1 * num2;
        previousAnswerEl.style.color = "#6cb654";
        score++;
        scoreEl.innerHTML = score
        savingScoreLocal()
        console.log(score)
    } else {
        previousAnswerEl.innerHTML = num1 * num2;
        previousAnswerEl.style.color = "#bc514e";
        score--;
        scoreEl.innerHTML = score
        savingScoreLocal()
        console.log(score)
    }
}

function colorsScore(){
    if (score < 0){
        scoreEl.style.color = "#bc514e"; //red
    }
    else if (score > 0){
        scoreEl.style.color = "#6cb654"; // green
    }
    else{
        scoreEl.style.color = "#c8c8c8";
    }       
}

function newNumbers() {
    num1 = Math.ceil(Math.random() * 10);
    num2 = Math.ceil(Math.random() * 10);
    num1El.innerHTML = num1;
    num2El.innerHTML = num2;
}


function cleanAnswer() {
    inputAnswer.value = ""
}

function savingScoreLocal(){
    localStorage.setItem("score", JSON.stringify(score))
}