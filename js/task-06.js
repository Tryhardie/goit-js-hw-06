const inputRef = document.querySelector("#validation-input");
const inputRequrement = Number(inputRef.dataset.length);

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const inputLength = event.currentTarget.value.trim().length;

  if (inputLength === inputRequrement) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else if (inputLength !== inputRequrement) {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
}
