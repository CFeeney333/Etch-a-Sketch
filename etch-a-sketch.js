const DEFAULT_SIZE = 16;

const body = document.querySelector("body");

const container = document.createElement("div");
container.className = "grid-container";

const size = document.querySelector("#current-size");
let currentSize = DEFAULT_SIZE;
size.textContent = currentSize;

createGrid(DEFAULT_SIZE);
body.appendChild(container);

function createGrid(size) {
  // Delete the current grid
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }

  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      const item = document.createElement("div");
      item.className = "grid-item";
      item.style.gridColumn = "" + i + "/" + (i + 1);
      item.style.gridRow = "" + j + "/" + (j + 1);
      item.addEventListener("mouseenter", onHover);
      container.appendChild(item);
    }
  }
}

function onHover(e) {
  e.target.classList.add("hovered");
}

function onSize(e) {
  let newSize = DEFAULT_SIZE;
  do {
    newSize = Number(prompt("Please enter a new size (less than 100)"));
  } while (newSize > 100);
  currentSize = newSize;
  size.textContent = currentSize;
}
