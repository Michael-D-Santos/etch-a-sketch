//A function that creates a square grid. Its algorithm is as follows:
//• Get input from user to determine grid size and amount of columns
//• If the input is not a whole number from 1-100, reprompt
//• Then, create the square itself using a for loop, and change the color of
//each pixel when they are hovered over.

function createGrid() {
  let input = prompt("How many squares do you want on each side?");
  while (/^(100|[1-9][0-9]?)$/.test(input) == false) {
    input = prompt("How many squares do you want on each side?");
  }
  for (i = 0; i < input ** 2; i++) {
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.textContent = "";
    container.appendChild(pixel);
    pixel.addEventListener("mouseover", () => {
      pixel.classList.toggle("color");
    });
  }
  container.style.gridTemplateColumns=`repeat(${input}, 1fr)`;
}

//Declares variables corresponding to HTML classes

const container = document.querySelector(".container");
const button = document.querySelector(".button")

//Displays the square grid

createGrid();

//When the "clear grid" button is clicked; clear the grid and create a new one.

button.addEventListener("click", () => {
  container.textContent = "";
  createGrid();
});