console.log("main js");

const throwButton = document.querySelector(".throw-button");
console.log("throw-button is " + throwButton);

const numberElement = document.querySelector(".number");

throwButton.addEventListener("click", myFunction);

let counter = 0;

function myFunction() {
  const a = Math.random() * (12 - 1) + 1;
  console.log(`Random value between 1 and 12 is ${a}`);

  numberElement.textContent = `Random value between 1 and 12 is ${a}`;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const myNumber = getRandomInt(9);
console.log(myNumber);
