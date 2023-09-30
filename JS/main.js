console.log("main.js");


//random number generator
const generateButton = document.querySelector(".button-64");
const randomNumberDiv = document.querySelector(".random-number");

console.log("generateButton is " + generateButton);

generateButton.addEventListener("click", buttonClick)
// Genereer een willekeurig getal tussen 0 en 6

let randomNum;

function buttonClick() {
  randomNum = Math.floor(Math.random() * 7);
  randomNumberDiv.textContent = "Uw getal = " + randomNum;
}

// button van html pakken 

const btn = document.querySelector(".text");

btn.addEventListener("click" , function() {
  const imagenumber = randomNum(1, 6);

  diceImg.src = "./images/dice-" + imagenumber + png;
 });