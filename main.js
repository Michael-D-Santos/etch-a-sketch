const container = document.querySelector(".container");

for (i = 0; i < 256; i++) {
  let pixel = document.createElement("div");
  pixel.classList.add("pixel");
  pixel.textContent = "";
  container.appendChild(pixel);
}

container.style.gridTemplateColumns=`repeat(16, 1fr)`;