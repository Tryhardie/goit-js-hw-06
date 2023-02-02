function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");

changeColorBtn.addEventListener("click", changeColor);

function changeColor() {
  const randomColor = getRandomHexColor();

  spanRef.textContent = randomColor;
  bodyRef.style.backgroundColor = randomColor;
}
