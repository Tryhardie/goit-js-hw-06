let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector("#value");

decrementBtn.addEventListener("click", onDecrementBtn);
incrementBtn.addEventListener("click", onIncrementBtn);

function onDecrementBtn() {
  valueRef.textContent = counterValue -= 1;
}

function onIncrementBtn() {
  valueRef.textContent = counterValue += 1;
}
