let totalCharEl = document.getElementById("total-char");
let reaminingCharEl = document.getElementById("remaining-char");

const inputUserEl = document.getElementById("tweet-count");

let len = 0;


totalTweet = 0;
totalCharEl.innerHTML = totalTweet;



maxTweet = 280;
reaminingCharEl.innerHTML = maxTweet;





function countChar(val){
    len = val.value.length;
    console.log(len)
    updateReaming()
    updateTotal()
}


function updateTotal(){
    totalCharEl.innerHTML = totalTweet + len
}

function updateReaming(){
    reaminingCharEl.innerHTML = maxTweet - len
}