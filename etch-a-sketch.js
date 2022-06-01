const GRID_SIZE = 16;

const body = document.querySelector("body");

const container = document.createElement("div");
container.className = "grid-container";
container.style.gridTemplateColumns = GRID_SIZE;
container.style.gridTemplateRows = "auto";

for (let i = 1; i <= GRID_SIZE; i++) {
  for (let j = 1; j <= GRID_SIZE; j++) {
    const item = document.createElement("div");
    item.className = "grid-item";
    item.textContent = "0";
    item.style.gridColumn = "" + i + "/" + (i + 1);
    item.style.gridRow = "" + j + "/" + (j + 1);
    container.appendChild(item);
  }
}

body.appendChild(container);
