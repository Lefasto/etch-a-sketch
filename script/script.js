const container = document.querySelector(".container");
const setBtn = document.querySelector(".set-btn");

const size = 16;

let rowSize = 0;
let columnSize = 0;

container.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("column")) {
    e.target.style.background = "greenyellow";
  }
});

function removeChildElements(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function createGrid() {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (let j = 0; j < size; j++) {
      const column = document.createElement("div");
      column.classList.add("column");
      row.appendChild(column);
    }
  }
}

setBtn.addEventListener("click", () => {
  removeChildElements(container);
  createGrid();
});
