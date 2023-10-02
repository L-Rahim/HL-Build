console.log("main.js");

//random number generator
const generateButton = document.querySelector(".button-64");
const randomNumberDiv = document.querySelector(".random-number");

console.log("generateButton is " + generateButton);

generateButton.addEventListener("click", buttonClick);
// Genereer een willekeurig getal tussen 0 en 6

const dobbelsteen = document.querySelector(".images");

buttonClick;

function buttonClick() {
  randomNum = Math.floor(Math.random() * 7);
  randomNumberDiv.textContent = "Uw getal = " + randomNum;
  switch (randomNum) {
    case 1:
      dobbelsteen.src = "/img/Dice1.png";
      break;
    case 2:
      dobbelsteen.src = "/img/Dice2.png";
      break;
    case 3:
      dobbelsteen.src = "/img/Dice3.png";
      break;
    case 4:
      dobbelsteen.src = "/img/Dice4.png";
      break;
    case 5:
      dobbelsteen.src = "/img/Dice5.png";
      break;
    case 6:
      dobbelsteen.src = "/img/Dice6.png";
      break;
  }
}
