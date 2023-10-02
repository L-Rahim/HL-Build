console.log("main.js");



// Random number generator
const generateButton = document.querySelector(".button-64");
const randomNumberDiv = document.querySelector(".random-number");
const dobbelsteen = document.querySelector(".images");

console.log("generateButton is " + generateButton);

generateButton.addEventListener("click", buttonClick);

function buttonClick() {
  const randomNum = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
  randomNumberDiv.textContent = "Uw getal = " + randomNum;
  dobbelsteen.src = "/img/Dice" + randomNum + ".png"; // Set the image source based on the random number
}
