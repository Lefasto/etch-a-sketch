const colors = ["red", "blue", "green", "gray", "yellow", "pink"];
const container = document.querySelector(".container");
const setBtn = document.querySelector(".set-btn");

function randomColor(colorsArray) {
  const colorPicker = Math.floor(Math.random() * colorsArray.length);
  return colorsArray[colorPicker];
}

container.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("column")) {
    e.target.style.background = randomColor(colors);
  }
});

function removeChildElements(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    row.style.height = `${100 / size}%`;
    container.appendChild(row);
    for (let j = 0; j < size; j++) {
      const column = document.createElement("div");
      column.classList.add("column");
      column.style.width = `${100 / size}%`;
      row.appendChild(column);
    }
  }
}

setBtn.addEventListener("click", () => {
  const size = parseInt(prompt("How big should the grid be?", "0"), 10);

  if (size > 100) {
    alert("size should be 100 or less!");
    return;
  }

  removeChildElements(container);
  createGrid(size);
});
