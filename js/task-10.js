function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector("#controls>input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesRef = document.querySelector("#boxes");

boxesRef.style.display = "flex";
boxesRef.style.flexWrap = "wrap";

createBtn.addEventListener("click", addBoxes);

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const boxesArray = [];

  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement("div");

    newDiv.style.height = 30 + 10 * i + "px";
    newDiv.style.width = 30 + 10 * i + "px";
    newDiv.style.background = getRandomHexColor();

    boxesArray.push(newDiv);
  }
  return boxesArray;
}

function addBoxes() {
  let boxesToAdd = createBoxes(inputNumber.value);
  boxesRef.append(...boxesToAdd);
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
}
