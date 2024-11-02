// Logga i konsollen
console.log("Hej Linus");


// Variabler
let x = 5;
let y = 10;
let sum = x + y;
console.log(sum);


// Hämta element
let mainHeading = document.querySelector("h1");
console.log(mainHeading);


// Eventhanterare
let input = document.querySelector("#input");
let button = document.querySelector("#button");
let output = document.querySelector("#output");

function sayHello(){
    if(input.value == "hej"){
        output.innerText = "Heej!";
    }
    else{
        output.innerText = "Säg hej!";
    }
}

// Kör koden när knappen klickas
button.addEventListener("click", sayHello);