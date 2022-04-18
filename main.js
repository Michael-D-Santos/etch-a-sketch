//Creates a square grid that changes the color of each pixel when hovered over.

function createGrid() {
  for (i = 0; i < input ** 2; i++) {
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.textContent = "";
    container.appendChild(pixel);
    pixel.addEventListener("mouseover", () => {
      pixel.classList.toggle("color");
    });
  }
}

//Declares variables corresponding to HTML classes

const container = document.querySelector(".container");
const button = document.querySelector(".button")

//Determines the size of the square grid

let input = prompt("How many squares do you want on each side?");

//Determines the amount of columns for the square grid

container.style.gridTemplateColumns=`repeat(${input}, 1fr)`;

//Displays the square grid

createGrid();

//When the "clear grid" button is clicked; clear the grid and create a new one
//in its place.

button.addEventListener("click", () => {
  container.textContent = "";
  createGrid();
});