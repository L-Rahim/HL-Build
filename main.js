console.log("main.js");


//random number generator
const generateButton = document.querySelector(".generate-random-number");
const randomNumberDiv = document.querySelector(".random-number");

generateButton.addEventListener("click", () => {
  // Genereer een willekeurig getal tussen 0 en 12
  const randomNum = Math.floor(Math.random() * 13);

  randomNumberDiv.textContent = `Uw getal = ${randomNum}` ;
});
