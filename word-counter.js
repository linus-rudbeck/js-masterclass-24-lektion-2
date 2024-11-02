console.log("Word counter js");

let text = document.querySelector("#text");
let count = document.querySelector("#count");
let wordCount = document.querySelector("#word-count");

count.addEventListener("click", function(){
    let words = text.value.split(" ");
    console.log(words)

    wordCount.innerText = "Word count: " + words.length;
})