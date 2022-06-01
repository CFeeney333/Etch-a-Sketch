const GRID_SIZE = 16;

const body = document.querySelector("body");

const container = document.createElement("div");
container.className = "grid-container";
container.style.gridTemplateColumns = GRID_SIZE;
container.style.gridTemplateRows = "auto";

function createGrid(size) {
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

body.appendChild(container);

function onHover(e) {
  e.target.classList.add("hovered");
}
