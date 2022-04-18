const container = document.querySelector(".container");
const button = document.querySelector(".button")
let pixel = document.querySelector(".pixel");
let input = prompt("Test");

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

createGrid();

container.style.gridTemplateColumns=`repeat(${input}, 1fr)`;

button.addEventListener("click", () => {
  container.textContent = "";
  createGrid();
});