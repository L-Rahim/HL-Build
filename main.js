console.log("main js");

const throwButton = document.querySelector(".throw-button");
console.log("throw-button is " + throwButton);

const numberElement = document.querySelector(".number");

throwButton.addEventListener("click", myFunction);

let counter = 0;

function myFunction(max) {
  return Math.floor(Math.random() * max) + 1;
}

const myNumber = myFunction(6);
console.log(myNumber);
