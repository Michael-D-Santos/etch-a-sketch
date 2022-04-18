const container = document.querySelector(".container");
let pixel = document.querySelector(".pixel");
let input = prompt("Test");

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