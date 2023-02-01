const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", onInput);

function onInput() {
  textInput.value !== ""
    ? (textOutput.textContent = textInput.value.trim())
    : (textOutput.textContent = "Anonymous");
}
