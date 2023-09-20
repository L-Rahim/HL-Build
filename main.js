console.log("main js");


//random number generator
const generateButton = document.querySelector(".generate-random-number");
const randomNumberDiv = document.querySelector(".random-number");

generateButton.addEventListener("click", () => {
  // Genereer een willekeurig getal tussen 0 en 10
  const randomNum = Math.floor(Math.random() * 11);

  randomNumberDiv.textContent = `Willekeurig getal: ${randomNum}`;
});
